import React, { Component } from 'react'
import SalaryServices from '../adapters/SalaryServices';

 class AddSalDetailForm extends Component {
    constructor(props){
        super(props)

        this.state={
           
           employee:{id:''},
           role:'',
           ot_rate:'',
           allowance:'',
           etf:'',
           epf:'',
           basic:'',


           
        }
        this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.changeBasicHandler=this.changeBasicHandler.bind(this);
        this.changeOTRateHandler=this.changeOTRateHandler.bind(this);
        this.changeAllowanceHandler=this.changeAllowanceHandler.bind(this);
        this.changeETFHandler=this.changeETFHandler.bind(this);
        this.changeEPFHandler=this.changeEPFHandler.bind(this);
        

    }

    saveSalaryDetail=(e)=>{
        e.preventDefault();
        let salaryDetail={role:this.state.role,ot_rate:this.state.ot_rate,allowance:this.state.allowance,basic:this.state.basic,etf:this.state.etf,epf:this.state.epf,employee:{id:this.state.employee.id}};
        console.log('salaryDetail=>'+JSON.stringify(salaryDetail));
        SalaryServices.insertSalaryDetail(salaryDetail).then(res=>{

        });
        
    }

    changeEmployeeIdHandler=(event)=>{
        this.setState({employee:{id:event.target.value}});
    }
    changeRoleHandler=(event)=>{
        this.setState({role:event.target.value});
    }
    changeBasicHandler=(event)=>{
        this.setState({basic:event.target.value});
    }
    changeOTRateHandler=(event)=>{
        this.setState({ot_rate:event.target.value});
    }
    changeAllowanceHandler=(event)=>{
        this.setState({allowance:event.target.value});
    }
    changeETFHandler=(event)=>{
        this.setState({etf:event.target.value});
    }
    changeEPFHandler=(event)=>{
        this.setState({epf:event.target.value});
    }
    
    
    
    render() {
        return (
                <div className="form-container">
                    <div className="form-add-sal">
                    <form className="form" >
                    <h3>Add Attendance</h3>
                        <div className="form-inputs">
                            <label htmlFor="employeeId" className='form-label'>
                            Employee ID
                            </label>
                            <input 
                                id='employeeId'
                                type="text" 
                                name='id'
                                className='form-input'
                                placeholder='Employee ID'
                                value={this.state.employee.id}
                                onChange={this.changeEmployeeIdHandler}/>
                                {/* {errors.employeeId && <p>{errors.employeeId}</p>} */}
                        </div>
                        
                        
                        <div className="form-inputs">
                            <label htmlFor="inTime" className='form-label'>
                            Role
                            </label>
                            <input 
                                id='role'
                                type="text" 
                                name='role'
                                className='form-input'
                                placeholder='Role'
                                value={this.state.role}
                                onChange={this.changeRoleHandler}/>
                                {/* {errors.inTime && <p>{errors.inTime}</p>} */}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="outTime" className='form-label'>
                                Basic
                            </label>
                            <input 
                                id='basic'
                                type="text" 
                                name='basic'
                                className='form-input'
                                placeholder='Basic'
                                value={this.state.basic}
                                onChange={this.changeBasicHandler}/>
                                {/* {errors.outTime && <p>{errors.outTime}</p>} */}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="otHour" className='form-label'>
                                OT Rate
                            </label>
                            <input 
                                id='otRate'
                                type="text" 
                                name='ot_rate'
                                className='form-input'
                                placeholder='OT Rate'
                                value={this.state.ot_rate}
                                onChange={this.changeOTRateHandler}/>
                                {/* {errors.otHour && <p>{errors.otHour}</p>} */}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="type" className='form-label'>
                                EPF
                            </label>
                            <input 
                                id='epf'
                                type="text" 
                                name='epf'
                                className='form-input'
                                placeholder='EPF'
                                value={this.state.epf}
                                onChange={this.changeEPFHandler}/>
                                {/* {errors.type && <p>{errors.type}</p>} */}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="type" className='form-label'>
                                ETF
                            </label>
                            <input 
                                id='etf'
                                type="text" 
                                name='etf'
                                className='form-input'
                                placeholder='ETF'
                                value={this.state.etf}
                                onChange={this.changeETFHandler}/>
                                {/* {errors.type && <p>{errors.type}</p>} */}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="type" className='form-label'>
                                Allowance
                            </label>
                            <input 
                                id='allowance'
                                type="text" 
                                name='allowance'
                                className='form-input'
                                placeholder='Allowance'
                                value={this.state.allowance}
                                onChange={this.changeAllowanceHandler}/>
                                {/* {errors.type && <p>{errors.type}</p>} */}
                        </div>
                        <div >
                            <button className='form-input-btn1' onClick={this.saveSalaryDetail} type='submit'>Save </button>
                            <button className='form-input-btn2' type='reset'>Reset</button>
    
                        </div>
                        
                    </form>
                    
                    </div>
                </div>
               
        )
    }
}
export default AddSalDetailForm