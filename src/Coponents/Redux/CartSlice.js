import { createSlice } from "@reduxjs/toolkit";

// Initial state of the cart
const initialState = {
  value: 0, // The value represents the number of items in the cart
};

export const cartSlice = createSlice({
  name: "shopCart", // This is the name of the slice
  initialState, // Set the initial state here
  reducers: {
    // Action to increment the cart item count
    increment: (state) => {
      state.value += 1; // Increase the cart value by 1
    },
    // Action to decrement the cart item count
    decrement: (state) => {
      state.value -= 1; // Decrease the cart value by 1
    },
    // Action to reset the cart item count
    reset: (state) => {
      state.value = 0; // Reset the cart value to 0
    },
  },
});

// Export actions from the slice
export const { increment, decrement, reset } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
