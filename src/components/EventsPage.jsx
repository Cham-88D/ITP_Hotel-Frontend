import React, { Component } from 'react';

class EventsPage extends Component {
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
               
                 <div className="container" style={{marginTop:30}} id="EventBookingPage">
                    <div className="row" id="events">
                            <div className="card col-md-10 offset-md-4 offset-md-1" style={{backgroundColor: "lightgrey"}}>
                    <h3 className="text-center" style={{color:"white"}}>EVENTS DETAILS</h3>
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

export default EventsPage;