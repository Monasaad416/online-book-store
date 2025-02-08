import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URLS } from "../../../Constants/END_POINTS";
import {TProduct} from '@customTypes/product.ts'
import AxiosErrorHandler from "src/utilities/axiosErrorHandler";


type TResponse = TProduct [];
interface IBooksResponse {
    data: TResponse; // هنا نستخدم النوع TResponse
}


//async take 2params payload & thunkAPI & if there is no payload put _ instead
//if (axios.isAxiosError(error)) without this condition error will be undefined son you must put condidion
//thay error from axios 
//error.response.data.message will give error because may be no response so you must put ?
//error.response?.data.message
const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue ,signal} = thunkAPI;
    try {
      const response = await axios.get<IBooksResponse>(
        BASE_URLS.books,
        {signal}
      );

      //console.log(response.data?.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default actGetProducts;