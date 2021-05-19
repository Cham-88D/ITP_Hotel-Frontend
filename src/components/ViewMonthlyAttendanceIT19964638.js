import React, { Component } from 'react'
import '../styles/MonthlyAttendIT19964638.css'
import '../styles/DailyAttendIT19964638.css';
import MonthlyAttendanceService from '../adapters/MonthlyAttendanceServiceIT19964638'
import AttendanceService from '../adapters/AttendanceServiceIT19964638';
export default class ViewMonthlyAttendance extends Component {

    constructor(props){
        super(props)

        this.state={
            mattendances:[],
            attendances:[]
        }
        this.navigatematte=this.navigatematte.bind(this);

    }
    componentDidMount(){
        MonthlyAttendanceService.getAllMonthly_Attendance().then((res)=>{
            this.setState({mattendances:res.data});
            

        });
        AttendanceService.getAllDaily_Attendance().then((res)=>{
            this.setState({attendances:res.data});

        });
    }
    // componentDidMount(){
    //     AttendanceService.getAllDaily_Attendance().then((res)=>{
    //         this.setState({attendances:res.data});

    //     });
    // }
    editmAttendanceDetail(id){
        this.props.history.push(`/updateMonthlyAttendance/${id}`);
    }
    navigatematte(){
        this.props.history.push('/monthlyAttendanceAdd');
    }
    render() {
        return (
            
                <div>
                    <ul>
                        <li>
                            <ul className='new'>
                                <li>
                                    <div className="dailynavcontainer">
                                        <form className="dailynav" >
                                            <h3 className='caption1'>Add New Entry</h3>

                                        <div>
                                            <button className="dailynavbtn1" onClick={this.navigatematte} type='submit'>Add Now</button>
                                        </div>
                                    </form>


                                    </div>
                                </li>
                                <li>
                                        <h3 className="dtableheading">Employee Daily Attendance</h3>
                                        <div className="drow">
                                        <table className="dattendtable">
                                            <thead>
                                                <tr>
                                                    <th>Attendance ID</th>
                                                    <th>Date</th>
                                                    <th>In Time</th>
                                                    <th>Out Time</th>
                                                    <th>OT Hour</th>
                                                    <th>Type</th>
                                                    <th>Employee ID</th>
                                                    
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    this.state.attendances.map(
                                                        attendance=>
                                                        <tr key={attendance.attendanceId}>
                                                            <td>{attendance.attendanceId}</td>
                                                            <td>{attendance.date}</td>
                                                            <td>{attendance.in_Time}</td>
                                                            <td>{attendance.out_Time}</td>
                                                            <td>{attendance.otHours}</td>
                                                            <td>{attendance.atte_type}</td>
                                                            <td>{attendance.employee.id}</td>
                                                                
                                                        </tr>

                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        </div>
                    
                                </li>
                            </ul>
                        
                  
                        </li>
                        <li>
                        <div className="mrow">
                            <h3 className="mtable-heading">Employee Monthly Attendance</h3>
                                <table className="mattend-table">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Total Absent</th>
                                            <th>Total Attendance</th>
                                            <th>Total halfday</th>
                                            <th>Total Leave</th>
                                            <th>Total OTHour</th>
                                            <th>Actions</th>
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.mattendances.map(
                                                mattendance=>
                                                <tr key={mattendance.employeeId}>
                                                    <td>{mattendance.employeeId}</td>
                                                    <td>{mattendance.totalAbsent}</td>
                                                    <td>{mattendance.totalAttendance}</td>
                                                    <td>{mattendance.totalHalfDay}</td>
                                                    <td>{mattendance.totalLeave}</td>
                                                    <td>{mattendance.totalOt}</td>
                                                    
                                                    
                                                    <td>
                                                        <button onClick={()=>this.editmAttendanceDetail(mattendance.attendanceId)} className="table-input-btn2">Update</button>
                                                        
                                                    </td>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                   
                        </li>
                    </ul>
                </div>
                            
                           
            
        )
    }
    
    }
