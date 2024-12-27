import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Redux/CartSlice'

export default configureStore({
  reducer: { shopCart:cartReducer},
})