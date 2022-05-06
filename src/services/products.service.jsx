import { axiosInstance, PRODUCT_URL } from "./config";
import { getProducts, addProduct, deleteProduct, editProduct } from "../redux/productsSlice";

export const createNewProduct = (product) => (dispatch) => {
    axiosInstance
        .post(PRODUCT_URL, product)
        .then(value => dispatch(addProduct(value.data)))
        .catch(e => console.log(e))
};

export const getAllProducts = () => (dispatch) => {
    axiosInstance
        .get(PRODUCT_URL)
        .then(value => dispatch(getProducts(value.data)))
        .catch(e => console.log(e))
};

export const deleteProductById = (id) => (dispatch) => {
    axiosInstance.delete(PRODUCT_URL + "/" + id)
        .then(value => {
            if (value.status === 204) {
                dispatch(deleteProduct(id))
            }
        })
        .catch(e => console.log(e))
};

export const updateProductById = (product, id) => (dispatch) => {
    axiosInstance.put(PRODUCT_URL + "/" + id, product)
        .then(value => dispatch(editProduct(value.data)))
        .catch(e => console.log(e))
};

