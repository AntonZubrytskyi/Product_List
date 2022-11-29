import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
        car: {
            size: {},
        },
        comments: [],
        carId: null,
        carImageUrl: null
    },
    reducers: {
        getCars(state, action) {
            state.cars = action.payload
        },
        getCar(state, action) {
            state.car = action.payload
        },
        getCarId(state, action) {
            state.carId = action.payload
        },
        addCar(state, action) {
            state.cars = [...state.cars, action.payload]
        },
        getComments(state, action) {
            state.comments = action.payload
        },
        addComment(state, action) {
            state.comments = [...state.comments, action.payload]
        },
        deleteComment(state, action) {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
        addImageUrl(state, action) {
            state.carImageUrl = action.payload
        },
        // editCar(state, action) {
        //     state.cars = action.payload
        // },
        deleteCar(state, action) {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        }
    }
})

export default carsSlice.reducer;
export const {
    getCars,
    addCar,
    editCar,
    deleteCar,

    addImageUrl,

    getCar,
    getCarId,

    getComments,
    addComment,
    deleteComment
} = carsSlice.actions;