import React, { Component } from 'react';
import EventBookingsService from '../services/EventBookingsService';

class ViewEventBookingComponent extends Component {
    constructor(props){
        super(props)

        this.state={
              Booking_Id: this.props.match.params.Booking_Id,
               eventBooking: {}
        }
    }

    componentDidMount(){
        EventBookingsService.getEventBookingById(this.state.Booking_Id).then( res => {
            this.setState({eventBooking: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Event Booking Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Booking ID:</label>
                            <div> { this.state.eventBooking.booking_Id }</div>
                        </div>
                        <div className = "row">
                            <label>Date:</label>
                            <div> { this.state.eventBooking.date }</div>
                        </div> 
                        <div className = "row">
                            <label>No of Participants:</label>
                            <div> { this.state.eventBooking.num_Participants}</div>
                        </div>
                        <div className = "row">
                            <label>Booking Type:</label>
                            <div> { this.state.eventBooking.booking_Type}</div>
                        </div>
                        <div className = "row">
                            <label>Booking Package:</label>
                            <div> { this.state.eventBooking.booking_Package }</div>
                        </div>
                        <div className = "row">
                            <label>Time In:</label>
                            <div> { this.state.eventBooking.time_In}</div>
                        </div>
                        <div className = "row">
                            <label>Time Out:</label>
                            <div> { this.state.eventBooking.time_Out}</div>
                        </div>
                        <div className = "row">
                            <label>Customer Name:</label>
                            <div> { this.state.eventBooking.cus_Name}</div>
                        </div>
                        <div className = "row">
                            <label>Customer Phone:</label>
                            <div> { this.state.eventBooking.cus_Phone_No}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEventBookingComponent;