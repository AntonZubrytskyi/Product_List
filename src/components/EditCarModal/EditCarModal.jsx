import React from 'react';
import "./edit-car-modal.scss";
import FormEditCar from './FormEditCar';

const AddProductModal = ({ openModal }) => {

    return (
        <div className='edit-modal'>
            <FormEditCar openModal={openModal} />
        </div>
    )
}

export default AddProductModal; 