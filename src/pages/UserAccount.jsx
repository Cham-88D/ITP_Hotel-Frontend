import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol} from "mdbreact";
import AuthService from "../adapters/AuthService";
import {useHistory} from "react-router";


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

            history.push("/login");
        }
    }


    return (
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}
export default UserAccount;