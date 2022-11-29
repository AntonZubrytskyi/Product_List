import { combineReducers, configureStore} from "@reduxjs/toolkit";
import carsSlice from "./carsSlice";

const rootReducer = combineReducers({
    cars: carsSlice
})

export const store = configureStore({
    reducer: rootReducer,
})