import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState:{
        products: [],
    },
    reducers:{
        getProducts(state, action) {
        state.products = action.payload
        },
        addProduct(state, action){
        state.products = action.payload
        },
        editProduct(state, action){
        state.products = action.payload
        },
        deleteProduct(state, action){
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
})

export default productsSlice.reducer;
export const {getProducts, addProduct, editProduct, deleteProduct} = productsSlice.actions;