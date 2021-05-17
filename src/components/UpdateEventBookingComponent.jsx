import React, { Component } from 'react';
import EventBookingsService from '../services/EventBookingsService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

class UpdateEventBookingComponent extends Component {
    constructor(props){
        super(props)

        this.state={
               Booking_Id:this.props.match.params.Booking_Id,
               cusName:'',
               cusPhone:'',
               eventType:'',
               eventPackage:'A',
               eventDate:'',
               numOfParticipants:'',
               timeIn:'',
               timeOut:''
        }
        this.changeCustomerNameHandler=this.changeCustomerNameHandler.bind(this);
        this.changeCustomerPhoneHandler=this.changeCustomerPhoneHandler.bind(this);
        this.changeEventTypeHandler=this.changeEventTypeHandler.bind(this);
        this.changeEventPackageHandler=this.changeEventPackageHandler.bind(this);
        this.changeEventDateHandler=this.changeEventDateHandler.bind(this);
        this.changeNumOfParticipantsHandler=this.changeNumOfParticipantsHandler.bind(this);
        this.changeTimeInHandler=this.changeTimeInHandler.bind(this);
        this.changeTimeOutHandler=this.changeTimeOutHandler.bind(this);

        this.updateEventBooking = this.updateEventBooking.bind(this);
    }

    notify(){
        toast.warn('Event Booking is Updated Successfully!', {position: toast.POSITION.TOP_CENTER})

    }
    notify1(){
        toast.error('You have canceled the Event Booking updation!', {position: toast.POSITION.TOP_CENTER})

    }

    componentDidMount(){
        EventBookingsService.getEventBookingById(this.state.Booking_Id).then( (res) => {
            let bookings = res.data;
            this.setState({cusName: bookings.cus_Name, cusPhone: bookings.cus_Phone_No, eventType: bookings.booking_Type, eventPackage: bookings.booking_Package, eventDate: bookings.date, numOfParticipants: bookings.num_Participants, timeIn: bookings.time_In, timeOut:bookings.time_Out });
        });
    }

    updateEventBooking=(e) => {
        e.preventDefault();
        let bookings = {cus_Name: this.state.cusName, cus_Phone_No: this.state.cusPhone, booking_Type: this.state.eventType, booking_Package: this.state.eventPackage, date: this.state.eventDate, num_Participants: this.state.numOfParticipants, time_In: this.state.timeIn, time_Out: this.state.timeOut};
        console.log('bookings => ' + JSON.stringify(bookings));
        EventBookingsService.updateEventBooking(bookings,this.state.Booking_Id).then( res => {
            this.notify();
            this.props.history.push('/bookings');
        });

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
        this.notify1();
        this.props.history.push('/bookings');
    }

    render() {
        const {eventPackage} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Event Booking</h3>
                                <div className="card-body">
                                    <form>
                                        <h4>CUSTOMER DETAILS</h4>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input placeholder="Customer Name" name="cusName" className="form-control"
                                             value={this.state.cusName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone No</label>
                                            <input placeholder="Customer Phone" name="cusPhone" className="form-control"
                                             value={this.state.cusPhone} onChange={this.changeCustomerPhoneHandler}/>
                                        </div>
                                        <h4>EVENT DETAILS</h4>
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
                                        </div>
                                        <div className="form-group">
                                            <label>Event Package</label><br/>
                                            <input type="radio"  name="eventPackage" className="formcontrol"
                                             value="A" onChange={this.changeEventPackageHandler} checked={eventPackage === "A"}/>
                                             <span>A</span><br/>
                                             <input type="radio"  name="eventPackage" className="formcontrol"
                                             value="B" onChange={this.changeEventPackageHandler} checked={eventPackage === "B"}/>
                                             <span>B</span><br/>
                                             <input type="radio" name="eventPackage" className="formcontrol"
                                             value="C" onChange={this.changeEventPackageHandler} checked={eventPackage === "C"}/>
                                             <span>C</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Event Date</label>
                                            <input type="date" name="eventDate" className="form-control"
                                             value={this.state.eventDate} onChange={this.changeEventDateHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Number of Participants</label>
                                            <input placeholder="Num of Participants" name="numOfParticipants" className="form-control"
                                             value={this.state.numOfParticipants} onChange={this.changeNumOfParticipantsHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Time In</label>
                                            <input type="time" name="timeIn" className="form-control"
                                             value={this.state.timeIn} onChange={this.changeTimeInHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Time Out</label>
                                            <input type="time" name="timeOut" className="form-control"
                                             value={this.state.timeOut} onChange={this.changeTimeOutHandler}/>
                                        </div>
                                        <button className="btn btn-success" style={{background:"rgb(197,161,60)0%"}} onClick={this.updateEventBooking}>Update</button>
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

export default UpdateEventBookingComponent;