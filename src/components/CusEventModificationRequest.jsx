import React, { Component } from 'react';
import EventModificationRequestService from '../services/EventModificationRequestService';
const initialState = {
            //   booking:'',
              email:'',
              reason:'',
              daysRemainBooking:'',
              message:'',

            //   bookingError:'',
              emailError:'',
              reasonError:'',
              daysRemainBookingError:'',
              messageError:''
}
class CusEventModificationRequest extends Component {
    constructor(props){
        super(props)

        this.state=initialState;

        // this.changeBookingIDHandler=this.changeBookingIDHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeReasonHandler=this.changeReasonHandler.bind(this);
        this.changeDaysRemainBookingHandler=this.changeDaysRemainBookingHandler.bind(this);
        this.changeMessageHandler=this.changeMessageHandler.bind(this);

        this.saveEventModificationRequest = this.saveEventModificationRequest.bind(this);
    }

    validate = () => {
        // let bookingError='';
        let emailError='';
        let reasonError='';
        let daysRemainBookingError='';
        let messageError='';

        // if(!this.state.booking){
        //     bookingError="ID of your Booking is required "
        // }
        if(!this.state.email.includes('@')){
            emailError="Invalid Type "
        }
        if(!this.state.email){
            emailError="Email is required "
        }
        if(!this.state.reason){
            reasonError="Reason is required "
        }
        if(this.state.daysRemainBooking<14){
            daysRemainBookingError="*Minimum number of remaning days for the event should be 14* "
        }
        if(!this.state.daysRemainBooking){
            daysRemainBookingError="Remaning days for the is required "
        }
        if(!this.state.message){
            messageError="Message is required "
        }
        if (emailError|| reasonError || daysRemainBookingError || messageError) {
            this.setState({emailError, reasonError, daysRemainBookingError, messageError});
            return false;
        }

        return true;
    }

    saveEventModificationRequest = (e) =>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let eventModificationRequest = { email:this.state.email, reason:this.state.reason, days_Remain_Booking:this.state.daysRemainBooking, message:this.state.message};
            console.log('eventModificationRequest => ' + JSON.stringify(eventModificationRequest));
           
            EventModificationRequestService.createEv_Modification_Request(eventModificationRequest).then(res =>{
                this.props.history.push('/cus-page-bookings');
            });
            this.setState(initialState);
        }
    }
    // changeCustomerIDHandler= (event) =>{
    //     this.setState({customer: event.target.value});
    // }

    // changeBookingIDHandler= (event) =>{
    //     this.setState({booking: event.target.value});
    // }
    changeEmailHandler= (event) =>{
        this.setState({email: event.target.value});
    }
    changeReasonHandler= (event) =>{
        this.setState({reason: event.target.value});
    }
    changeDaysRemainBookingHandler= (event) =>{
        this.setState({daysRemainBooking: event.target.value});
    }
    changeMessageHandler= (event) =>{
        this.setState({message: event.target.value});
    }
    cancel(){
        this.props.history.push('/cus-page-bookings');
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Event Bookings</a></div> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navBarNav" aria-aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/home" style={{color:'orange'}}>Home <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/events-page" style={{color:'orange'}}>Events <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-event-bookings" style={{color:'orange'}}>Event Bookings<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-event-modification-request" style={{color:'orange'}}>Event Modification Requests<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/cus-payments" style={{color:'orange'}}>Payment<span className="sr-only"></span></a>
                            </li>

                        </ul>

                    </div>
                    </nav>

               </header> 
               
              <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Event Modification Request</h3>
                                <div className="card-body">
                                <form  >
                                    {/* <div className="form-group">
                                            <label>Booking ID</label>
                                            <input placeholder="Booking ID" name="booking" className="form-control"
                                             value={this.state.booking} onChange={this.changeBookingIDHandler}/>
                                            <div style={{fontSize: 12, color: "red"}}>{this.state.bookingError}</div>
                                        </div> */}
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input placeholder="Email" name="email" className="form-control"
                                             value={this.state.email} onChange={this.changeEmailHandler}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}" />
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Reason</label>
                                            <select placeholder="Choose" name="reason" className="form-control" 
                                            value={this.state.reason} onChange={this.changeReasonHandler}>
                                                <option value="">CHOOSE</option>
                                                <option value="Update Booking">Update Booking</option>
                                                <option value="Delete Booking">Delete Booking</option>
                                            </select>
                                            <div style={{fontSize: 12, color: "red"}}>{this.state.reasonError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Days Remaining for the Event</label>
                                            <input placeholder="Days Remaining for the Event"  name="daysRemainBooking" className="form-control"
                                             value={this.state.daysRemainBooking} onChange={this.changeDaysRemainBookingHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.daysRemainBookingError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <input placeholder="Message" name="message" className="form-control"
                                             value={this.state.message} onChange={this.changeMessageHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.messageError}</div>
                                        </div>
                                        {/* <button type = "submit" className="btn btn-success" /*onClick={this.saveEventModificationRequest}>Save</button> */}
                                        <button className="btn btn-success" style={{background:"rgb(197,161,60)"}} onClick={this.saveEventModificationRequest}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
              
            </div>
        );
    }
}

export default CusEventModificationRequest;