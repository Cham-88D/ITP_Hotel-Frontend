import React, { Component } from "react";

import Loader from "react-loader-spinner";
import Alert from "../alert";
import SignIn from "./signIn";
import SignUp from "./signUp";
import AUTH_TYPE from "../../constants/AuthType";

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            localNotification: null,
            notificationType: null,
            user: null,
            authType: AUTH_TYPE.SIGNIN
        }

        this.onClickAuthType = this.onClickAuthType.bind(this);
    }

    onClickAuthType(type) {
        this.setState({
            ...this.state,
            authType: type
        })
    }

    render() {
        const { isLoading, localNotification, notificationType, authType } = this.state;

        return (
            <div className="container">
                <div className="row">
                    {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                    {isLoading ? (<Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000}
                    />) : (
                        <div className="card" style={{ width: "100%", margin: "auto", marginTop: "100px" }}>
                            <div style={{margin:"20px"}}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ width: "25%", textAlign: "center" }}>
                                        {authType === AUTH_TYPE.SIGNIN ? (
                                            <span style={{ fontSize: "20px", fontWeight: "800", color: "rgb(250, 184, 77)" }} onClick={() => { this.onClickAuthType(AUTH_TYPE.SIGNIN) }}>Sign In</span>
                                        ) : (<span style={{ fontSize: "20px", fontWeight: "800" }} onClick={() => { this.onClickAuthType(AUTH_TYPE.SIGNIN) }}>Sign In</span>)}

                                    </div>
                                    <div style={{ width: "25%", textAlign: "center" }}>
                                        {authType === AUTH_TYPE.SIGNUP ? (
                                            <span style={{ fontSize: "20px", fontWeight: "800", color: "rgb(250, 184, 77)" }} onClick={() => { this.onClickAuthType(AUTH_TYPE.SIGNUP) }}>Sign Up</span>
                                        ) : (
                                            <span style={{ fontSize: "20px", fontWeight: "800" }} onClick={() => { this.onClickAuthType(AUTH_TYPE.SIGNUP) }}>Sign Up</span>
                                        )}
                                    </div>
                                </div>
                                <div style={{ marginLeft: "50px", marginRight: "50px", marginTop: "20px" }}>
                                    {authType === AUTH_TYPE.SIGNIN ? (
                                        <SignIn />
                                    ) : (
                                        <SignUp />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Index;