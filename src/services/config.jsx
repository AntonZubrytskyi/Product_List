import axios from "axios";

export const API_URL = 'http://localhost:8000';
export const PRODUCT_URL = '/products';

export const config = {
    baseURL: API_URL,
}
export const axiosInstance = axios.create(config);