import { TProducts } from '@customTypes/products.ts';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@redux/store";
import { TCartItems } from "@customTypes/cartItems.ts";
import { actGetProducts } from "@redux/products/productsSlice";
import { BASE_URLS } from "@constants/END_POINTS";
import AxiosErrorHandler from 'src/utilities/axiosErrorHandler';


type TResponse = TCartItems;


//async take 2params payload & thunkAPI & if there is no payload put _ instead
//if (axios.isAxiosError(error)) without this condition error will be undefined son you must put condidion
//thay error from axios 
//error.response.data.message will give error because may be no response so you must put ?
//error.response?.data.message

const actGetCartItems = createAsyncThunk(
  "cart/actGetCartItems",
  async (_, thunkAPI) => {
    try {
      await thunkAPI.dispatch(actGetProducts()); // Fetch products first

      const { getState } = thunkAPI;
      const state = getState() as RootState;
      const { customerAccessToken, products } = state;

      if (!customerAccessToken) {
        return thunkAPI.rejectWithValue("No customer access token");
      }

      const response = await axios.get<TResponse>(
        `${BASE_URLS.basketItems}`, {
          headers: {
            Authorization: `Bearer ${customerAccessToken.accessToken}`
          }
        }
      );

      const items = response.data.items.filter(filteredItem => filteredItem.quantity > 0);
      const _id = response.data._id;
      //console.log(response,items,_id);

      if (!items) {
        return thunkAPI.rejectWithValue("No items found in cart");
      }

      //console.log('API Response:', response.data); // Log entire response

      let totalPrice = 0;
      const productsInfo: TProducts = [];

      items.forEach(item => {
        //console.log('Item:', item); // Log each item

        const productId = item.book;
        const product = products.value.find(product => product._id === productId);

        if (product) {
          const { price,name } = product;
  
          const totalItem = price * item.quantity ;
          totalPrice += totalItem;

          //console.log('Product:', product); // Debugging log
          //console.log('Price:', price);    // Debugging log

          const productFullInfo = { ...item, price,name};
          productsInfo.push(productFullInfo);

          //console.log(productFullInfo)
    
          
        } else {
          //console.warn('Product not found for item:', item); // Log warning if product is not found
        }
      });
      

      return {_id:_id, items:items, total:totalPrice, productsInfo:productsInfo, customer: response.data.customer };
    } catch (error) {
        return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default actGetCartItems;







