import React from 'react';
import { MDBCard, MDBCardBody, MDBCol} from "mdbreact";
import AuthService from "../adapters/AuthService";
import {useHistory} from "react-router";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";


function UserAccount() {
    const user = AuthService.getCurrentUser();
    const history= useHistory();
    if(user === null)
    {
        history.push("/login");
    }
    else
    {
        let role='';
        user["roles"].map(result => {
            role = result
        return role}
        );

        if (role !== 'user') {

            history.push("/");
        }
    }


    return (
        <div>
            <Navigation/>
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardBody>

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
            <Footer/>
        </div>
    );
}
export default UserAccount;