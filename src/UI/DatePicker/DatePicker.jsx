import React from 'react';
// import { DatePicker as DateInput} from 'react-datepicker';
import DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.scss';

const DatePick = ({
    inputClassName,
    wrapperClassName,
    titleClassName,
    title,
    placeholder,
    onChange,
    startDate,
}) => {
    // const CustomInput = forwardRef(({ value, onClick }, ref) => (
    //     <button type="button" className={inputClassName} onClick={onClick} ref={ref}>
    //         {value}
    //     </button>
    // ));
    return (
        <div className={wrapperClassName}>
            <div className={titleClassName}>{title}</div>
            <DatePicker
                selected={startDate}
                placeholder={placeholder}
                onChange={onChange}
                showTimeSelect
            />
        </div>
    );
}
export default DatePick