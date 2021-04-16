import React from 'react';
import AttendanceSave from './AddAttendSave';
import './AddAttend.css';
const AddAttendForm = () => {
    return (
        <>
        <div className="form-container">
            <span className="close-btn"></span>
                {/* <div className="form-content-left">

            </div> */}
            {/* <AttendanceSave/> */}

            <AttendanceSave/>
        </div>
        </>
    )
}

export default AddAttendForm
