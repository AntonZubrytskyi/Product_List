import React, {useState} from 'react';
import "./add-product-modal.scss";
import { useDispatch } from "react-redux";
import { createNewProduct } from "../../services/products.service"

const AddProductModal = () => {
    const [productName, setProductName] = useState('')

    const dispatch = useDispatch();
    const addNewProduct = (product) =>{
     dispatch(createNewProduct(product))
    }

    const addProductName = (e) =>{
        const {value} = e.target
        setProductName(value)
    }
   
    return (
        <div className='product-modal'>
        <form onSubmit={addNewProduct} >
         <input name="productName" value={productName} onChange={addProductName} type="text"/>
         <button type='submit'>Add Product</button>
        </form>
        </div>
    )
}

export default AddProductModal; 