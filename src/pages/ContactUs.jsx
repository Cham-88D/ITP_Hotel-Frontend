import React from 'react';
import '../App.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";
import '../styles/Contact.css'


function ContactUs() {
  return (
      <MDBCol style={{ maxWidth: "80rem" ,marginTop:"170px",marginLeft:"130px",marginBottom:"200px"}}>
        <MDBCard className="striped-border" >

          <MDBCardBody>
            <MDBCardTitle className='font-weight-bolder text-center text-black-50'>Contact-Us</MDBCardTitle>
            <MDBContainer style={{marginTop:"40px"}}>
              <MDBRow>
                <MDBCol  className='font-weight-bolder text-center'>If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</MDBCol>
              </MDBRow>
              <MDBRow style={{marginTop:"50px"}}>
                <MDBCol>
                  <p className='font-weight-bolder text-center'>Address</p>
                </MDBCol>
                <MDBCol>
                  <p className='font-weight-bolder'>Rathmahera watha, Waulagala,Hikkaduwa</p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <p className='font-weight-bolder text-center'>Email</p>
                </MDBCol>
                <MDBCol>
                  <p className='font-weight-bolder'>villaacresgreen@gmail.com</p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <p className='font-weight-bolder text-center'>Facebook</p>
                </MDBCol>
                <MDBCol>
                  <p className='font-weight-bolder'>https://www.facebook.com/VILLA-ACRES-GREEN-1538777509690465/</p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <p className='font-weight-bolder text-center'>Telephone</p>
                </MDBCol>
                <MDBCol>
                  <p className='font-weight-bolder'>+94777902808</p>
                </MDBCol>
              </MDBRow>
              </MDBContainer>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  );
}
export default ContactUs;