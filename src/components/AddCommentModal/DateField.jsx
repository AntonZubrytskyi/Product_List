import React from 'react';
import { ErrorMessage, useField } from "formik";



const DateField = ({ label, ...props }) => {

    const [field, meta] = useField(props)
    
    return (
        <div className='input-container'>
            <div className='input-text'>
                <label htmlFor={field.name}>{label}</label>
                <input
                    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete='off'
                />
            </div>
            <ErrorMessage name={field.name} component='div' className='error' />
        </div>
    )
}

export default DateField;