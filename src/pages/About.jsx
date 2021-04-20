import React from 'react';
import '../App.css';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";

function About() {
            return (
                <MDBCol style={{ maxWidth: "800px" ,marginTop:"170px",marginLeft:"390px",marginBottom:"200px" }}>
                    <MDBCard >

                        <MDBCardBody style={{height:"700px"}}>
                            <MDBCardTitle className='font-weight-bolder text-center text-black-50'>About-Us</MDBCardTitle>
                            <MDBContainer style={{marginTop:"20px"}}>
                                <MDBRow style={{marginTop:"30px"}}>
                                    <MDBCol>
                                        <p className='font-weight-bolder text-center'> Villa Acres Green is an eye-catching place in Hikkaduwa which is more popular for the ultimate relaxation which can be experienced by the place itself. The proprietor, Mr.Prasanna Gunawardane who is a professional architect, has designed this villa with his 25 years of experience in the field of Architecture. The villa is built in a 5 Acre of land cultivated with Cinnamon, Coconut and Vegetables. And also it has a beautifully landscaped garden, natural pond, pool and a calm environment. The villa is near to the Koggala Airport and 7 minutes distance to the famous Hikkaduwa Beach which attracts more tourist customers</p>
                                        </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>


    );
}
export default About;