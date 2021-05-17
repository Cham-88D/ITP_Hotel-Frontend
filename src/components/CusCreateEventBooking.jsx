import React, { Component } from 'react';
import EventBookingsService from '../services/EventBookingsService';

const initialState = {
    cusName:'',
    cusPhone:'',
    eventType:'',
    eventPackage:'',
    eventDate:'',
    numOfParticipants:'',
    timeIn:'',
    timeOut:'',

    cusNameError:'',
    cusPhoneError:'',
    eventTypeError:'',
    eventPackageError:'',
    eventDateError:'',
    numOfParticipantsError:'',
    timeInError:'',
    timeOutError:''

}
class CusCreateEventBooking extends Component {
    constructor(props){
        super(props)

        this.state=initialState;
        
        this.changeCustomerNameHandler=this.changeCustomerNameHandler.bind(this);
        this.changeCustomerPhoneHandler=this.changeCustomerPhoneHandler.bind(this);
        this.changeEventTypeHandler=this.changeEventTypeHandler.bind(this);
        this.changeEventPackageHandler=this.changeEventPackageHandler.bind(this);
        this.changeEventDateHandler=this.changeEventDateHandler.bind(this);
        this.changeNumOfParticipantsHandler=this.changeNumOfParticipantsHandler.bind(this);
        this.changeTimeInHandler=this.changeTimeInHandler.bind(this);
        this.changeTimeOutHandler=this.changeTimeOutHandler.bind(this);

        this.saveEventBooking = this.saveEventBooking.bind(this);
    }
    
    validate = () => {
        let cusNameError='';
        let cusPhoneError='';
        let eventTypeError='';
        let eventPackageError='';
        let eventDateError='';
        let numOfParticipantsError='';
        let timeInError='';
        let timeOutError='';

        if(!this.state.cusName){
            cusNameError="Customer name is required "
        }
        if(!this.state.cusPhone){
            cusPhoneError="Customer Phone number is required "
        }
        if(!this.state.eventType){
            eventTypeError="Event type is required "
        }
        if(!this.state.eventPackage){
            eventPackageError="Event Package is required "
        }
        if(!this.state.eventDate){
            eventDateError="Event date is required "
        }
        if(!this.state.numOfParticipants){
            numOfParticipantsError="Number of  participants is required "
        }
        if(this.state.numOfParticipants<1){
            numOfParticipantsError="Number of  participants cannot be null or minus "
        }
        if(!this.state.timeIn){
            timeInError="In Time is required "
        }
        if(!this.state.timeIn.includes(':')){
            timeInError="Invalid type !"
        }
        if(!this.state.timeOut){
            timeOutError="Out Time is required "
        }
        if(!this.state.timeOut.includes(':')){
            timeOutError="Invalid Type! "
        }
        if (cusNameError || cusPhoneError|| eventTypeError || eventPackageError || eventDateError || numOfParticipantsError || timeInError || timeOutError) {
            this.setState({ cusNameError, cusPhoneError, eventTypeError, eventPackageError, eventDateError, numOfParticipantsError, timeInError, timeOutError});
            return false;
        }

    return true;
}


    saveEventBooking=(e) => {
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let eventBooking = {cus_Name: this.state.cusName, cus_Phone_No: this.state.cusPhone, booking_Type: this.state.eventType, booking_Package: this.state.eventPackage, date: this.state.eventDate, num_Participants: this.state.numOfParticipants, time_In: this.state.timeIn, time_Out: this.state.timeOut};
            console.log('eventBooking => ' + JSON.stringify(eventBooking));
            this.setState(initialState);
            EventBookingsService.createEventBooking(eventBooking).then(res => {
                this.props.history.push('/cus-page-bookings'); 
            });
        }
    }
    changeCustomerNameHandler = (event) => {
        this.setState({cusName: event.target.value});
    }
    changeCustomerPhoneHandler = (event) => {
        this.setState({cusPhone: event.target.value});
    }
    changeEventTypeHandler = (event) => {
        this.setState({eventType: event.target.value});
    }
    changeEventPackageHandler = (event) => {
        this.setState({eventPackage: event.target.value});
    }
    changeEventDateHandler = (event) => {
        this.setState({eventDate: event.target.value});
    }
    changeNumOfParticipantsHandler = (event) => {
        this.setState({numOfParticipants: event.target.value});
    }
    changeTimeInHandler = (event) => {
        this.setState({timeIn: event.target.value});
    }
    changeTimeOutHandler = (event) => {
        this.setState({timeOut: event.target.value});
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
               
                <div className="container" style={{marginTop:20}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Event Booking</h3>
                                <div className="card-body">
                                    <form>
                                        <h4>CUSTOMER DETAILS</h4>
                                        <div className="form-group">
                
                                            <label>Name</label>
                                            <input placeholder="Customer Name" name="cusName" className="form-control"
                                             value={this.state.cusName} onChange={this.changeCustomerNameHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.cusNameError}</div>
                                        </div> 
                                        <div className="form-group">
                                            <label>Phone No</label>
                                            <input placeholder="Customer Phone" name="cusPhone" className="form-control"
                                             value={this.state.cusPhone} onChange={this.changeCustomerPhoneHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.cusPhoneError}</div>
                                        </div><br/>
                                        <h4>EVENT DETAILS</h4><br/>
                                        <div className="form-group">
                                        <label>Event Type</label>
                                            <select placeholder="Choose" name="eventType" className="form-control" 
                                            value={this.state.eventType} onChange={this.changeEventTypeHandler}>
                                                <option value="">CHOOSE</option>
                                                <option value="W001">W001</option>
                                                <option value="W002">W002</option>
                                                <option value="W003">W003</option>
                                                <option value="B001">B001</option>
                                                <option value="B002">B002</option>
                                                <option value="B003">B003</option>
                                                <option value="G001">G001</option>
                                                <option value="G002">G002</option>
                                                <option value="G003">G003</option>
                                                <option value="S001">S001</option>
                                                <option value="S002">S002</option>
                                                <option value="S003">S003</option>
                                            </select>
                                            <div style={{fontSize: 12, color: "red"}}>{this.state.eventTypeError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Event Package</label><br/>
                                            <input type="radio"  name="eventPackage" className="formcontrol"
                                             value="A" onChange={this.changeEventPackageHandler} />
                                             <span>A</span><br/>
                                             <input type="radio" name="eventPackage" className="formcontrol"
                                             value="B" onChange={this.changeEventPackageHandler} />
                                             <span>B</span> <br/>
                                             <input type="radio"  name="eventPackage" className="formcontrol"
                                             value="C" onChange={this.changeEventPackageHandler} />
                                             <span>C</span>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.eventPackageError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Event Date</label>
                                            <input type="date" name="eventDate" className="form-control"
                                             value={this.state.eventDate} onChange={this.changeEventDateHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.eventDateError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Number of Participants</label>
                                            <input placeholder="Num of Participants" name="numOfParticipants" className="form-control"
                                             value={this.state.numOfParticipants} onChange={this.changeNumOfParticipantsHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.numOfParticipantsError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Time In</label>
                                            <input type="time" name="timeIn" className="form-control"
                                             value={this.state.timeIn} onChange={this.changeTimeInHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.timeInError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Time Out</label>
                                            <input type="time" name="timeOut" className="form-control"
                                             value={this.state.timeOut} onChange={this.changeTimeOutHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.timeOutError}</div>
                                        </div>
                                        <button className="btn btn-success" style={{background:"rgb(197,161,60)"}} onClick={this.saveEventBooking}>Save</button>
                                        <button className="btn btn-danger" onClick={this} style={{marginLeft:"10px"}}>Reset</button>
                                        {/* <button className="btn btn-info" onClick={<a href="http://localhost:3000/payments"></a>} style={{marginLeft:"10px"}}>Next</button> */}
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="container" style={{marginTop:30}}>
                    <div className="row">
                            <div className="card col-md-5 offset-md-3 offset-md-3" style={{backgroundColor: "lightgrey"}}>
                    <h3 className="text-center" style={{color:"yellow"}}>Price List</h3>
                    <form className="priceList" >
                        <table>
                            <thead>
                                <tr>
                                    <th>TYPE </th>
                                    <th>PACKAGE & DESCRIPTION</th>
                                    <th>PRICE(RS.)</th>
                                </tr><br></br>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>W001(Wedding)</td>
                                    <td>A-upto 1000 participants Includes all the hall arrangements,food,DJ and 1 room</td>
                                    <td>800,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>W002(Wedding)</td>
                                    <td>B-upto 500 participants Includes all the hall arrangements,food and 1 room</td>
                                    <td>600,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>W003(Wedding)</td>
                                    <td>C-upto 300 participants Includes all the hall arrangements,food and 1 room </td>
                                    <td>500,000.00</td>
                                </tr><br/>
                               <br/>

                                <tr>
                                    <td>B001(Birthday)</td>
                                    <td>A-upto 150 participants Includes all the hall arrangements,food,DJ and 1 room</td>
                                    <td>225,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>B002(Birthday)</td>
                                    <td>B-upto 100 participants Includes all the hall arrangements,food and 1 room</td>
                                    <td>180,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>B003(Birthday)</td>
                                    <td>C-upto 75 participants Includes all the hall arrangements,food and 1 room </td>
                                    <td>115,000.00</td>
                                </tr><br/>
                                <br/>
                               

                                <tr>
                                    <td>G001(Gettogether)</td>
                                    <td>A-upto 150 participants Includes all the hall arrangements,food,DJ and 1 room</td>
                                    <td>225,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>G002(Gettogether)</td>
                                    <td>B-upto 100 participants Includes all the hall arrangements,food and 1 room</td>
                                    <td>180,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>G003(Gettogether)</td>
                                    <td>C-upto 75 participants Includes all the hall arrangements,food and 1 room </td>
                                    <td>115,000.00</td>
                                </tr><br/>
                                <br/>
                                
                                <tr>
                                    <td>S001(Special)</td>
                                    <td>A- Pre-Shoot Includes food and 1 room </td>
                                    <td>150,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>S002(Special)</td>
                                    <td>B- Pool Party upto 25 participants Includes food and 1 room</td>
                                    <td>200,000.00</td>
                                </tr><br/>
                                <tr>
                                    <td>S003(Special)</td>
                                    <td>C-Other upto 25 participants Includes food and 1 room </td>
                                    <td>200,000.00</td>
                                </tr>

                            </tbody>
                        </table>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CusCreateEventBooking;