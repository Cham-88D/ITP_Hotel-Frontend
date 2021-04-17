import React, { Component } from 'react'
import AttendanceService from '../adapters/AttendanceService';
import './AddAttend.css';
export default class ViewAttendance extends Component {
    constructor(props){
        super(props)

        this.state={
            attendances:[]
        }
        this.deleteAttendance=this.deleteAttendance.bind(this);

    }

    deleteAttendance(id){
           AttendanceService.deleteAttendance(id).then(res=>{
                this.setState({attendances:this.state.attendances.filter(attendance=>attendance.attendanceId!==id )});
           }) ;
    }
    componentDidMount(){
        AttendanceService.getAllDaily_Attendance().then((res)=>{
            this.setState({attendances:res.data});

        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee Attendance</h2>
                <div className="row">
                    <table className="attend-table">
                        <thead>
                            <tr>
                                <th>Attendance ID</th>
                                <th>Date</th>
                                <th>In Time</th>
                                <th>Out Time</th>
                                <th>OT Hour</th>
                                <th>Type</th>
                                <th>Employee ID</th>
                                <th>Actions</th>
                                
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
                                        
                                        <td>
                                            <button onClick='' className="btnbtn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteAttendance(attendance.attendanceId)} className="btnbtn-danger">Delete</button>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
