import React from 'react';
import '../App.css';
import {
  MDBCard,
  MDBCardBody, MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";
import '../styles/Contact.css'
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";


function ContactUs() {
  return (
      <div>
        <Navigation/>
      <MDBCol style={{ maxWidth: "800px" ,marginTop:"170px",marginLeft:"390px",marginBottom:"200px" }}>
        <MDBCard className="striped-border" >

          <MDBCardBody style={{height:"700px"}}>
            <MDBCardTitle className='font-weight-bolder text-center text-black-50'>Contact-Us</MDBCardTitle>
            <MDBContainer style={{marginTop:"20px"}}>
              <MDBRow>
                <MDBCol  className='font-weight-bolder text-center'>
                  <MDBCardImage  className="img-fluid h-75 w-75" style={{marginLeft:"100px"}} src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                </MDBCol>
              </MDBRow>
              <MDBRow style={{marginTop:"30px"}}>
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
        <Footer/>
        </div>

  );
}
export default ContactUs;