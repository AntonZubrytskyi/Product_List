import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProductCard from '../ProductCard/ProductCard';
import { getAllCars, deleteCarById } from "../../services/cars.services"
import DeleteCarModal from '../DeleteCarModal/DeleteCarModal';
import "./product-list.scss"
import { getCarId } from '../../redux/carsSlice';

const ProductsList = () => {

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false)

  const removeCar = (id) => {
    dispatch(deleteCarById(id))
  }

  const toggleDeleteModal = () => {
    setIsOpen(!isOpen)
  }
  const getId = (id) => {
    dispatch(getCarId(id))
  }
  useEffect(() => (
    dispatch(getAllCars())
  ), [dispatch])

  const { cars } = useSelector(state => state.cars);

  return (
    <div className='product-container'>
      {
        [...cars]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(item =>
            <ProductCard key={item.id} product={item} getId={getId} toggleDeleteModal={toggleDeleteModal} />
          )
      }
      {isOpen && <DeleteCarModal removeProduct={removeCar} toggleDeleteModal={toggleDeleteModal} />}
    </div>
  )
}

export default ProductsList