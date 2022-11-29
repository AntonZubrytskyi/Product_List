import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik'
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewComment } from '../../services/cars.services';
import TextField from "./TextField";
import DateField from './DateField';
import Button from '../../UI/Button/Button';
import "./add-comment-modal.scss";


const FormAddComment = ({ openCommentModal }) => {

    // const history = useHistory()
    const dispatch = useDispatch();

    const { id } = useParams()

    const { car } = useSelector(state => state.cars)

    const notify = () => {
        toast.success("Comment Added Successfully", { position: 'top-center', autoClose: 2000 });
    }
    console.log(car.comments)


    const addCar = (comment) => {
      
        const reverseDate = comment.date.split(/[-T]/).reverse()
        const time = reverseDate.shift();

        comment.date = reverseDate.join('.')
        comment.time = time
        
        dispatch(createNewComment(comment, id));
        openCommentModal();
        toast.configure();
        notify();
    }

    const initialValues = {
        carId: id,
        description: "",
        date: "",
        time: ""
    };
   
    const validation = Yup.object({
        description: Yup.string()
            .required('Required!'),
        date: Yup.string()
            .required('Required!'),
    });

    return (
        <div className='form'>
            <div className='form__container'>
                <div className='form__row'>
                    <h2 className='form__title'>Add Comment</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
                        onSubmit={addCar}
                    >
                        {
                            ({ values, setFieldValue }) => (

                                <Form>
                                    <TextField label='Description' name='description' type='text' />
                                    <DateField label='Date' name='date' type='datetime-local' />
                                    <div className="form__btn-container">
                                        <Button
                                            className="add-btn"
                                            type="submit">
                                            Add Comment
                                        </Button>
                                        <Button
                                            className="cnsl-btn"
                                            onClick={openCommentModal}
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

export default FormAddComment;