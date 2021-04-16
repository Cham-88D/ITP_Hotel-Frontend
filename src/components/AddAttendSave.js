import React from 'react';
import UseAttendForm from './UseAttendFrom';
import ValidateAttendInfo from './ValidateAttendInfo';

const attendanceSave = () => {
    const{handleChange,values,handleSubmit,errors}=UseAttendForm(ValidateAttendInfo);
    return (
        <div className="form-add-sal">
            <form className="form" onSubmit={handleSubmit}>
            <h3>Add Attendance</h3>
                <div className="form-inputs">
                    <label htmlFor="employeeId" className='form-label'>
                       Employee ID
                    </label>
                    <input 
                        id='employeeId'
                        type="text" 
                        name='employeeId'
                        className='form-input'
                        placeholder='Employee ID'
                        value={values.emloyeeId}
                        onChange={handleChange}/>
                        {errors.employeeId && <p>{errors.employeeId}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="date" className='form-label'>
                        Date
                    </label>
                    <input 
                        id='date'
                        type="text" 
                        name='date'
                        className='form-input'
                        placeholder='Date'
                        value={values.date}
                        onChange={handleChange}/>
                        {errors.date && <p>{errors.date}</p>}
                </div>
                
                <div className="form-inputs">
                    <label htmlFor="inTime" className='form-label'>
                       In Time
                    </label>
                    <input 
                        id='inTime'
                        type="text" 
                        name='inTime'
                        className='form-input'
                        placeholder='In Time'
                        value={values.inTime}
                        onChange={handleChange}/>
                        {errors.inTime && <p>{errors.inTime}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="outTime" className='form-label'>
                        Out Time
                    </label>
                    <input 
                        id='outTime'
                        type="text" 
                        name='outTime'
                        className='form-input'
                        placeholder='Out Time'
                        value={values.emloyeeId}
                        onChange={handleChange}/>
                        {errors.outTime && <p>{errors.outTime}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="otHour" className='form-label'>
                        OT Hour
                    </label>
                    <input 
                        id='otHour'
                        type="text" 
                        name='otHour'
                        className='form-input'
                        placeholder='OT Hour'
                        value={values.emloyeeId}
                        onChange={handleChange}/>
                        {errors.otHour && <p>{errors.otHour}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="type" className='form-label'>
                        Type
                    </label>
                    <input 
                        id='type'
                        type="text" 
                        name='type'
                        className='form-input'
                        placeholder='Type'
                        value={values.emloyeeId}
                        onChange={handleChange}/>
                        {errors.type && <p>{errors.type}</p>}
                </div>
                <div >
                    <button className='form-input-btn1' type='submit'>Save </button>
                    <button className='form-input-btn2' type='reset'>Reset</button>

                </div>
                
            </form>
            
        </div>
    )
}

export default attendanceSave
