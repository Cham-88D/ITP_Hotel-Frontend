import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";


function Service() {
    return (
        <MDBCol style={{ maxWidth: "80rem" ,marginTop:"100px",marginLeft:"130px",marginBottom:"200px"}}>
            <MDBCard >

                <MDBCardBody>
                    <MDBCardTitle className='font-weight-bolder text-center text-black'>Services</MDBCardTitle>

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}
export default Service;