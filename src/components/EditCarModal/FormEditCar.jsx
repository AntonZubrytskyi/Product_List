import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateCarById } from '../../services/cars.services';
import TextField from "./TextField";
import Button from '../../UI/Button/Button';
import "./edit-car-modal.scss";

const FormEditCar = ({ openModal}) => {

    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { id } = useParams()

    console.log(id)

    const { car } = useSelector(state => state.cars)

    const notify = () => {
        toast.success("Car Edited Successfully", { position: 'top-center', autoClose: 2000 });
    }

    const editCar = (car) => {
        dispatch(updateCarById(car, id));
        openModal();
        navigate(`/details/${id}`)
        toast.configure();
        notify();
    }
    
    const initialValues = {
        name: car.name,
        model: car.model,
        size: {
            width: car.size.width,
            height: car.size.height,
            length: car.size.length
        },
        power: car.power,
        weight: car.weight,
    };
    // http://api.cloudinary.com/v1_1/dlirnezkw/image/upload
    // i2wukgbc

    const validation = Yup.object({
        name: Yup.string()
            .required('Required!'),
        model: Yup.string()
            .required('Required!'),
        power: Yup.string()
            .required('Required!'),
        size: Yup.object({
            width: Yup.string()
                .required('Required!'),
            height: Yup.string()
                .required('Required!'),
            length: Yup.string()
                .required('Required!'),
        }),
        weight: Yup.string()
            .required('Required!'),
    });

    return (
        <div className='form'>
            <div className='form__container'>
                <div className='form__row'>
                    <h2 className='form__title'>Edit Car Details</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={editCar}
                    >
                                <Form>
                                    <TextField label='Name' name='name' type='text' />
                                    <TextField label='Model' name='model' type='text' />
                                    <TextField label='Power' name='power' type='text' />
                                    <TextField label='Width' name='size.width' type='text' />
                                    <TextField label='Height' name='size.height' type='text' />
                                    <TextField label='Length' name='size.length' type='text' />
                                    <TextField label='Weight' name='weight' type='text' />
                                    <div className="form__btn-container">
                                        <Button
                                            className="edit-btn"
                                            type="submit">
                                            Edit Car
                                        </Button>
                                        <Button
                                            className="cnsl-btn"
                                            onClick={openModal}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default FormEditCar;