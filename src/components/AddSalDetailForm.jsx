import React, { Component } from 'react'
import SalaryServices from '../adapters/SalaryServices';
import '../styles/AddSalary.css';

const initialState={
    employee:{id:''},
    role:'',
    ot_rate:'',
    allowance:'',
    etf:'',
    epf:'',
    basic:'',
    role_Error:'',
    ot_rate_Error:'',
    allowance_Error:'',
    etf_Error:'',
    epf_Error:'',
    basic_Error:'',


}
 class AddSalDetailForm extends Component {
    constructor(props){
        super(props)

        this.state=initialState;




        this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.changeBasicHandler=this.changeBasicHandler.bind(this);
        this.changeOTRateHandler=this.changeOTRateHandler.bind(this);
        this.changeAllowanceHandler=this.changeAllowanceHandler.bind(this);
        this.changeETFHandler=this.changeETFHandler.bind(this);
        this.changeEPFHandler=this.changeEPFHandler.bind(this);
        

    }

    validate=()=>{
    // let  role_Error='';
    let  ot_rate_Error='';
    let  allowance_Error='';
    let  etf_Error='';
    let  epf_Error='';
    let  basic_Error='';

    if(!this.state.ot_rate){
        ot_rate_Error="OT Rate is required"
    }
    if(!this.state.allowance){
        allowance_Error="Allowance is required"
    }
    if(!this.state.etf){
        etf_Error="ETF is required"
    }
    if(!this.state.epf){
        epf_Error="EPF is required"
    }
    if(!this.state.basic){
        basic_Error="Basic is required"
    }
    if(ot_rate_Error||allowance_Error||etf_Error|| epf_Error||basic_Error){
        this.setState({ot_rate_Error,allowance_Error,etf_Error, epf_Error,basic_Error});
        return false;
    }

    return true;
  };  
 

    saveSalaryDetail=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let salaryDetail={role:this.state.role,ot_rate:this.state.ot_rate,allowance:this.state.allowance,basic:this.state.basic,etf:this.state.etf,epf:this.state.epf,employee:{id:this.state.employee.id}};
            console.log('salaryDetail=>'+JSON.stringify(salaryDetail));
            SalaryServices.insertSalaryDetail(salaryDetail).then(res=>{

                this.props.history.push('/manageSalary');
            });
        }
        
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
    
    cancel(){
        this.props.history.push('/manageSalary');
    }
    
    render() {
        return (
                <div className="formcontainer">
                    <div className="formaddsal">
                    <form className="form" >
                    <h3 className='caption'>Add Salary Details</h3>
                        <div className="forminputs">
                            <label htmlFor="employeeId" className='formlabel'>
                            Employee ID
                            </label>
                            <input 
                                id='employeeId'
                                type="text" 
                                name='id'
                                className='forminput'
                                placeholder='Employee ID'
                                value={this.state.employee.id}
                                onChange={this.changeEmployeeIdHandler}/>
                                {/* {errors.employeeId && <p>{errors.employeeId}</p>} */}
                        </div>
                        
                        
                        <div className="forminputs">
                            <label htmlFor="inTime" className='formlabel'>
                            Role
                            </label>
                            <select
                                id='role'
                                type="text" 
                                name='role'
                                className='forminput'
                                placeholder='Role'
                                value={this.state.role}
                                onChange={this.changeRoleHandler}>
                                <option value ="manager">manager</option>
                                <option value ="housekeeper">housekeeper</option>
                   

                            </select>

                                {/* <div className='input_Error'>
                                    {this.state.role_Error}
                                </div> */}
                                {/* {errors.inTime && <p>{errors.inTime}</p>} */}
                        </div>
                        <div className="forminputs">
                            <label htmlFor="outTime" className='form-label'>
                                Basic
                            </label>
                            <input 
                                id='basic'
                                type="text" 
                                name='basic'
                                className='forminput'
                                placeholder='Basic'
                                value={this.state.basic}
                                onChange={this.changeBasicHandler}/>
                                <div className='input_Error'>
                                    {this.state.basic_Error}
                                </div>
                                {/* {errors.outTime && <p>{errors.outTime}</p>} */}
                        </div>
                        <div className="forminputs">
                            <label htmlFor="otHour" className='formlabel'>
                                OT Rate
                            </label>
                            <input 
                                id='otRate'
                                type="text" 
                                name='ot_rate'
                                className='forminput'
                                placeholder='OT Rate'
                                value={this.state.ot_rate}
                                onChange={this.changeOTRateHandler}/>
                                <div className='input_Error'>
                                    {this.state.ot_rate_Error}
                                </div>
                                {/* {errors.otHour && <p>{errors.otHour}</p>} */}
                        </div>
                        <div className="forminputs">
                            <label htmlFor="type" className='formlabel'>
                                EPF
                            </label>
                            <input 
                                id='epf'
                                type="text" 
                                name='epf'
                                className='forminput'
                                placeholder='EPF'
                                value={this.state.epf}
                                onChange={this.changeEPFHandler}/>
                                 <div className='input_Error'>
                                    {this.state.epf_Error}
                                </div>
                                {/* {errors.type && <p>{errors.type}</p>} */}
                        </div>
                        <div className="forminputs">
                            <label htmlFor="type" className='formlabel'>
                                ETF
                            </label>
                            <input 
                                id='etf'
                                type="text" 
                                name='etf'
                                className='forminput'
                                placeholder='ETF'
                                value={this.state.etf}
                                onChange={this.changeETFHandler}/>
                                 <div className='input_Error'>
                                    {this.state.etf_Error}
                                </div>
                                {/* {errors.type && <p>{errors.type}</p>} */}
                        </div>
                        <div className="forminputs">
                            <label htmlFor="type" className='formlabel'>
                                Allowance
                            </label>
                            <input 
                                id='allowance'
                                type="text" 
                                name='allowance'
                                className='forminput'
                                placeholder='Allowance'
                                value={this.state.allowance}
                                onChange={this.changeAllowanceHandler}/>
                                 <div className='input_Error'>
                                    {this.state.allowance_Error}
                                </div>
                                {/* {errors.type && <p>{errors.type}</p>} */}
                        </div>
                        <div >
                            <button className='forminputbtn1' onClick={this.saveSalaryDetail} type='submit'>Save </button>
                            <button className='forminputbtn2' onClick={this.cancel.bind(this)} type="reset">Cancel</button>
    
                        </div>
                        
                    </form>
                    
                    </div>
                </div>
               
        )
    }
}
export default AddSalDetailForm