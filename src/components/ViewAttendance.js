import React, { Component } from 'react'
import './AddAttend.css';
export default class ViewAttendance extends Component {
    constructor(props){
        super(props)

        this.state={
            attendances:[]
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee Attendance</h2>
                <div className="row">
                    <table className="attend-table">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Date</th>
                                <th>In Time</th>
                                <th>Out Time</th>
                                <th>OT Hour</th>
                                <th>Type</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.attendances.map(
                                    attendance=>
                                    <tr key={attendance.id}>
                                        <td>{attendance.employeeId}</td>
                                        <td>{attendance.date}</td>
                                        <td>{attendance.inTime}</td>
                                        <td>{attendance.outTime}</td>
                                        <td>{attendance.otHour}</td>
                                        <td>{attendance.type}</td>
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
