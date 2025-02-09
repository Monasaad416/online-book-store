import { TLoading } from '@customTypes/shared';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import actGetCartItems from './actions/actGetCartItems';
import actChangeItemQty from './actions/actChangeItemQty';
import actAddNewItemToCart from './actions/actAddNewItemToCart';
import actDeleteItem from './actions/actDeleteItem';


export interface ICartState {
  //its preferred to define key as string brcause js convert it to string 
  //item: {book_id,qty}
  // cartId?: string;
  _id: string;
  items: { book:string,quantity:number ,_id?:string}[];
  customer: string;
  productsInfo: { book:string,quantity:number ,price:number,name:string,_id:string}[];
  total: number;
  loading : TLoading;
  error: null | string 
}

const initialState: ICartState = {
  _id: '',
  items: [],
  productsInfo:[],
  customer: "",
  total: 0,
  loading :'idle',
  error: null

}




export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ book: string; customerId: string }>) => {
      const { book, customerId } = action.payload;
      state.customer = customerId;

      const existingItem = state.items.find(item => item.book === book);
console.log(action.payload)
      if (existingItem) {
        console.log('existingItem')
        existingItem.quantity += 1;
      } else {
         console.log('not existingItem')
        state.items = [...state.items, { book, quantity: 1 }];
      }

     // console.log(state.items);
    },

    removeCartProductsInfo: (state) =>{
      state.productsInfo = [];
    }
  },
  extraReducers: (builder) => {
    // get cart items
    builder.addCase(actGetCartItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetCartItems.fulfilled, (state, action:any) => {
      state.loading = "succeeded";
      console.log(action.payload);
      state._id = action.payload._id //cartId
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.productsInfo = action.payload.productsInfo;
      state.customer = action.payload.customer;
      //console.log(action.payload._id )

    });

    builder.addCase(actGetCartItems.rejected, (state, action) => {
      state.loading = "failed";
      state.error = typeof action.payload === 'string' ? action.payload : "An unexpected error occurred";
    });


    //change item qty
    builder.addCase(actChangeItemQty.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actChangeItemQty.fulfilled, (state, action) => {
     

      state.loading = "succeeded";
      state._id = action.payload._id //cartId
      state.items = action.payload.items;
      state.total = action.payload.total;

      state.customer = action.payload.customer;
     // console.log(action.payload._id )

    });

    builder.addCase(actChangeItemQty.rejected, (state, action) => {
      state.loading = "failed";
      state.error = typeof action.payload === 'string' ? action.payload : "An unexpected error occurred";
    });

    //delete item from cart
    builder.addCase(actDeleteItem.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actDeleteItem.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state._id = action.payload._id //cartId
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.customer = action.payload.customer;

    });

    builder.addCase(actDeleteItem.rejected, (state, action) => {
      state.loading = "failed";
      state.error = typeof action.payload === 'string' ? action.payload : "An unexpected error occurred";
    });
  }
});



export const { addToCart ,removeCartProductsInfo} = cartSlice.actions

export {actGetCartItems , actAddNewItemToCart};
export default cartSlice.reducer