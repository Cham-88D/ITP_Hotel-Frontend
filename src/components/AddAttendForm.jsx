
import React, { Component } from 'react'
import AttendanceService from '../adapters/AttendanceService';
import 'AddAttend.css';


 class AddAttendForm extends Component {
     
     constructor(props){
         super(props)

         this.state={
            
            employee:{id:''},
            in_Time:'',
            out_Time:'',
            otHours:'',
            atte_type:''
         }
         
         this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
         this.changeInTimeHandler=this.changeInTimeHandler.bind(this);
         this.changeOutTimeHandler=this.changeOutTimeHandler.bind(this);
         this.changeOTHourHandler=this.changeOTHourHandler.bind(this);
         this.changeTypeHandler=this.changeTypeHandler.bind(this);
         this.saveAttendance=this.saveAttendance.bind(this);

     }
     

     saveAttendance=(e)=>{
        e.preventDefault();
        let attendance={atte_type:this.state.atte_type,in_Time:this.state.in_Time,otHours:this.state.otHours,
         out_Time:this.state.out_Time,employee:{id:this.state.employee.id} };
        console.log('attendance=>'+JSON.stringify(attendance));
        AttendanceService.insertAttendance(attendance).then(res=>{
           
                
                //  this.props.history.push('/manageSalary');
        });

    }
     changeEmployeeIdHandler=(event)=>{
         this.setState({employee:{id:event.target.value}});
     }
     changeInTimeHandler=(event)=>{
        this.setState({in_Time:event.target.value});
    }
    changeOutTimeHandler=(event)=>{
        this.setState({out_Time:event.target.value});
    }
    changeOTHourHandler=(event)=>{
        this.setState({otHours:event.target.value});
    }
    changeTypeHandler=(event)=>{
        this.setState({atte_type:event.target.value});
    }
    render() {
        return (
            <div className="form-container">
                <div className="form-add-sal">
                <form className="form" >
                <h3>Add Attendance</h3>
                    <div className="form-inputs">
                        <label htmlFor="employeeId" className='form-label'>
                        Employee ID
                        </label>
                        <input 
                            id='employeeId'
                            type="text" 
                            name='id'
                            className='form-input'
                            placeholder='Employee ID'
                            value={this.state.employee.id}
                            onChange={this.changeEmployeeIdHandler}/>
                            {/* {errors.employeeId && <p>{errors.employeeId}</p>} */}
                    </div>
                    
                    
                    <div className="form-inputs">
                        <label htmlFor="inTime" className='form-label'>
                        In Time
                        </label>
                        <input 
                            id='inTime'
                            type="text" 
                            name='in_Time'
                            className='form-input'
                            placeholder='In Time'
                            value={this.state.in_Time}
                            onChange={this.changeInTimeHandler}/>
                            {/* {errors.inTime && <p>{errors.inTime}</p>} */}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="outTime" className='form-label'>
                            Out Time
                        </label>
                        <input 
                            id='outTime'
                            type="text" 
                            name='out_Time'
                            className='form-input'
                            placeholder='Out Time'
                            value={this.state.out_Time}
                            onChange={this.changeOutTimeHandler}/>
                            {/* {errors.outTime && <p>{errors.outTime}</p>} */}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="otHour" className='form-label'>
                            OT Hour
                        </label>
                        <input 
                            id='otHour'
                            type="text" 
                            name='otHours'
                            className='form-input'
                            placeholder='OT Hour'
                            value={this.state.otHours}
                            onChange={this.changeOTHourHandler}/>
                            {/* {errors.otHour && <p>{errors.otHour}</p>} */}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="type" className='form-label'>
                            Type
                        </label>
                        <input 
                            id='type'
                            type="text" 
                            name='atte_type'
                            className='form-input'
                            placeholder='Type'
                            value={this.state.atte_type}
                            onChange={this.changeTypeHandler}/>
                            {/* {errors.type && <p>{errors.type}</p>} */}
                    </div>
                    <div >
                        <button className='form-input-btn1' onClick={this.saveAttendance} type='submit'>Save </button>
                        <button className='form-input-btn2' type='reset'>Reset</button>

                    </div>
                    
                </form>
                
                </div>
            </div>
           
        )
    }
}
export default AddAttendForm