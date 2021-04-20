import React from 'react';
import '../styles/Home.css'
import CarouselPage from "../components/Slide";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardGroup, MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";

import a from "../images/photo10.jpg";
import b from  "../images/photo11.jpg";
import c from  "../images/photo26.jpg";
import d from  "../images/photo12.jpg";
import e from  "../images/photo30.jpg";
import f from  "../images/photo31.jpg";
import g from  "../images/photo28.jpg";
function Home() {


  return (

   <div >
       <CarouselPage/>

       <MDBContainer id="row2" fluid style={{marginTop:"200px",marginBottom:"100px",    boxShadow:" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
           <MDBRow>
               <MDBCol md="7">
                   <MDBCardImage id="img1" className="img-fluid" src={d} waves />
               </MDBCol>
               <MDBCol >
                   <h2 className="h1 display-3 text-center">Welcome !</h2>
                   <p className="lead">
                       Located in Hikkaduwa, Villa Acres Green offers homely and comfortable accommodation with free WiFi access in its public areas. This self-catering property features an outdoor pool, beautifully-landscaped gardens and free parking on site.
                   </p>
                   <MDBBtn color="orange" href="/service">Find More</MDBBtn>
           </MDBCol>

           </MDBRow>
           <br/>
           </MDBContainer>


       <MDBContainer fluid style={{marginTop:"100px",marginBottom:"100px"}} >

           <MDBRow id="row1" style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",marginBottom:"9px"}}>
               <MDBCol>
                   <h3 className="h3-responsive display-4" style={{textAlign:"center"}}>Rooms</h3>
               </MDBCol>
               <MDBCol>
                   <p className="lead font-italic text-justify ">
                       Tastefully-furnished, spacious air-conditioned villas come with a dining area and a living room with flat-screen TV. The kitchen is equipped with a stove, fridge, a microwave, electric kettle and kitchenware. The en suite bathrooms include shower facility
                   </p>
               </MDBCol>
           </MDBRow>

           <MDBRow >
               <MDBCol md="4" >
                   <MDBCardImage src={a} alt="MDBCard image cap" top hover
                                 overlay="white-slight"/>
               </MDBCol>
               <MDBCol md="4">
                   <MDBCardImage src={b} alt="MDBCard image cap" top hover
                                 overlay="white-slight" style={{maxHeight:"600px",maxWidth:"600px"}}/>
               </MDBCol>
               <MDBCol md="4" >
                   <MDBCardImage  src={c} alt="MDBCard image cap" top hover
                                  overlay="white-slight" style={{maxHeight:"600px",maxWidth:"600px"}}/>
               </MDBCol>
           </MDBRow>

       </MDBContainer>






       <MDBContainer fluid style={{marginTop:"80px"}}>
           <MDBRow>
               <MDBCol>
                   <h3 className="h3-responsive display-4" style={{textAlign:"center"}}>Events</h3>
                   <p className="lead" style={{textAlign:"center"}}>

                   </p>
               </MDBCol>
           </MDBRow>
           <br/>
           <MDBCardGroup>
               <MDBCard>
                   <MDBCardImage src={e} alt="MDBCard image cap" top hover
                                 overlay="white-slight" />
                   <MDBCardBody>
                       <MDBCardTitle tag="h5" className="font-weight-bold text-center">Weddings</MDBCardTitle>
                       <MDBCardText>

                       </MDBCardText>
                   </MDBCardBody>
               </MDBCard>

               <MDBCard>
                   <MDBCardImage src={f} alt="MDBCard image cap" top hover
                                 overlay="white-slight" />
                   <MDBCardBody>
                       <MDBCardTitle tag="h5" className="font-weight-bold text-center">Parties</MDBCardTitle>
                       <MDBCardText>

                       </MDBCardText>
                   </MDBCardBody>
               </MDBCard>

               <MDBCard>
                   <MDBCardImage src={g} alt="MDBCard image cap" top hover
                                 overlay="white-slight" />
                   <MDBCardBody>
                       <MDBCardTitle tag="h5" className="font-weight-bold text-center">Get Togethers</MDBCardTitle>
                       <MDBCardText>

                       </MDBCardText>
                   </MDBCardBody>
               </MDBCard>
           </MDBCardGroup>
       </MDBContainer>


   </div>



  );
}

export default Home;
