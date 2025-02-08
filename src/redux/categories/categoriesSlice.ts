import { createSlice } from '@reduxjs/toolkit'
import actGetCategories from './actions/actGetCategories.ts'
import {TLoading} from '@customTypes/shared.ts'
import { TCategories } from '@customTypes/categories.ts'


export interface ICategoriesState {
  value: TCategories[],
  loading:TLoading,
  error: string | null,
}

const initialState: ICategoriesState = {
  value: [],
  loading:'idle',
  error: null,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.value = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        //guard to check if there is action payload && typeof action.payload
        state.error = action.payload;
      }
    });
  },

})

// Action creators are generated for each case reducer function

export { actGetCategories } 

export default categoriesSlice.reducer