import { createSlice } from '@reduxjs/toolkit'


export interface CustomerTokenState {
  accessToken: string|null
}

const initialState: CustomerTokenState = {
  accessToken: null,
}

export const customerTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    getCustomerAccessToken: (state,action) => {
      state.accessToken =  action.payload;
      //console.log(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { getCustomerAccessToken } = customerTokenSlice.actions

export default customerTokenSlice.reducer