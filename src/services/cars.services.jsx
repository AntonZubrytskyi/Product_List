import { axiosInstance, CAR_URL, COMMENT_URL, CLOUD_URL } from "./config";
import {
    getCars,
    addCar,
    deleteCar,
    editCar,
    getComments,
    addImageUrl,
    getCar,
    addComment,
    deleteComment
} from "../redux/carsSlice";

export const createNewCar = (car) => (dispatch) => {
    axiosInstance
        .post(CAR_URL, car)
        .then(resp => dispatch(addCar(resp.data)))
        .catch(e => console.log(e))
};
export const uploadImage = (car) => (dispatch) => {
    axiosInstance
        .post(CLOUD_URL, car)
        .then(resp => dispatch(addImageUrl(resp.data.url)))
        .then(resp => console.log(resp))
        .catch(e => console.log(e))
};

export const getAllCars = () => (dispatch) => {
    axiosInstance
        .get(CAR_URL)
        .then(resp => dispatch(getCars(resp.data)))
        .catch(e => console.log(e))
};
export const getCarById = (id) => (dispatch) => {
    axiosInstance
        .get(CAR_URL + "/" + id)
        .then(resp => dispatch(getCar(resp.data)))
        .catch(e => console.log(e))
};


export const deleteCarById = (id) => (dispatch) => {
    axiosInstance.delete(CAR_URL + "/" + id)
        .then(resp => {
            if (resp.status === 200) {
                dispatch(deleteCar(id))
            }
        })
        .catch(e => console.log(e))
};

export const updateCarById = (car, id) => (dispatch) => {
    axiosInstance
        .patch(CAR_URL + "/" + id, car)
        .then(resp => dispatch(getCar(resp.data)))
        .catch(e => console.log(e))
};
export const getAllComments = (id) => (dispatch) => {
    axiosInstance
        .get(CAR_URL + "/" + id + COMMENT_URL)
        // .then(resp=>console.log(resp.data))
        .then(resp => dispatch(getComments(resp.data)))
        .catch(e => console.log(e))
};
export const createNewComment = (comment, id) => (dispatch) => {
    axiosInstance
        .post(CAR_URL + "/" + id + COMMENT_URL, comment)
        .then(resp => dispatch(addComment(resp.data)))
        .catch(e => console.log(e))
};

export const deleteCommentById = (id) => (dispatch) => {
    axiosInstance.delete(COMMENT_URL + "/" + id)
        .then(resp => {
            if (resp.status === 200) {
                dispatch(deleteComment(id))
            }
        })
        .catch(e => console.log(e))
};