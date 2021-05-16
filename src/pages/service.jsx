import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow} from "mdbreact";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";


function Service() {
    return (
        <div>
            <Navigation/>
        <MDBCol style={{ maxWidth: "80rem" ,marginTop:"100px",marginLeft:"130px",marginBottom:"200px"}}>
            <MDBCard >

                <MDBCardBody>
                    <MDBCardTitle className='font-weight-bolder text-center text-black'>Services</MDBCardTitle>
                    <MDBRow >
                        <MDBCol md="4">
                           <p className='font-weight-bolder text-black'> Free private parking is possible on site </p>
                            <uL>
                                <li>  Street parking </li>
                                <li>  Secured parking </li>
                            </uL>
                        </MDBCol>

                        <MDBCol style={{marginLeft:"60px"}}>
                            <p className='font-weight-bolder text-black'> Fun for everyone under one roof </p>
                            <uL>
                                <li> Flat-screen TV</li>
                                <li> Satellite channels</li>
                                <li>  DVD player</li>
                            </uL>
                        </MDBCol>

                        <MDBCol style={{marginLeft:"60px"}}>
                            <p className='font-weight-bolder text-black'> Food & Drink </p>
                            <uL>
                                <li> Fruits</li>
                                    <li>Grocery deliveries Additional charge</li>
                                        <li>Special diet menus (on request)</li>
                                            <li> Bar</li>
                                                <li> Room service</li>
                                                    <li>Restaurant</li>
                                                        <li>Minibar</li>
                                                            <li>Tea/Coffee maker</li>
                            </uL>
                        </MDBCol>


                    </MDBRow>


                    <br/>
                    <br/>

                    <MDBRow >
                        <MDBCol md="4">
                            <p className='font-weight-bolder text-black'> Room Amenities </p>
                            <uL>
                                <li>Socket near the bed</li>
                                    <li>Clothes rack</li>
                                        <li>Tile/marble floor</li>
                                            <li>Private entrance</li>
                                                <li>Fan</li>
                                                    <li>Iron</li>
                                                        <li>Air conditioning</li>
                            </uL>
                        </MDBCol>

                        <MDBCol style={{marginLeft:"60px"}}>
                            <p className='font-weight-bolder text-black'> Bathroom </p>
                            <uL>
                                <li>Toilet paper</li>
                                    <li>Towels</li>
                                        <li>idet</li>
                                            <li>Towels/sheets (extra fee)</li>
                                                <li>Additional toilet</li>
                                                    <li>Bath or shower</li>
                                                        <li>Private bathroom</li>
                                                            <li>Toilet</li>
                                                                <li>Free toiletries</li>
                                                                    <li>Hairdryer</li>
                                                                        <li>Shower</li>
                            </uL>
                        </MDBCol>
                        <MDBCol style={{marginLeft:"60px"}}>
                            <p className='font-weight-bolder text-black'> Living Area </p>
                            <uL>
                                <li> Dining area</li>
                                    <li>Seating Area</li>
                                        <li>Desk</li>
                            </uL>
                        </MDBCol>


                    </MDBRow>



                    <br/>
                    <br/>

                    <MDBRow >
                        <MDBCol md="4">
                            <p className='font-weight-bolder text-black'> Outdoors</p>
                            <uL>

                                <li> Outdoor furniture</li>
                                    <li> Outdoor dining area</li>
                                        <li>  Outdoor furniture</li>
                                            <li>  Terrace</li>
                                                <li>  Barbecue</li>
                                                    <li>  Private pool</li>
                                                        <li> BBQ facilities</li>
                                                            <li>  Terrace</li>
                                                                <li> Garden</li>
                            </uL>
                        </MDBCol>

                        <MDBCol style={{marginLeft:"60px"}}>
                            <p className='font-weight-bolder text-black'> Outdoor & View </p>
                            <uL>
                                <li> Landmark view</li>
                                    <li> Pool view</li>
                                        <li> Garden view</li>
                            </uL>
                        </MDBCol>


                        <MDBCol style={{marginLeft:"60px"}}>
                            <p className='font-weight-bolder text-black'>  Outdoor swimming pool </p>
                            <uL>
                                <li> Open all year</li>

                            </uL>
                        </MDBCol>
                    </MDBRow>



                </MDBCardBody>

            </MDBCard>
        </MDBCol>
            <Footer/>
        </div>
    );
}
export default Service;