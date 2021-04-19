import React, { Component } from 'react'
import SalaryServices from '../adapters/SalaryServices'
import '../styles/AddSalary.css';
export default class ViewSalary extends Component {
    constructor(props){
        super(props)

        this.state={
            Salarys:[]
        }
        this.deleteSalaryDetail=this.deleteSalaryDetail.bind(this);

    }
    deleteSalaryDetail(id){
        SalaryServices.deleteSalaryDetail(id).then(res=>{
             this.setState({Salarys:this.state.Salarys.filter(Salary=>Salary.salaryId!==id )});
        }) ;
    }

    componentDidMount(){
        SalaryServices.getAllSalary_Detail().then((res)=>{
            this.setState({Salarys:res.data});
        });
    }
    render() {
        return (
                    <div>
                        <h3 className="table-heading">Salary Details</h3>
                        <div className="row">
                            <table className="attend-table">
                                <thead>
                                    <tr>
                                        <th>Salary ID</th>
                                        <th>Role</th>
                                        <th>Basic</th>
                                        <th>OT Rate</th>
                                        <th>EPF</th>
                                        <th>ETF</th>
                                        <th>Allowance</th>
                                        <th>Employee ID</th>
                                        <th>Actions</th>
                                        
                                    </tr>
                                </thead>
        
                                <tbody>
                                    {
                                        this.state.Salarys.map(
                                            salary=>
                                            <tr key={salary.salaryId}>
                                                <td>{salary.salaryId}</td>
                                                <td>{salary.role}</td>
                                                <td>{salary.basic}</td>
                                                <td>{salary.ot_rate}</td>
                                                <td>{salary.etf}</td>
                                                <td>{salary.epf}</td>
                                                <td>{salary.allowance}</td>
                                                <td>{salary.employee.id}</td>
                                                
                                                <td>
                                                    <button onClick='' className="table-input-btn2">Reset</button>
                                                    <button style={{marginLeft:"10px"}} onClick={()=>this.deleteSalaryDetail(salary.salaryId)} className="table-input-btn1">Save</button>
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
