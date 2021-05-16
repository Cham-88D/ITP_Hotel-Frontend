
import React, { Component } from 'react'
import AttendanceService from '../adapters/AttendanceService';
import '../styles/AddAttend.css';

const options = [
    { value: 'flavor', label: 'flavor' },
    { value: 'yummy', label: 'yummy' },
    { value: 'red', label: 'red' },
    { value: 'green', label: 'green' },
    { value: 'yellow', label: 'yellow' },
];

const initialState={
    
    employee:{id:''},
    in_Time:'',
    out_Time:'',
    otHours:'',
    atte_type:'',
    in_Time_Error:'',
    out_Time_Error:'',
    otHours_Error:'',
    atte_type_Error:'',
  
    
    

}


 class AddAttendForm extends Component {
    interval = null;
    attendanceId = null;
     constructor(props){
         super(props)

         this.state={
             initialState,
             attendance:[],
             final_calulation:[],
             selectedOption: 'txt',
            
            }
            
           
         
         
         this.changeEmployeeIdHandler=this.changeEmployeeIdHandler.bind(this);
         this.changeInTimeHandler=this.changeInTimeHandler.bind(this);
         this.changeOutTimeHandler=this.changeOutTimeHandler.bind(this);
         this.changeOTHourHandler=this.changeOTHourHandler.bind(this);
         this.changeTypeHandler=this.changeTypeHandler.bind(this);
         this.saveAttendance=this.saveAttendance.bind(this);
        //  this.cancel=this.cancel.bind(this);
         

     }

     validate=()=>{
       let in_Time_Error='';
       let out_Time_Error='';
       let otHours_Error='';
       let atte_type_Error='';

       if(!this.state.in_Time.includes(':')){
           in_Time_Error="invalid type"
       }
       
       if(!this.state.in_Time){
           in_Time_Error="In Time is required"
       }
       if(!this.state.out_Time.includes(':')){
            out_Time_Error="invalid type"
       }
        if(!this.state.out_Time){
            out_Time_Error="Out Time is required"
        }
        if(!this.state.otHours){
            otHours_Error="OT Hour is required"
        }
        if(this.state.otHours>5){
            otHours_Error="OT Hour Should be less than 5 hours"
        }
        // if(!this.state.otHours.includes([1-4])){
        //     otHours_Error="OT Hour Should be a number"
        // }
        if(!this.state.atte_type){
            atte_type_Error="Attendance Type required"
        }
       if(in_Time_Error||out_Time_Error||otHours_Error||atte_type_Error){
           this.setState({in_Time_Error,out_Time_Error,otHours_Error,atte_type_Error});
           return false;
       }

       return true;
     };

   
     saveAttendance=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){

            let attendance={atte_type:this.state.atte_type,in_Time:this.state.in_Time,otHours:this.state.otHours,
                out_Time:this.state.out_Time,employee:{id:this.state.employee.id} };
               console.log('attendance=>'+JSON.stringify(attendance));
               this.setState(initialState);
               AttendanceService.insertAttendance(attendance).then(res=>{
                  
                       
                     this.props.history.push('/manageAttendance');
               });
       

        }
        
    }
     changeEmployeeIdHandler=(event)=>{
         this.setState({employee:{id:event.target.value}});
     }
     changeInTimeHandler=(event)=>{
        this.setState({in_Time:event.target.value});
    }
    changeOutTimeHandler=(event)=>{
        this.setState({out_Time:event.target.value});
    }
    changeOTHourHandler=(event)=>{
        this.setState({otHours:event.target.value});
    }
    changeTypeHandler=(event)=>{
        this.setState({atte_type:event.target.value});
    }
   cancel(){
       this.props.history.push('/manageAttendance');
   }
   
   componentDidMount(){
    AttendanceService.getAllDaily_Attendance().then((res)=>{
        this.setState({attendances:res.data});
        this.attendanceId = res.data;

        var itemsets =  setTimeout(this.temp, 3000);
        console.log('start');
        
        console.log(itemsets);
        
        console.log('end');

    });

   
}
handleChange = ({ target }) => {
    var value_select_option = target.value;
    alert(value_select_option);
    this.setState({
        selectedOption: target.value,
    });
}

    temp=()=>{
        

        var atteId = this.attendanceId;
        var id={};
        var finalid=[];

        for (let i = 0; i < atteId.length; i++) {
            console.log(atteId[i]);
           var ab =atteId[i]['attendanceId'];

             var object = {
                 'employe_id' :  id,
            };
            id[i] = object;
            finalid[i]=object;
                
        }
        console.log(id);
        this.setState({final_calulation:id});

        this.setState({attendance:id});
        console.log(this.setState.selectedOption);
        this.setState({selectedOption:'None 2'});
         console.log(this.setState.selectedOption);
        return;
    }


    render() {
      
       
        // const {times} = this.state;
        return (
            
            <div className="form-container">

            
                <div className="form-add-sal">
                <form className="form"  id="addAttend" >
                <h3>Add Attendance</h3>
                
               
                    <div className="form-inputs">
                        <label htmlFor="employeeId" className='form-label'>
                        Employee ID
                        </label>
                        <select 
                            id='employeeId'
                            type="text" 
                            name='employeeId'
                            className='form-input'
                            placeholder='Employee ID'
                            // value={this.state.employee.id}
                            onChange={this.changeEmployeeIdHandler}>
                                
                                    
                                <option value ="CHOOSE"></option>
                                <option value ="1">1</option>

                                {/* {
                                    this.state.attendance.map(type=>( <option key={attendance.id} >
                                        {attendance.employee.id}
                                    </option>
                                    
                                    ))
                                } */}
                                           

                         </select>
                               
                    
                            
                            {/* {errors.employeeId && <p>{errors.employeeId}</p>} */}
                    </div>
                    
                    
                    <div className="form-inputs">
                        <label htmlFor="inTime" className='form-label'>
                        In Time
                        </label>
                        <input 
                            id='inTime'
                            type="text" 
                            name='in_Time'
                            className='form-input'
                            placeholder='HH:MM'
                            value={this.state.in_Time}
                            onChange={this.changeInTimeHandler}/>
                            <div className='inputError'>
                                {this.state.in_Time_Error}
                            </div>
                            {/* {errors.inTime && <p>{errors.inTime}</p>} */}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="outTime" className='form-label'>
                            Out Time
                        </label>
                        <input 
                            id='outTime'
                            type="text" 
                            name='out_Time'
                            className='form-input'
                            placeholder='HH:MM'
                            value={this.state.out_Time}
                            onChange={this.changeOutTimeHandler}/>
                            <div className='inputError'>
                                {this.state.out_Time_Error}
                            </div>
                            {/* {errors.outTime && <p>{errors.outTime}</p>} */}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="otHour" className='form-label'>
                            OT Hour
                        </label>
                        <input 
                            id='otHour'
                            type="text" 
                            name='otHours'
                            className='form-input'
                            placeholder='OT Hour'
                            value={this.state.otHours}
                            onChange={this.changeOTHourHandler}/>
                            <div className='inputError'>
                                {this.state.otHours_Error}
                            </div>
                            {/* {errors.otHour && <p>{errors.otHour}</p>} */}
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="type" className='form-label'>
                            Type
                        </label>
                        <select 
                            id='type'
                            type="text" 
                            name='atte_type'
                            className='form-input'
                            placeholder='Type'
                            value={this.state.atte_type}
                            onChange={this.changeTypeHandler}>
                             
                                <option value ="1">1</option>
                                <option value ="ab">ab</option>
                                <option value ="half-day">half-day</option>
                                <option value ="Quater-day">Quater-day</option>
                            
                        </select>

                            <div className='inputError'>
                                {this.state.atte_type_Error}
                            </div>
                            {/* {errors.type && <p>{errors.type}</p>} */}
                    </div>
                    <div >
                        <button className='form-input-btn1' onClick={this.saveAttendance} type='submit'>Save </button>
                        <button className='form-input-btn2' onClick={this.cancel.bind(this)} type='reset'>Cancel</button>

                    </div>
                    
                </form>
                
                </div>
            </div>
           
        )
    }
}
export default AddAttendForm