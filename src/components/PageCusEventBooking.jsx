import React, { Component } from 'react';
import './Event.css';

class PageCusEventBooking extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand">Event booking Management</a></div> 
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

                        </ul>

                    </div>
                    </nav>

               </header> 
               <div className="container">
                        <div id="EventBookingPage2" >
                            <p>Welcome to the Event Booking of Villa Acres Green</p>
                        </div>
                    
            </div>
            </div>
        );
    }
}

export default PageCusEventBooking;