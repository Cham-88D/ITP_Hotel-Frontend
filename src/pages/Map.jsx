import React from 'react';
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
<script type='text/javascript'
    src='https://embedmaps.com/google-maps-authorization/script.js?id=971e81bee3e51c05e53586a0536ec2f2d86afd28'/>

function MapPage() {
    return (
        <div>
            <Navigation/>
        <div style={{marginTop:"50px",marginBottom:"0px"}}>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe width="1810" height="715" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=541&amp;height=284&amp;hl=en&amp;q=villa%20acres%20Galle+()&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>

        </div>
            <Footer/>
      </div>

    );
}

export default MapPage;
