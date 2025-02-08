import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URLS } from "../../../Constants/END_POINTS";
import {TCategories} from '@customTypes/categories.ts'
import AxiosErrorHandler from "src/utilities/axiosErrorHandler";


type TResponse = TCategories[];

//async take 2params payload & thunkAPI & if there is no payload put _ instead
//if (axios.isAxiosError(error)) without this condition error will be undefined son you must put condidion
//thay error from axios 
//error.response.data.message will give error because may be no response so you must put ?
//error.response?.data.message
const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue,signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        BASE_URLS.categories,
        {signal}
      );
      return response.data;
    } catch (error) {
        return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default actGetCategories;