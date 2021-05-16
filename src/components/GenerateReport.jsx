import React, { Component } from 'react'
import '../styles/DailyAttend.css';
import AttendanceService from '../adapters/AttendanceService';
import ReactToPrint from 'react-to-print';
import { render } from '@testing-library/react';
export default class GenerateReport extends Component {

    constructor(props){
        super(props)

        this.state={
            attendances:[]
        }
       

    }
    componentDidMount(){
        AttendanceService.getAllDaily_Attendance().then((res)=>{
            this.setState({attendances:res.data});

        });
    }
    render() {
        return (
            <div>
                 <h3 className="dtableheading1">Employee Daily Attendance</h3>
                    <div className="drow">
                    <table className="dattendtable1">
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
                
            </div>
            
        )
    }
}


    
    
