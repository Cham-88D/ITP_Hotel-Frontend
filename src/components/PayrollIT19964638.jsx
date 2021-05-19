import React, { Component } from 'react'
import SalaryServices from '../adapters/SalaryServicesIT19964638';
import PayrollService from '../adapters/PayrollServiceIT19964638';
import MonthlyAttendanceService from '../adapters/MonthlyAttendanceServiceIT19964638';
import '../styles/payrollIT19964638.css';


export default class Payroll extends Component {
    
    interval = null;
    salary_dataMaster = null;
    attendance_dataMaster  = null;
    constructor(props){
        super(props)

        this.state={
            id:this.props.match.params.id,
            salarys:[],
            monthlyAttendances:[],
            payrollDetail:[],
            
            final_calulation:[],
            basic:''

        }
     
    }

    componentDidMount(){
        
        SalaryServices.getAllSalary_Detail().then((res)=>{
            this.setState({Salarys:res.data});
           // console.log(res.data);
            this.salary_dataMaster = res.data;
        });
        MonthlyAttendanceService.getAllMonthly_Attendance().then((res)=>{
            this.setState({monthlyAttendances:res.data});
            this.attendance_dataMaster = res.data;
            //console.log(attendance_dataMaster);
        });
        PayrollService. getAllpayroll().then((res)=>{
            this.setState({ payrollDetail:res.data});
          
            //console.log(attendance_dataMaster);
        });

       

      //  this.calculate(salary_dataMaster,attendance_dataMaster);
     var itemsets =  setTimeout(this.temp ,3000);
     console.log('start');
     
     console.log(itemsets);
     
     console.log('end');
     
    }
    
   
   
    temp=(dataSet_salary)=>{
       
        // console.log(this.salary_dataMaster);
        // console.log(this.attendance_dataMaster);

        // totalsalary=basic+allowance+totalot*otrate-deduction

        // deduction=(basic / 30 * absent)+epf+etf

        var emp_salary = this.salary_dataMaster;
        var emp_attendace = this.attendance_dataMaster;
        var employ_all_data = [];
        var d = new Date();
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var month= months[d.getMonth()];
        var totalSalary=0;

        var final_employ_all_data = [];
        for (let p = 0; p < emp_attendace.length; p++) {
           // employ_all_data[p] = emp_attendace;  
                var temp_employe_id = emp_attendace[p]['employeeId'];
            for (let o = 0; o < emp_salary.length; o++) {
                if (temp_employe_id == emp_salary[o]['employee']['id']) {
            //    console.log( emp_salary[o]);
            //    console.log( emp_attendace[p]);
                var final_salary = 0;
                    var deducation = ((emp_salary[o]['basic'] / 30 ) * emp_attendace[p]['totalAbsent'] ) + emp_salary[o]['epf']+ emp_salary[o]['etf'];
                    var additiion = emp_salary[o]['basic'] + emp_salary[o]['allowance'] +(emp_salary[o]['ot_rate'] * emp_attendace[p]['totalOt']) ;
                    final_salary = additiion - deducation;
                    totalSalary=totalSalary+final_salary
                    console.log(totalSalary);
                    var object = {
                        'employe_id' : temp_employe_id,
                        'month':month,
                        'total_ot_earn' : emp_salary[o]['ot_rate'] * emp_attendace[p]['totalOt'],
                        'dedducation' : deducation,
                        'basic_salary' : emp_salary[o]['basic'],
                        'total_salary' : final_salary,
                        
                    };
                //     PayrollService.insertPayroll(object).then(res=>{
                //   insertpayrollDetails(object);
                    console.log(object)
                    final_employ_all_data[p] = object;
                //   });
          
                    
                } else {
                    
                }
                
            }
           
            
            // console.log(final_employ_all_data[p]);
        }
        console.log(final_employ_all_data);
        
       
        this.setState({final_calulation:final_employ_all_data});

        return ;
    }

    calculate=(salary_data,attendace_data)=>{
        console.log(salary_data);
        console.log(attendace_data);
       
        //alert("sssss");
    }
    insertpayrollDetails=()=>{
        

        
        let payrolldetail={basicSalary:'',employeeId : '',month : '',totalDeduction : '',totalEran : '',totalSalary : '' };
         console.log(payrolldetail);
        let payroll= this.state.final_calulation;
        for (let p = 0; p < payroll.length; p++) {
            payrolldetail.basicSalary =payroll[p]["basic_salary"];
            payrolldetail.employeeId =payroll[p]["employe_id"];
            payrolldetail.month =payroll[p]["month"];
            payrolldetail.totalDeduction =payroll[p]["dedducation"];
            payrolldetail.totalEran =payroll[p]["total_ot_earn"];
            payrolldetail.totalSalary =payroll[p]["total_salary"];
         
          console.log('payrolldetail=>'+JSON.stringify(payrolldetail));
        PayrollService.insertPayroll(payrolldetail).then(res=>{
        });
            
        }
        
        
    }
    generatePayslip(id){
        this.props.history.push(`/viewPalslip/${id}`);
    }

    render() {
        return (
            <div>

                <ul className="payrollList">
                    <li>
                        <div className="payrollnavcontainer">
                            <form className="payrollnav" >
                                <h3 className='payrollcaption'>Generate Payroll</h3>

                                <div>
                                    <button className="payrollnavbtn1" onClick={()=>this.insertpayrollDetails()} type='submit'>Calculate</button>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li>

                    <div>
                            <h3 className="payrolltable-heading">Employee Payroll</h3>
                            <div className="row">
                                <table className="payroll-table">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Month</th>
                                            <th>Basic Salary</th>
                                            <th>Total Earn</th>
                                            <th>Total Deduction</th>
                                            <th>Total Salary</th> 
                                            <th>Actions</th>
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {
                                          this.state.payrollDetail.map(
                                            payroll=>
                                                <tr key={payroll.payId}>
                                                    <td>{payroll.employeeId}</td>
                                                    <td>{payroll.month}</td>
                                                    <td>{payroll.basicSalary}</td>
                                                    <td>{payroll.totalEran}</td>
                                                    <td>{payroll.totalDeduction}</td>
                                                    <td>{payroll.totalSalary}</td>

                                                    <td>
                                                        <button onClick={()=>this.generatePayslip(payroll.payId)} className="table-input-btn2">PaySlip</button>
                                                       
                                                    </td>
                                                    
                                                    
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </table>

                        
                                
                                </div>
                
                            </div>
                        
                    </li>

                </ul>

         
                 
            </div>
        )
    }
}
