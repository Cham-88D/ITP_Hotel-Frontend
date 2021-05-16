import React, { Component } from 'react'
import '../styles/AddAttend.css'
import MonthlyAttendanceService from '../adapters/MonthlyAttendanceService'
export default class AddMonthlyAttendFrom extends Component {
    constructor(props){
        super(props)

        this.state={
            employeeid:""
        }
        this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
    }
    changeEmployeeIdHandler=(event)=>{
        this.setState({employeeid:event.target.value});
    }  
    saveEmployeeID=(e)=>{
        e.preventDefault();
        
        let mattendance={employeeId:this.state.employeeid};
        console.log('mattendance=>'+JSON.stringify(mattendance));
        MonthlyAttendanceService.insertMonthlyAttendance(mattendance).then(res=>{
                this.props.history.push('/monthlyAttendance');
            });
       
        }
    cancel(){
        this.props.history.push('/monthlyAttendance');
    }
    render() {
        return (
            <div>
                <div className="form-container3">
                <div className="form1-add-sal">
                <form className="form1"  >
                <h3>Add Attendance</h3>
                    <div className="form1-inputs">
                        <label htmlFor="employeeId" className='form1-label'>
                        Employee ID
                        </label>
                        <input 
                            id='employeeId'
                            type="text" 
                            name='id'
                            className='form1-input'
                            placeholder='Employee ID'
                            value={this.state.employeeid}
                            onChange={this.changeEmployeeIdHandler}/>
                            
                            {/* {errors.employeeId && <p>{errors.employeeId}</p>} */}
                    </div>
                    <div >
                        <button className='form-input-btn1' onClick={this.saveEmployeeID} type='submit'>Save </button>
                        <button className='form-input-btn2' onClick={this.cancel.bind(this)} type='reset'>Cancel</button>

                    </div>
                    </form>
                
                </div>
            </div>
                
            </div>
        )
    }
}
