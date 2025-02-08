import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@redux/store";
import { actGetProducts } from "@redux/products/productsSlice";
import { BASE_URLS } from "@constants/END_POINTS";
import { TNewCartItem } from "@customTypes/newCartItem";
import AxiosErrorHandler from "src/utilities/axiosErrorHandler";

type TResponse = TNewCartItem;

const actAddNewItemToCart = createAsyncThunk(
  "cart/actAddNewItemToCart",
  async (item: { book: string; quantity: number }, thunkAPI) => {
    await thunkAPI.dispatch(actGetProducts()); // Fetch products first

    const { getState, rejectWithValue } = thunkAPI;
    const state = getState() as RootState;
    const { accessToken } = state.customerAccessToken;


    if (!accessToken) {
      return rejectWithValue("Login to continue shopping");
    }

    try {
      if(accessToken) {
        const response = await axios.post<TResponse>(
          `${BASE_URLS.addBasketItem}`,
          item, {
              headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );


        
      //console.log(response)

      const newItem = response.data;

      if (!newItem) {
        return rejectWithValue("No items added to cart");
      }

      return newItem;
      }

    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default actAddNewItemToCart;
