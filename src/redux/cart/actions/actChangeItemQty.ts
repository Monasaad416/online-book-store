import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '@redux/store';
import { actGetProducts } from '@redux/products/productsSlice';
import { BASE_URLS } from '@constants/END_POINTS';
import actGetCartItems from './actGetCartItems';
import { TCartItems } from '@customTypes/cartItems';
import AxiosErrorHandler from 'src/utilities/axiosErrorHandler';



type TCartItem = {
  "book": string;
  "quantity": number;
};

// Define the TChangeQuantityPayload type
type TChangeQuantityPayload = {
  "cartId": string;
  "items": TCartItem[];
};


 const actChangeItemQty = createAsyncThunk<
  TCartItems, // Return type of the async function
  TChangeQuantityPayload, // Type of the argument
  { state: RootState } // Extra options
>(
  'cart/actChangeItemQty',
  async ({cartId, items}, thunkAPI) => {
    await thunkAPI.dispatch(actGetProducts());

    const { getState, rejectWithValue } = thunkAPI;
    const state = getState() as RootState;
    const { accessToken } = state.customerAccessToken;


    //console.log(accessToken);
    if (accessToken) {


    try {
      const response = await axios.put<TCartItems>(
        `${BASE_URLS.updateBasketItem(cartId)}`,
        { items },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      //console.log(response);

      const updatedItem = response.data;

      if (!updatedItem) {
        return rejectWithValue('No items updated');
      }

      // Dispatch actGetCartItems to update cart items in the state
      thunkAPI.dispatch(actGetCartItems());
      return updatedItem;

    } catch (error) {
       return rejectWithValue(AxiosErrorHandler(error));
    }
  }else{
          return rejectWithValue('Login to update item quantity');
    }
  }
);


export default actChangeItemQty
