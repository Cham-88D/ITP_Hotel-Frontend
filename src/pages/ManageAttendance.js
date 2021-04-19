import React from 'react'
import AddAttendForm from '../components/AddAttendForm'
// import AddAttendForm from '../components/AddAttendForm'
import ViewAttendance from '../components/ViewAttendance'
import './Attendance.css'
function ManageAttendance() {
    return (
        <div >

            <ul className="attend">
                
                
                <li> <AddAttendForm/></li>
                <li><ViewAttendance/></li>
                

            </ul>



           

            
        </div>
    )
}

export default ManageAttendance
