import React from 'react';
import "./add-car-modal.scss";
import FormAddCar from './FormAddCar';

const AddCarModal = ({ openModal }) => {

    return (
        <div className='add-modal'>
            <FormAddCar openModal={openModal} />
        </div>
    )
}

export default AddCarModal; 