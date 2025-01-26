import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Redux/CartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
