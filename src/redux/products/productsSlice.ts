import { createSlice } from '@reduxjs/toolkit'
import actGetProducts from './actions/actGetProducts'
import { TLoading } from '@customTypes/shared.ts';
import { TProduct } from '@customTypes/product.ts';


export interface IProductsState {
  value: TProduct[];
  loading: TLoading,
  error: string | null,
}

const initialState: IProductsState = {
  value: [],
  loading:'idle',
  error: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeProducts: (state) =>{
      state.value = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.value = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        //guard to check if there is action payload && typeof action.payload
        state.error = action.payload;
      }
    });
  },

})

// Action creators are generated for each case reducer function
export { actGetProducts } 
export const { removeProducts } = productsSlice.actions

export default productsSlice.reducer