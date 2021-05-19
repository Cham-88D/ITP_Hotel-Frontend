import React, { Component } from 'react';
import ReservationRequestService_IT19964010 from '../adapters/ReservationRequestService_IT19964010';



const initialState={
    rm_id:'',
    rm_Type:'',
    r_Reason:'',
    r_Message:'',
    rm_Req_Date:'',


    rm_idError:'',
    rm_TypeError:'',
    r_ReasonError:'',
    r_MessageError:'',
    rm_Req_DateError:''
          
}
class CusCreateResRequestComponent_IT19964010 extends Component{
        constructor(props){
            super(props)
   
            this.state=initialState;
               
        this.changerm_idHandler=this.changerm_idHandler.bind(this);
        this.changerm_TypeHandler= this.changerm_TypeHandler.bind(this);
        this.changer_ReasonHandler=this.changer_ReasonHandler.bind(this);
        this.changer_MessageHandler= this.changer_MessageHandler.bind(this);
        this.changerm_Req_DateHandler= this.changerm_Req_DateHandler.bind(this);




        this.saveRes_Modification_Request=this.saveRes_Modification_Request.bind(this);
    
    }


    validate=()=>{
        let rm_idError='';
        let  rm_TypeError='';
        let  r_ReasonError='';
        let r_MessageError='';
        let rm_Req_DateError='';
       




        if(!this.state.rm_id){
            rm_idError="Reservation ID is Required !";
        }
        // if(!this.state.rm_Type){
        //     rm_TypeError="Modification Type is Required !";
        // }
        // if(!this.state.r_Reason){
        //     r_ReasonError="Modification Reason is Required !";
        // }
        if(!this.state.r_Message){
            r_MessageError="Message is Required !";
        }
        if(!this.state.rm_Req_Date){
            rm_Req_DateError="Requested Date is Required !";
        }
        // if(!this.state.r_Price<1000){
        //     r_PriceError="Room Price is Required !";
        // }
        if(rm_idError||rm_TypeError||rm_Req_DateError){
            this.setState({rm_idError,r_MessageError,rm_Req_DateError});
            return false;
        }
        return true;


    }


    saveRes_Modification_Request = (e) => {
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let res_modification_request ={rm_id:this.state.rm_id,rm_Type:this.state.rm_Type,r_Reason:this.state.r_Reason,r_Message:this.state.r_Message,rm_Req_Date:this.state.rm_Req_Date};
            console.log('res_modification_request =>' + JSON.stringify(res_modification_request));
        
            ReservationRequestService_IT19964010.createRes_Modification_Request(res_modification_request).then(res =>{
                this.props.history.push('/cus-res');
            });
        }
    }


    changerm_idHandler = (event) => {
        this.setState({rm_id:event.target.value});
    }

    changerm_TypeHandler = (event) => {
        this.setState({rm_Type:event.target.value});
    }

    changer_ReasonHandler = (event) => {
        this.setState({r_Reason:event.target.value});
    }
    
    changer_MessageHandler = (event) => {
        this.setState({r_Message:event.target.value});
    }

    changerm_Req_DateHandler = (event) => {
        this.setState({rm_Req_Date:event.target.value});
    }
    
    cancel(){
        this.props.history.push('/cus-res');
    }


    render() {
        return (
            <div>

<header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    {/* <div><a href="https://javaguides.net" className="navbar-brand">Room Rservation Management</a></div>  */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navBarNav" aria-aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/home" style={{color:'orange'}}>Home <span className="sr-only"></span></a>
                            </li>
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/events-page" style={{color:'orange'}}>Rooms <span className="sr-only"></span></a>
                            </li> */}
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-res" style={{color:'orange'}}>Rooms<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-create-res" style={{color:'orange'}}>Room Reservation<span className="sr-only"></span></a>
                            </li>
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/view-reservation/:id" style={{color:'orange'}}>Your Booking<span className="sr-only"></span></a>
                            </li> */}
                             <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-res-req" style={{color:'orange'}}>Reservation Modification Request<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-payments" style={{color:'orange'}}>Payment<span className="sr-only"></span></a>
                            </li>
                        </ul>

                    </div>
                    </nav>

               </header> 
               
                   
                <br></br>
                <div className ="container">
                    <div className="row">
                    <br></br>
                    <h2 className="mainh2"> We assist you to modify your reserved packages! </h2>

                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className=" text-center"> Add Room Reservation Modification Request </h3>
                            <div className="card-body">
 
                                <form>
                                  
                                    <div className="form-group">
                                    <label> Reservation ID : </label>
                                    <input placeholder="Reservation ID" name="rm_id" className="formcontrol"
                                        value={ this.state.rm_id} onChange={this.changerm_idHandler} />
                                     <div style={{fontSize: 12, color: "red"}}>{this.state.rm_idError} </div>
                                    </div>
                                    {/* <div className="form-group">
                                    <label> Modification Type : </label><br/>
                                        <select value={this.state.rm_Type} name="rm_Type" className="formcontrol"
                                            onChange={this.changerm_TypeHandler}>
                                            <option>Reservation Cancel</option>
                                            <option > Reservation Update</option>
                                        </select>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.rm_TypeError} </div>
                                    </div>
                                      */}
                                    <div className="form-group">
                                    <label> Modification Type : </label><br/>
                                        <select  placeholder="CHOOSE" value={this.state.rm_Type} name="rm_Type" className="formcontrol" 
                                            onChange={this.changerm_TypeHandler}>
                                            <option></option>
                                            <option>Reservation Cancel</option>
                                            <option > Reservation Update</option>
                                        </select>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.rm_TypeError} </div>
                                    </div>
                                     
                                    <div className="form-group">
                                    <label> Modification Reason : </label><br/>
                                        <select  placeholder="CHOOSE" value={this.state.r_Reason}  name="rm_Type" className="formcontrol" 
                                            onChange={this.changer_ReasonHandler}> 
                                            <option></option>
                                            <option> Extend Reservation date</option>
                                            <option > Update my package</option>
                                             <option> Cancel my package</option>
                                            <option > Other</option>
                                        </select>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.r_ReasonError} </div>
                                    </div>

                                    <div className="form-group">
                                    <label> Requested Date : </label>
                                    <input placeholder="Message" name="rm_Req_Date" className="formcontrol" type="date"
                                        value={ this.state.rm_Req_Date} onChange={this.changerm_Req_DateHandler} />
                                     <div style={{fontSize: 12, color: "red"}}>{this.state.rm_Req_DateError} </div>
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveRes_Modification_Request}> Save </button>
                                    <button className="btn btn-danger" style={{marginLeft: "10px" }} onClick={this.cancel.bind(this)}  > Cancel </button> 
                                 </form>   

                            </div>

                        
                        
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default CusCreateResRequestComponent_IT19964010;