// import React from 'react'
import ViewSalary from '../components/ViewSalary'
import AddSalDetail from '../components/AddSalDetail'
import '../styles/SalaryPage.css'

import React, { Component } from 'react'

export default class ManageSalary extends Component {
    render() {
        return (
            <div>
                <ul className="salary">
                
                
                    <li><AddSalDetail/></li>
                     <li> <ViewSalary/></li>                

                </ul>
            </div>
        )
    }
}


