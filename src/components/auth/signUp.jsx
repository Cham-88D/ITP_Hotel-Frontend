import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router';

import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import USER_ROLE from "../../constants/UserRole";
import { isValidUsername } from "../util";
import AuthService from "../../services/AuthService";

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            localNotification: null,
            notificationType: null,
            user: null,
            role: "",
            username: "",
            password: "",
            usernameError: null,
            signUpSuccess: false
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.checkForUniqueness = this.checkForUniqueness.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.resetFrom = this.resetFrom.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        const { role, username, password } = this.state;

        this.setState({
            ...this.state,
            isLoading: true,
        })
        AuthService.signUp({ role, username, password }).then((res) => {
            this.setState({
                ...this.state,
                isLoading: false,
                signUpSuccess: true
            })
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("userId", res.data.id);
        }).catch(() => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })
    }

    resetFrom() {
        this.setState({
            ...this.state,
            role: "",
            username: "",
            password: "",
            usernameError: null,
        })
    }

    onChangeFormFeild(field) {
        this.setState({
            ...this.state,
            ...field
        })
    }

    onChangeUsername(field) {
        this.setState({
            ...this.state,
            ...field,
            usernameError: null,
        })
    }

    checkForUniqueness(value) {
        if (!isValidUsername(value)) {
            this.setState({
                ...this.state,
                usernameError: "Username is invalid, no special charactors allowed!"
            })
        } else {
            this.setState({
                ...this.state,
                isLoading: true
            })
            AuthService.checkUserUniquenessExists(value).then((res) => {
                if (res.data) {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        usernameError: "Username already exists, use another username!",
                    })
                } else {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        usernameError: null
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
    }

    render() {
        const { isLoading, localNotification, notificationType, role, username, password, usernameError, signUpSuccess } = this.state;

        let userRoleOptions = USER_ROLE.map((item) => {
            return { name: item, value: item }
        })

        if (signUpSuccess) {
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
                        <form >
                            <div className="form-group">
                                <label for="beverage type">Username</label>
                                <input type="text" placeholder="username" name="username" className="form-control"
                                    value={username} onChange={(event) => { this.onChangeUsername({ username: event.target.value }) }} onBlur={(event) => { this.checkForUniqueness(event.target.value) }} />
                                {usernameError !== null && (
                                    <span style={{ color: "red" }}>{usernameError}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <label for="beverage type">Password</label>
                                <input type="password" placeholder="password" name="username" className="form-control"
                                    value={password} onChange={(event) => { this.onChangeFormFeild({ password: event.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <label for="beverage type">User Role</label>
                                <select class="form-control" value={role} onChange={(event) => { this.onChangeFormFeild({ role: event.target.value }) }}>
                                    <option selected>Choose...</option>
                                    {userRoleOptions.map((item, index) => {
                                        return (<option value={item.value} key={index}>{item.name}</option>)
                                    })}
                                </select>
                            </div>
                        </form>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "10%" }}>
                                <button className="btn btn-success" style={{ background: "#bd9660" }} onClick={this.submit} disabled={role === "" || username === "" || password === "" || usernameError !== null}>Sign Up</button>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "10%" }}>
                                <button className="btn btn-danger" onClick={this.resetFrom} >Reset</button>
                            </div>
                        </div>


                    </Fragment>

                )}
            </Fragment>
        )
    }
}

export default SignUp;