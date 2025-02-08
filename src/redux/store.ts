import { configureStore ,combineReducers } from '@reduxjs/toolkit'
import {persistStore , persistReducer ,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import CustomerAccessTokenReducer from './customerTokenSlice.ts'
import CartReducer from './cart/cartSlice.ts'
import categoriesReducer from './categories/categoriesSlice.ts'
import productsReducer from './products/productsSlice.ts'
import newCartItemReducer from './cart/newCartItemSlice.ts'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



// const rootPersisiConfig = {
//   key:'root',
//   storage,
//   whitelist:['cart']
// }

const cartPersisiConfig = {
  key:'cart',
  storage,
  whitelist:['items']
}
const accessTokenPersisiConfig = {
  key:'accessToken',
  storage,
  whitelist:['accessToken']
}




const rootReducer = combineReducers({
    customerAccessToken: persistReducer(accessTokenPersisiConfig,CustomerAccessTokenReducer),
    cart: persistReducer(cartPersisiConfig,CartReducer),
    categories: categoriesReducer,
    products: productsReducer,
    newCartItem: newCartItemReducer
})

// const persistedReducer = persistReducer(rootPersisiConfig, rootReducer)


// export const store = configureStore({
//   reducer: persistedReducer, 
// })

export const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    }),
})


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch