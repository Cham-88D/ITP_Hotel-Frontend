import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router';

import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import { isValidUsername } from "../util";
import AuthService from "../../adapters/AuthService";

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            localNotification: null,
            notificationType: null,
            username: "",
            password: "",
            usernameError: null,
            isSignInSuccess: false
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.resetFrom = this.resetFrom.bind(this);
        this.submit = this.submit.bind(this);
        this.checkForValidUsername = this.checkForValidUsername.bind(this);
    }

    checkForValidUsername(value) {
        if (!isValidUsername(value)) {
            this.setState({
                ...this.state,
                usernameError: "Username is invalid, no special charactors allowed!"
            })
        }
    }

    submit() {
        const { username, password } = this.state;
        this.setState({
            ...this.state,
            isLoading: true,
            isSignInSuccess: false,
        })

        AuthService.signIn({ username, password }).then((res) => {
            if (res.data.username !== null && res.data.username !== undefined) {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    isSignInSuccess: true,
                })
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("id", res.data.id);
                localStorage.setItem("role", res.data.role);
            } else {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    localNotification: res.data,
                    notificationType: ALERT_TYPES.ERROR
                })
            }


        }).catch(() => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })

    }

    onChangeUsername(field) {
        this.setState({
            ...this.state,
            ...field,
            usernameError: null,
        })
    }

    onChangeFormFeild(field) {
        this.setState({
            ...this.state,
            ...field
        })
    }

    resetFrom() {
        this.setState({
            ...this.state,
            username: "",
            password: "",
            usernameError: null
        })
    }

    render() {
        const { isLoading, localNotification, notificationType,  username, password, isSignInSuccess, usernameError } = this.state;

        if (isSignInSuccess) {
            return <Redirect to="/beverages" />
        }

        return (
            <Fragment>
                {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                {isLoading ? (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000}
                    />
                ) : (
                    <Fragment>
                        <form>
                            <div className="form-group">
                                <label for="beverage type">Username</label>
                                <input type="text" placeholder="username" name="username" className="form-control"
                                    value={username} onChange={(event) => { this.onChangeUsername({ username: event.target.value }) }} onBlur={(event) => { this.checkForValidUsername(event.target.value) }} />
                                {usernameError !== null && (
                                    <span style={{ color: "red" }}>{usernameError}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label for="beverage type">Password</label>
                                <input type="password" placeholder="password" name="username" className="form-control"
                                    value={password} onChange={(event) => { this.onChangeFormFeild({ password: event.target.value }) }} />
                            </div>
                        </form>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <div style={{display:"flex",justifyContent:"flex-start",width:"10%"}}>
                                <button className="btn btn-success" style={{ background: "#bd9660" }} onClick={this.submit} disabled={username === "" || password === "" || usernameError !== null}>Sign In</button>
                            </div>
                            <div style={{display:"flex",justifyContent:"flex-start",width:"10%"}}>
                                <button className="btn btn-danger" onClick={this.resetFrom} >Reset</button>
                            </div>

                        </div>

                    </Fragment>
                )}
            </Fragment>
        )
    }
}

export default SignIn;