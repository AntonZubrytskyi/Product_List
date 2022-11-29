import axios from "axios";

export const API_URL = 'http://localhost:8000';
export const CAR_URL = '/cars'; 
export const COMMENT_URL= '/comments'
export const CLOUD_URL = 'http://api.cloudinary.com/v1_1/dlirnezkw/image/upload'

export const config = {
    baseURL: API_URL,
}
export const axiosInstance = axios.create(config);