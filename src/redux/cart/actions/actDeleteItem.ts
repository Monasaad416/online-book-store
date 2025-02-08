import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@redux/store';
import { actGetProducts } from '@redux/products/productsSlice';
import { BASE_URLS } from '@constants/END_POINTS';
import actGetCartItems from './actGetCartItems';
import { TCartItems } from '@customTypes/cartItems';




// Define the TDeleteItemPayload type
type TDeleteItemPayload = {
  "book": string;
};


 const actDeleteItem = createAsyncThunk<
  TCartItems, // Return type of the async function
  TDeleteItemPayload, // Type of the argument
  { state: RootState } // Extra options
>(
  'cart/actDeleteItem',
  async ({book}, thunkAPI) => {
    await thunkAPI.dispatch(actGetProducts());

    const { getState, rejectWithValue } = thunkAPI;
    const state = getState() as RootState;
    const { accessToken } = state.customerAccessToken;


    //console.log(accessToken);
    if (accessToken) {
      try {
        const response = await axios.delete<TCartItems>(
            BASE_URLS.deleteBasketItem, 
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            data: { book } 
          }
        );

        console.log(response);

        const updatedItem = response.data;

        if (!updatedItem) {
          return rejectWithValue('No items updated');
        }

        // Dispatch actGetCartItems to update cart items in the state
        thunkAPI.dispatch(actGetCartItems());
        return updatedItem;

      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data.message || error.message);
        } else {
          return rejectWithValue('An unexpected error occurred');
        }
      }
  }else{
          return rejectWithValue('Login to update item quantity');
    }
  }
);


export default actDeleteItem
