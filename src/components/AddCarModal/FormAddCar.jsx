import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik'
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { createNewCar } from '../../services/cars.services';
import TextField from "./TextField";
import Button from '../../UI/Button/Button';
import "./add-car-modal.scss";
import FileField from './FileField';

const FormAddCar = ({ openModal }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const notify = () => {
        toast.success("Car Added Successfully", { position: 'top-center', autoClose: 2000 });
    }
    const { carImageUrl } = useSelector(state => state.cars);

    const addCar = (car) => {
        car.image = carImageUrl;
        dispatch(createNewCar(car));
        navigate('/')
        openModal();
        toast.configure();
        notify();
    }
    
    const initialValues = {
        image: "",
        name: "",
        model: "",
        size: {
            width: "",
            height: "",
            length: ""
        },
        power: "",
        count: 8,
        weight: "",
    };
    // http://api.cloudinary.com/v1_1/dlirnezkw/image/upload
    // i2wukgbc

    const validation = Yup.object({
        image: Yup.mixed()
            .required('Required!'),
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
                    <h2 className='form__title'>Add Car</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={addCar}
                    >
                        {
                            ({ values, setFieldValue}) => (

                                <Form>
                                    <FileField name='image' type='file' values={values} setFieldValue={setFieldValue} />
                                    <TextField label='Name' name='name' type='text' />
                                    <TextField label='Model' name='model' type='text' />
                                    <TextField label='Power' name='power' type='text' />
                                    <TextField label='Width' name='size.width' type='text' />
                                    <TextField label='Height' name='size.height' type='text' />
                                    <TextField label='Length' name='size.length' type='text' />
                                    <TextField label='Weight' name='weight' type='text' />
                                    <div className="form__btn-container">
                                        <Button
                                            className="add-btn"
                                            type="submit">
                                            Add Car
                                        </Button>
                                        <Button
                                            className="cnsl-btn"
                                            onClick={openModal}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default FormAddCar;