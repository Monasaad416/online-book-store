import { TLoading } from '@customTypes/shared';
import { createSlice } from '@reduxjs/toolkit'
import actAddNewItemToCart from './actions/actAddNewItemToCart';



export interface INewCartItemState {
  //its preferred to define key as string because js convert it to string 
  //item: {book_id,qty}
  item: { book:string,quantity:number};
  loading: TLoading;
  error: string | null;

}

const initialState: INewCartItemState = {
  item: {book:'',quantity:0},
  loading: "idle",
  error: null
}




export const newCartItemSlice = createSlice({
  name: 'newCartItem',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      //add item to cart
      builder.addCase(actAddNewItemToCart.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      });

      builder.addCase(actAddNewItemToCart.fulfilled, (state, action) => {
        state.loading = "succeeded";
        if (action.payload) {
          //console.log(action.payload);
          // const {id,quantity} = action.payload
    
          // state.items = action.payload;
        


        } else {
            //items is {} so if no items in cart it must be an empty {}
           // console.log('empty')
            state.item = {book:'',quantity:0};
        }
      });

      builder.addCase(actAddNewItemToCart.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          //guard to check if there is action payload && typeof action.payload
          state.error = action.payload;
        }
      });



    
  }
})


export {actAddNewItemToCart};
export default newCartItemSlice.reducer