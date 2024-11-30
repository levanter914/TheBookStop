import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push({ ...action.payload, quantity: 1 }); // Default quantity to 1
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Added to the Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    title: "Already Added to the Cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
                });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
        },
        updateCartItemQty: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.cartItems.find(item => item._id === productId);
            if (item) {
                item.quantity = quantity; // Update the quantity
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
});

// export the actions   
export const { addToCart, removeFromCart, updateCartItemQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
