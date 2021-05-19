import React, { Component } from 'react';
import './Reservation_IT19964010.css';
class CustomerReservationComponent_IT19964010 extends Component {
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

            <div classname="container">
            <br></br>

            <h2 className="mainh2">Villa Acress Green looks forward to meet your Reservation Needs!</h2>
            <h2 className="mainh2">Join us to spend your Holidays!</h2>
            <p className="mainp1">These rooms have been recently refurbished with AC and NON AC facilities and are fully ensuite with toilet, shower and bath and toileteries. Also available in the room is Tea and Coffee making Facilities, Flat Screen TV,  Free Wifi. Other refreshments available upon request.</p>
           
            <div id="ReservaionPage"></div>
            <div id="ReservaionPage2"></div>
            <div id="ReservaionPage3"></div>
            <div id="ReservaionPage"></div>
            
            </div>

            </div>
        );
    }
}

export default CustomerReservationComponent_IT19964010;