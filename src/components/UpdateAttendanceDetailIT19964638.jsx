
import React, { Component } from 'react'
import AttendanceService from '../adapters/AttendanceServiceIT19964638';
import '../styles/AddAttendIT19964638.css';

export default class UpdateAttendanceDetail extends Component {
     
    constructor(props){
        super(props)

        this.state={
           id:this.props.match.params.id,
           in_Time:'',
           out_Time:'',
           otHours:'',
           atte_type:''
           
        }
        // this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
        this.changeInTimeHandler=this.changeInTimeHandler.bind(this);
        this.changeOutTimeHandler=this.changeOutTimeHandler.bind(this);
        this.changeOTHourHandler=this.changeOTHourHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
       // this.updateAttendance=this.updateAttendance.bind(this);
        

    }

    componentDidMount(){
        AttendanceService.getDailyAttendanceById(this.state.id).then((res)=>{
            let attendanceDetail=res.data;
            this.setState({
                in_Time:attendanceDetail.in_Time,
                out_Time:attendanceDetail.out_Time,
                otHours:attendanceDetail.otHours,
                atte_type:attendanceDetail.atte_type
            
            });
        });
    }
    updateAttendance=(e)=>{
        e.preventDefault();
        let attendance={atte_type:this.state.atte_type,in_Time:this.state.in_Time,otHours:this.state.otHours,out_Time:this.state.out_Time };
        console.log('attendance=>'+JSON.stringify(attendance));
        AttendanceService.updateDailyAttendance(attendance,this.state.id).then(res=>{
                this.props.history.push('/manageAttendance');
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
            
            <div className="form-container2">
                <div className="form-add-sal">
                <form className="form" >
                <h3>Update Attendance</h3>
                   
                    <div className="form-inputs">
                        <label htmlFor="inTime" className='form-label'>
                        In Time
                        </label>
                        <input 
                            id='inTime'
                            type="text" 
                            name='in_Time'
                            className='form-input'
                            placeholder='HH:MM'
                            value={this.state.in_Time}
                            onChange={this.changeInTimeHandler}/>
                            <div className='inputError'>
                                {this.state.in_Time_Error}
                            </div>
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
                            placeholder='HH:MM'
                            value={this.state.out_Time}
                            onChange={this.changeOutTimeHandler}/>
                            <div className='inputError'>
                                {this.state.out_Time_Error}
                            </div>
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
                            <div className='inputError'>
                                {this.state.otHours_Error}
                            </div>
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
                            <div className='inputError'>
                                {this.state.atte_type_Error}
                            </div>
                            {/* {errors.type && <p>{errors.type}</p>} */}
                    </div>
                    <div >
                        <button className='form-input-btn1' onClick={this.updateAttendance} type='submit'>Save </button>
                        <button className='form-input-btn2' type='reset'>Reset</button>

                    </div>
                    
                </form>
                
                </div>
            </div>
           
        )
           
    }
}


