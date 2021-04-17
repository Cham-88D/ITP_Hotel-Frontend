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

   <div>
       <CarouselPage/>

       <MDBContainer fluid style={{marginTop:"100px",marginBottom:"100px"}}>

           <MDBRow id="row1" style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",marginBottom:"9px"}}>
               <MDBCol>
                   <h3 className="h3-responsive display-4" style={{textAlign:"center"}}>Rooms</h3>
               </MDBCol>
               <MDBCol>
               <p className="lead font-italic text-justify ">
                   This is a simple hero unit, a simple Jumbotron-style component for
                   calling extra attention to featured content or information.
                   This is a simple hero unit, a simple Jumbotron-style component for
                   calling extra attention to featured content or information.
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



       <MDBContainer id="row2" fluid style={{marginTop:"200px",marginBottom:"100px",    boxShadow:" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
           <MDBRow>
               <MDBCol md="7">
                   <MDBCardImage id="img1" className="img-fluid" src={d} waves />
               </MDBCol>
               <MDBCol >
                   <h2 className="h1 display-3 text-center">Hello, world!</h2>
                   <p className="lead">
                       This is a simple hero unit, a simple Jumbotron-style component for
                       calling extra attention to featured content or information.
                       This is a simple hero unit, a simple Jumbotron-style component for
                       calling extra attention to featured content or information.
                   </p>
                   <MDBBtn color="orange">Find More</MDBBtn>
           </MDBCol>

           </MDBRow>
           <br/>
           </MDBContainer>



       <MDBContainer fluid style={{marginTop:"80px",marginBottom:"100px"}}>
           <MDBRow>
               <MDBCol>
                   <h3 className="h3-responsive display-4" style={{textAlign:"center"}}>Events</h3>
                   <p className="lead" style={{textAlign:"center"}}>
                       This is a simple hero unit, a simple Jumbotron-style component for
                       calling extra attention to featured content or information.
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
                           Some quick example text to build on the card title and make up
                           the bulk of the card's content.
                       </MDBCardText>
                   </MDBCardBody>
               </MDBCard>

               <MDBCard>
                   <MDBCardImage src={f} alt="MDBCard image cap" top hover
                                 overlay="white-slight" />
                   <MDBCardBody>
                       <MDBCardTitle tag="h5" className="font-weight-bold text-center">Parties</MDBCardTitle>
                       <MDBCardText>
                           Some quick example text to build on the card title and make up
                           the bulk of the card's content.
                       </MDBCardText>
                   </MDBCardBody>
               </MDBCard>

               <MDBCard>
                   <MDBCardImage src={g} alt="MDBCard image cap" top hover
                                 overlay="white-slight" />
                   <MDBCardBody>
                       <MDBCardTitle tag="h5" className="font-weight-bold text-center">Get Togethers</MDBCardTitle>
                       <MDBCardText>
                           Some quick example text to build on the card title and make up
                           the bulk of the card's content.
                       </MDBCardText>
                   </MDBCardBody>
               </MDBCard>
           </MDBCardGroup>
       </MDBContainer>









   </div>



  );
}

export default Home;
