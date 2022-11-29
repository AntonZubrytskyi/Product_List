import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Button from '../../UI/Button/Button'
import { deleteCarById } from '../../services/cars.services'
import "./delete-car-modal.scss"

const DeleteCarModal = ({ toggleDeleteModal }) => {

    const { carId } = useSelector(state => state.cars)
    
    const dispatch = useDispatch()

    const removeProduct = () => {
        dispatch(deleteCarById(carId))
        toggleDeleteModal()
    }

    return (
        <div className='delete-modal'>
            <p className='delete-modal__title'>Are you sure to delete this car?</p>
            <div className='delete-modal__buttons'>
                <Button onClick={removeProduct} className='del-btn'>Delete</Button>
                <Button onClick={ toggleDeleteModal } className='cnsl-btn'>Cancel</Button>
            </div>
        </div>
    )
}

export default DeleteCarModal