import React from 'react'
import UpdatemonthlyAttendance from '../components/UpdatemonthlyAttendance'
import ViewAttendanceList from '../components/ViewAttendanceList'
import '../styles/Attendance.css'
function ManageAttendance() {
    return (
        <div >

            <ul>
                
                <li><ViewAttendanceList/></li>
                <li> <UpdatemonthlyAttendance/></li>
               
                

            </ul>



           

            
        </div>
    )
}

export default ManageAttendance
