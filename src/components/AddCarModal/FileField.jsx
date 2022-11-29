import React from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, useField } from "formik";
import { uploadImage } from '../../services/cars.services';

const FileField = ({ values, setFieldValue, ...props }) => {

    const [field, meta] = useField(props)

    const dispatch = useDispatch()

    const handleImage = (event) => {
        const { files } = event.target
        setFieldValue("image", files[0])
       
        let formData = new FormData()
        formData.append('file', files[0])
        formData.append("upload_preset", "i2wukgbc")

        dispatch(uploadImage(formData))
    }
    const labelText = values.image ? "Image Added" : "Add Image";
    const labelStyle = values.image ? "with-image" : "no-image"

    return (
        <div className='input-container'>
            <div className='input-file'>
                <label className={labelStyle} htmlFor={field.name}>{labelText}</label>
                <input
                    id={field.name}
                    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                    autoComplete='off'
                    onChange={handleImage}
                    {...props}
                />
            </div>
            <ErrorMessage name={field.name} component='div' className='error' />
        </div>
    )
}

export default FileField;