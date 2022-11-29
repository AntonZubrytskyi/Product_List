import React, { Fragment, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import "./car-details.scss"
import EditCarModal from '../EditCarModal/EditCarModal'
import { useEffect } from 'react';
import { getCarById, getAllComments, deleteCommentById } from '../../services/cars.services';
import AddCommentModal from '../AddCommentModal/AddCommentModal';



const CarDetails = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    const { car } = useSelector(state => state.cars)
    const { comments } = useSelector(state => state.cars)


    useEffect(() => {
        dispatch(getCarById(id))
        dispatch(getAllComments(id))
    }, [dispatch, id])
 
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenCommentModal, setIsOpenCommentModal] = useState(false)


    const openEditModal = () => {
        setIsOpenEditModal(!isOpenEditModal)
    }
    const openCommentModal = () => {
        setIsOpenCommentModal(!isOpenCommentModal)
    }
    const removeComment = (id) => {
        dispatch(deleteCommentById(id))
    }
    return (
        < div className='details'>
            <div className='details__header'>
                <h2>Car Details:</h2>
                <Button className="edit-btn" onClick={openEditModal} >Edit</Button>
            </div>
            <div className='details__container'>
                <ul>
                    <li>Name: <span>{car.name}</span></li>
                    <li>Model: <span>{car.model}</span></li>
                    <li>Power: <span>{car.power}</span></li>
                    <li>Weight: <span>{car.weight}</span></li>
                    <li>Width: <span>{car.size.width}</span></li>
                    <li>Height: <span>{car.size.height}</span></li>
                    <li>Lenght: <span>{car.size.length}</span></li>
                </ul>
            </div>
            <div className='details__comments'>
                <h2>Comments:</h2>
                <div className='btn-wrapper'>
                    <Button onClick={openCommentModal} className="add-btn">Add Comment</Button>
                </div>

                {
                    isOpenCommentModal && <AddCommentModal openCommentModal={openCommentModal} />
                }

                <ul>
                    {
                        comments.map(comment =>
                            <Fragment key={comment.id}>
                                <li>
                                    <p>{comment.description}</p>
                                    <h4>Date: {comment.time} {comment.date}</h4>
                                </li>
                                <Button onClick={() => removeComment(comment.id)} className="del-btn">Delete Comment</Button>
                            </Fragment>
                        )
                    }
                </ul>
            </div>
            {isOpenEditModal && <EditCarModal openModal={openEditModal} />}
        </div>
    )
}

export default CarDetails;