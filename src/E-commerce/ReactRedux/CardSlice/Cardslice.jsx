
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, category, price ,image,description,rating} = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ id, name, price,image,description,category ,rating,quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;