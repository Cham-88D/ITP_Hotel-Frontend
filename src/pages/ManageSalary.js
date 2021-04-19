import React from 'react'
import ViewSalary from '../components/ViewSalary'
import AddSalDetailForm from '../components/AddSalDetailForm'




function Manage_Salary() {
    return (
        <div >
          <ul className="attend">
                
                
                <li> <ViewSalary/></li>
                <li><AddSalDetailForm/></li>
                

            </ul>
          
        </div>
    )
}

export default Manage_Salary
