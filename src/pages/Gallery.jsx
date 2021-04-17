import React from 'react';
import {
    MDBCard,
    MDBCardGroup,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdbreact";

import d from  "../images/photo4.jpg";
import e from  "../images/photo19.jpg";
import f from "../images/photo26.jpg";
import g from  "../images/photo25.jpg";
import h from  "../images/photo24.jpg";
import i from  "../images/photo23.jpg";
import j from  "../images/photo22.jpg";
import k from  "../images/photo21.jpg";
import l from  "../images/photo20.jpg";
function Gallery() {
    return (
        <MDBContainer fluid style={{marginTop:"80px",marginBottom:"100px"}}>
            <MDBRow>
                <MDBCol>
                    <h3 className="h3-responsive display-4" style={{textAlign:"center"}}>Gallery</h3>
                </MDBCol>
            </MDBRow>
            <br/>

            <MDBCardGroup style={{marginTop:"60px"}}>
                <MDBCard>
                    <MDBCardImage src={d} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={e} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={f} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />

                </MDBCard>

            </MDBCardGroup>



            <MDBCardGroup style={{marginTop:"60px"}}>
                <MDBCard>
                    <MDBCardImage src={g} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={h} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={i} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />

                </MDBCard>

            </MDBCardGroup>



            <MDBCardGroup style={{marginTop:"60px"}}>
                <MDBCard>
                    <MDBCardImage src={j} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={k} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src={l} alt="MDBCard image cap" top hover
                                  overlay="white-slight" />

                </MDBCard>

            </MDBCardGroup>


        </MDBContainer>

    );
}
export default Gallery;