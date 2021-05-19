
import React, { Component } from 'react'
import MonthlyAttendanceService from '../adapters/MonthlyAttendanceServiceIT19964638';
import '../styles/AddAttendIT19964638.css';


export default class UpdatemonthlyAttendance extends Component {
    constructor(props){
        super(props)

        this.state={
           id:this.props.match.params.id,
           totalAttendance:'',
           totalOt:'',
           totalLeave:'',
           totalAbsent:'',
           totalHalfDay:''
           
        }

        this.changetotalAbsentHandler=this.changetotalAbsentHandler.bind(this);
        this.changetotalAttendanceHandler=this.changetotalAttendanceHandler.bind(this);
        this.changetotalOtHandler=this.changetotalOtHandler.bind(this);
        this.changetotalLeaveHandler=this.changetotalLeaveHandler.bind(this);
        this.changetotalHalfDayHandler=this.changetotalHalfDayHandler.bind(this);
       
    }

    changetotalAbsentHandler=(event)=>{
        this.setState({totalAbsent:event.target.value});
    }
    changetotalAttendanceHandler=(event)=>{
        this.setState({totalAttendance:event.target.value});
    }
    changetotalOtHandler=(event)=>{
        this.setState({totalOt:event.target.value});
    }
    changetotalLeaveHandler=(event)=>{
        this.setState({totalLeave:event.target.value});
    }
    changetotalHalfDayHandler=(event)=>{
        this.setState({totalHalfDay:event.target.value});
    }
    componentDidMount(){
        MonthlyAttendanceService.getMonthlyAttendanceById(this.state.id).then((res)=>{
            let monthlyAttendanceDetail=res.data;
            console.log(monthlyAttendanceDetail);
            this.setState({
                totalAttendance:monthlyAttendanceDetail.totalAttendance,
                totalOt:monthlyAttendanceDetail.totalOt,
                totalLeave:monthlyAttendanceDetail.totalLeave,
                totalAbsent:monthlyAttendanceDetail.totalAbsent,
                totalHalfDay:monthlyAttendanceDetail.totalHalfDay
            });
        });
    }
    updateMonthlyAttendance=(e)=>{
        e.preventDefault();
        let monthlyAttendanceDetail={totalAttendance:this.state.totalAttendance,totalOt:this.state.totalOt,totalLeave:this.state.totalLeave,totalAbsent:this.state.totalAbsent,totalHalfDay:this.state.totalHalfDay}
        MonthlyAttendanceService.updateMonthlyAttendance(monthlyAttendanceDetail,this.state.id).then(res=>{
            this.props.history.push('/monthlyAttendance');
        })
    }
    cancel(){
        this.props.history.push('/monthlyAttendance');
    }
    render() {
        return (
            <div>
                
                <div className="mform-container2">
                <div className="mform-add-sal">
                <form className="mform" >
                <h3>Update Monthly Attendance</h3>
                   
                    <div className="mform-inputs">
                        <label htmlFor="totalAttendance" className='mform-label'>
                        Total Attendance
                        </label>
                        <input 
                            id='totalAttendance'
                            type="text" 
                            name='total_Attendance'
                            className='mform-input'
                            placeholder='Total Attendance'
                            value={this.state.totalAttendance}
                            onChange={this.changetotalAttendanceHandler}/>
                            {/* <div className='inputError'>
                                {this.state.in_Time_Error}
                            </div> */}
                            {/* {errors.inTime && <p>{errors.inTime}</p>} */}
                    </div>
                    <div className="mform-inputs">
                        <label htmlFor=" totalOt" className='mform-label'>
                            Total OT
                        </label>
                        <input 
                            id=' totalOt'
                            type="text" 
                            name='total_Ot'
                            className='mform-input'
                            placeholder='Total OT'
                            value={this.state.totalOt}
                            onChange={this.changetotalOtHandler}/>
                            {/* <div className='inputError'>
                                {this.state.out_Time_Error}
                            </div> */}
                            {/* {errors.outTime && <p>{errors.outTime}</p>} */}
                    </div>
                    <div className="mform-inputs">
                        <label htmlFor=" totalLeave" className='mform-label'>
                        Total Leave
                        </label>
                        <input 
                            id=' totalLeave'
                            type="text" 
                            name=' totalLeave'
                            className='mform-input'
                            placeholder='Total Leave'
                            value={this.state.totalLeave}
                            onChange={this.changetotalLeaveHandler}/>
                            {/* <div className='inputError'>
                                {this.state. totalLeaves_Error}
                            </div> */}
                            {/* {errors.otHour && <p>{errors.otHour}</p>} */}
                    </div>
                    <div className="mform-inputs">
                        <label htmlFor="totalAbsent" className='mform-label'>
                            Total Absent
                        </label>
                        <input 
                            id='totalAbsent'
                            totalAbsent="text" 
                            name='total_Absent'
                            className='mform-input'
                            placeholder='totalAbsent'
                            value={this.state.totalAbsent}
                            onChange={this.changetotalAbsentHandler}/>
                            {/* <div className='inputError'>
                                {this.state.atte_totalAbsent_Error}
                            </div> */}
                            {/* {errors.type && <p>{errors.type}</p>} */}
                    </div>
                    <div className="mform-inputs">
                        <label htmlFor=" totalHalfDay" className='mform-label'>
                        Total Half Days
                        </label>
                        <input 
                            id=' totalHalfDay'
                            type="text" 
                            name=' totalHalfDays'
                            className='mform-input'
                            placeholder='Total Half Days'
                            value={this.state.totalHalfDay}
                            onChange={this.changetotalHalfDayHandler}/>
                            {/* <div className='inputError'>
                                {this.state. totalHalfDays_Error}
                            </div> */}
                            {/* {errors.otHour && <p>{errors.otHour}</p>} */}
                    </div>
                    <div >
                        <button className='mform-input-btn1' onClick={this.updateMonthlyAttendance} type='submit'>Save </button>
                        <button className='mform-input-btn2'onClick={this.cancel.bind(this)} type='reset'>Cancel</button>

                    </div>
                    
                </form>
                
                </div>
            </div>
            </div>
        )
    }
}

// export default class UpdateAttendanceDetail extends Component {
     
    
//         // this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
//         this.changeInTimeHandler=this.changeInTimeHandler.bind(this);
//         this.changeOutTimeHandler=this.changeOutTimeHandler.bind(this);
//         this.changeOTHourHandler=this.changeOTHourHandler.bind(this);
//         this.changeTypeHandler=this.changeTypeHandler.bind(this);
//        // this.updateAttendance=this.updateAttendance.bind(this);
        

//     }

    // componentDidMount(){
    //     AttendanceService.getDailyAttendanceById(this.state.id).then((res)=>{
    //         let attendanceDetail=res.data;
    //         this.setState({
    //             in_Time:attendanceDetail.in_Time,
    //             out_Time:attendanceDetail.out_Time,
    //             otHours:attendanceDetail.otHours,
    //             atte_type:attendanceDetail.atte_type
            
    //         });
    //     });
    // }
//     updateAttendance=(e)=>{
//         e.preventDefault();
//         let attendance={atte_type:this.state.atte_type,in_Time:this.state.in_Time,otHours:this.state.otHours,out_Time:this.state.out_Time };
//         console.log('attendance=>'+JSON.stringify(attendance));
//         AttendanceService.updateDailyAttendance(attendance,this.state.id).then(res=>{
//                 this.props.history.push('/manageAttendance');
//             });
       

//         }
        
    
//      changeEmployeeIdHandler=(event)=>{
//          this.setState({employee:{id:event.target.value}});
//      }
//      changeInTimeHandler=(event)=>{
//         this.setState({in_Time:event.target.value});
//     }
//     changeOutTimeHandler=(event)=>{
//         this.setState({out_Time:event.target.value});
//     }
//     changeOTHourHandler=(event)=>{
//         this.setState({otHours:event.target.value});
//     }
//     changeTypeHandler=(event)=>{
//         this.setState({atte_type:event.target.value});
//     }
    
//     render() {
//         return (
            
            
           
//         )
           
//     }
// }


