import React from 'react'
import { Link } from 'react-router-dom';
import "./product-card.scss"
import Button from '../../UI/Button/Button';



const ProductCard = ({ product, toggleDeleteModal, getId }) => {

  const showDetails = () => {
    console.log(product.id)
  }

  return (
    <div className='product' >
      <p className='product__title'>{product.name}</p>
      <Link to={`/details/${product.id}`} state={product}>
        <img className='product__img' src={product.image} alt="Logo" onClick={() => getId(product.id)} />
      </Link>
      <div className='product__btn'>
        <Button className='del-btn' onClick={() => { toggleDeleteModal(); getId(product.id) }}>Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard;