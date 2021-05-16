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
        this.editSalaryDetail=this.editSalaryDetail.bind(this);
        this.navigate=this.navigate.bind(this);

    }
    navigate(){
        this.props.history.push('/addSalary');
    }
    deleteSalaryDetail(id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
        SalaryServices.deleteSalaryDetail(id).then(res=>{
             this.setState({Salarys:this.state.Salarys.filter(Salary=>Salary.salaryId!==id )});
             confirmtext="You Succesfully deleted attendance";
        }) ;
    }else{
        confirmtext="You presed cansel Try again";
     }
    }

    componentDidMount(){
        SalaryServices.getAllSalary_Detail().then((res)=>{
            this.setState({Salarys:res.data});
        });
    }
    editSalaryDetail(id){
        this.props.history.push(`/updateSalary/${id}`);
    }
    
    render() {
        return (
                    <div>
                        <ul className="salary">
                            <li>
                            <div className="salnavcontainer">
                                <form className="salnav" >
                                    <h3 className='caption1'>Add Salary Details</h3>

                                <div>
                                    <button className="salnavbtn1" onClick={this.navigate} type='submit'>Add Now</button>
                                </div>
                                </form>


                            </div>
                            </li>
                            <li>
                                <h3 className="tableheading">Salary Details</h3>
                                <div className="row">
                                    <table className="salarytable">
                                        <thead>
                                            <tr>
                                                <th>Salary ID</th>
                                                <th>Role</th>
                                                <th>Basic</th>
                                                <th>OT Rate</th>
                                                <th>EPF</th>
                                                <th>ETF</th>
                                                <th>Allowance</th>
                                                <th>Emp ID</th>
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
                                                            <button onClick={()=>this.editSalaryDetail(salary.salaryId)} className="tableinputbtn2" type='submit'>update</button>
                                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteSalaryDetail(salary.salaryId)} className="tableinputbtn1">Delete</button>
                                                           
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
// 