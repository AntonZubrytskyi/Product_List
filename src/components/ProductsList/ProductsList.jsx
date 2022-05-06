import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from "../../services/products.service"
import "./product-list.scss"

const ProductsList = () => {

  const dispatch = useDispatch();

  useEffect(() => (
    dispatch(getAllProducts())
  ), [dispatch])

  const {products} = useSelector(state => state.products);

  return (
    <div className='product-container'>
      {
        products.map(item=>
          <div>
            <ProductCard key={item.id} product={item} />
            </div>
        )
      }
    </div>
  )
}

export default ProductsList