import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import EventBookingsService from '../services/EventBookingsService';

class ListEventBookingsComponent extends Component {
    constructor(props){
        super(props)

        this.state={
                bookings: [],
                searchId:''
        }
        this.addEventBooking = this.addEventBooking.bind(this);
        this.addEventModificationRequest = this.addEventModificationRequest.bind(this);
        this.editEventBooking = this.editEventBooking.bind(this);
        this.deleteEventBooking = this.deleteEventBooking.bind(this);
        this.GenerateReport = this.GenerateReport.bind(this);
    

    }

    deleteEventBooking(Booking_Id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            EventBookingsService.deleteEventBooking(Booking_Id).then( res => {
            this.setState({bookings: this.state.bookings.filter( booking => booking.booking_Id !== Booking_Id)});
            confirmtext="You Succesfully deleted attendance";
        }) ;
        }else{
         confirmtext="You presed cansel Try again";
        }
    }

    deleteOldEventBooking(){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            EventBookingsService.deleteOldEventBooking().then(res=>{
          }) ;
          confirmtext="You Succesfully deleted attendance";

        }else{
           confirmtext="You presed cansel Try again";
        }
          
   }

    viewEventBooking(Booking_Id){
        this.props.history.push(`/view-event-booking/${Booking_Id}`);
    }

    GenerateReport(){
        this.props.history.push('/event-report');
    }

    editEventBooking(Booking_Id){
        this.props.history.push(`/update-event-booking/${Booking_Id}`);
    }

    searchEventBookingId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }
    
    componentDidMount(){
        EventBookingsService.getEventBookings().then((res) => {


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
        let filterEventBookingId = this.state.bookings.filter((
            booking)=>{
                return booking.booking_Type.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        return (
            <div>
                 <div class="form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Event Booking Type" value={this.state.searchId} onChange={this.searchEventBookingId.bind(this)} />
                </div>
               <h2 className="tableheading "> Event Bookings List</h2> 
               <div className="row">
                <button className="btn btn-primary" style={{background:"rgb(197,161,60)"}} onClick={this.addEventBooking}>Add Event Booking</button>
                <button style={{marginLeft:"20px"}} className="btn-danger" onClick={this.GenerateReport} type='submit'>Generate PDF</button>
               </div>
               <div className="row">
                <table className="table table-striped table=bordered">
                    <thead>
                        <tr className="theartr">
                            <th>BOOKING ID</th>
                            <th>DATE</th>
                            <th>CUSTOMER NAME</th>
                            <th>CUSTOMER PHONE NO</th>
                            <th>NO OF PARTICIPANTS</th>
                            <th>BOOKING TYPE</th>
                            <th>BOOKING PACKAGE</th>
                            <th>TIME IN</th>
                            <th>TIME OUT</th>
                            <th>ACTION</th>                                                    
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filterEventBookingId.map(
                            //this.state.bookings.map(
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
                                    <td>
                                    <Container>
                                       <Row md={3}>
                                        <Col><button style={{background:"rgb(197,161,60)0%"}} onClick = { () => this.editEventBooking(booking.booking_Id)} className="btn btn-info">UPDATE</button></Col>
                                        <Col><button style={{marginLeft:"40px"}} onClick = { () => this.deleteEventBooking(booking.booking_Id)} className="btn btn-danger">DELETE</button></Col>
                                        <Col><button style={{background:"rgb(197,161,60)",marginLeft:"75px"}} onClick = { () => this.viewEventBooking(booking.booking_Id)} className="btn btn-success">VIEW</button></Col>
                                        </Row>
                                    </Container>
                                    </td>
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

export default ListEventBookingsComponent;