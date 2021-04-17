import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faFacebookF,faWhatsapp,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Footer.css'


const Footer = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4" >
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4" style={{marginLeft:"5px"}}>
                        <h5 className="title">Follow us</h5>

                        < FontAwesomeIcon id="change" icon={faFacebookF} style={{marginRight:"20px"}} size="2x"/>
                        < FontAwesomeIcon id="change" icon={faFacebookMessenger} style={{marginRight:"20px"}} size="2x" />
                        < FontAwesomeIcon id="change1" icon={faWhatsapp} size="2x" />

                    </MDBCol>

                    <MDBCol md="3" >
                        <h5 className="title">Contact Us</h5>
                        <ul style={{color:"gray"}}>
                            <li className="list-unstyled">
                                <FontAwesomeIcon icon={faEnvelope} />
                              <span> villaacresgreen@gmail.com</span>
                            </li>
                            <li className="list-unstyled">
                                <FontAwesomeIcon icon={faPhone} />
                                <span> +94777902808</span>

                            </li>

                        </ul>
                    </MDBCol>


                    <MDBCol md="3">
                        <h5 className="title">Links</h5>
                        <ul >
                            <li className="list-unstyled">
                                <a href="/service" style={{color:"gray"}}>Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/terms" style={{color:"gray"}}>Terms and Conditions</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/about-us" style={{color:"gray"}}>About Us</a>
                            </li>
                        </ul>
                    </MDBCol>



                    <MDBCol md="1">
                        <h5 className="title">Location</h5>
                        <ul style={{color:"gray"}}>
                            <li className="list-unstyled">
                                <a href="/map" style={{color:"gray"}}>Map</a>
                            </li>

                        </ul>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <label>Villa Acres Green</label>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;