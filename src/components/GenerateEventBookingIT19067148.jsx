import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './EventIT19067148.css';
import EventBookingsServiceIT19067148 from '../services/EventBookingsServiceIT19067148';

class GenerateEventBookingIT19067148 extends Component {
    constructor(props){
        super(props)

        this.state={
                bookings: []
               
        }
        this.addEventBooking = this.addEventBooking.bind(this);
        this.addEventModificationRequest = this.addEventModificationRequest.bind(this);
        
    }

    
    componentDidMount(){
        EventBookingsServiceIT19067148.getEventBookings().then((res) => {


            this.setState({bookings:res.data});
            console.log(res);
        
        });

     
    }

    addEventBooking(){
        this.props.history.push('/add-event-booking');
    }

    addEventModificationRequest(){
        this.props.history.push('/add-event-modification-request');
    }

    render() {
        
        return (
            <div>
                
               <h2 className="tableheading "> Event Bookings List</h2> 
               <div className="row">
                <table className="table table-striped table=bordered" style={{fontSize:"20px"}}>
                    <thead>
                        <tr >
                            <th>BOOKING ID</th>
                            <th>DATE</th>
                            <th>CUSTOMER NAME</th>
                            <th>CUSTOMER PHONE NO</th>
                            <th>NO OF PARTICIPANTS</th>
                            <th>BOOKING TYPE</th>
                            <th>BOOKING PACKAGE</th>
                            <th>TIME IN</th>
                            <th>TIME OUT</th>                                                 
                        </tr>
                    </thead>

                    <tbody>
                        {
                            
                            this.state.bookings.map(
                                booking =>
                                <tr key= {booking.booking_Id}>
                                    <td> {booking.booking_Id} </td>
                                    <td> {booking.date} </td>
                                    <td> {booking.cus_Name} </td>
                                    <td> {booking.cus_Phone_No} </td>
                                    <td> {booking.num_Participants} </td>
                                    <td> {booking.booking_Type} </td>
                                    <td> {booking.booking_Package} </td>
                                    <td> {booking.time_In} </td>
                                    <td> {booking.time_Out} </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
              </div> 
            </div>
        );
    }
}

export default GenerateEventBookingIT19067148;