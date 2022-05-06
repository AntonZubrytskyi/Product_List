import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState:{
        "products": [],
    },
    reducers:{
        getProducts(state) {

        },
        addProducts(state){

        },
        editProducts(state){

        },
        deleteProducts(state){

        }
    }
})

export default productsSlice.reducer;
export const {getProducts, addProducts, editProducts, deleteProducts} = productsSlice.actions;