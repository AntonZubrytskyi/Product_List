import React from 'react'
import { useDispatch } from "react-redux";
import { deleteProductById } from "../../services/products.service"

const ProductCard = ({ product }) => {
  
  const dispatch = useDispatch()

  const removeProduct = (id) => {
  dispatch(deleteProductById(id))
  }
  console.log(product.id)
  return (
    <div className='product-card' >
      <h3 className='product-title'>{product.name}</h3>
      <img src={product.imageUrl} alt="Logo" />
      <button onClick={removeProduct(product.id)}>Delete</button>
    </div>
  )
}

export default ProductCard;