import React, {useState} from 'react';
import {
    MDBBtn,
    MDBCardImage,
    MDBCol,
    MDBRow,
    MDBContainer, MDBNotification, MDBLink
} from 'mdbreact';
import { useHistory} from "react-router";
import { useFormik } from 'formik';
import a from  "../images/log.jpg";
import * as Yup from 'yup';
import AuthService from "../adapters/AuthService";




const LoginForm = () => {

    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const onClose = () =>setShow(false);
    const history= useHistory();
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes();
    const x = AuthService.getCurrentUser();

    if (x !== null) {

        history.push("/");
    }



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            message:  '',


        },

    validationSchema: Yup.object({
             email: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),


        }),
        onSubmit: values => {
            AuthService.login(values.email,values.password).then(
                () => {
                        history.push("/");
                        window.location.reload();

                } ,error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                    setMessage(resMessage)
                });
            }

        },

    )


    return (

        <MDBContainer fluid style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            <MDBRow>
                <MDBCardImage style={{width:"1000px",height:"730px"}} src={a} waves/>
                <MDBCol md="4" >

                    { message !=='' && show ?
                        <MDBNotification
                            show
                            fade
                            title="New Message"
                            message={message}
                            className="warm-flame-gradient"
                            text={time}
                            style={{marginLeft:"200px"}}
                            onClick={onClose}
                        /> : null }

                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md={11} >
                                <form style={{marginTop:"150px",marginLeft:"40px"}} onSubmit={formik.handleSubmit} >
                                    <p className="h4 text-center mb-4 black-text font-weight-bold">Login</p>
                                    <br />
                                    <label htmlFor="email" className="black-text font-weight-bold">
                                       Email
                                    </label>
                                    <input  className="form-control font-weight-bold " style={{backgroundColor:"#fafaff",borderWidth:"2px"}}
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}

                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div style={{color:"red"}}>{formik.errors.email}</div>
                                    ) : null}

                                    <br />

                                    <label htmlFor="Password" className="black-text font-weight-bold" >
                                        Your password
                                    </label>
                                    <input  className="form-control font-weight-bold " style={{backgroundColor:"#fafaff",borderWidth:"2px"}}
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}/>
                                    {formik.touched.password && formik.errors.password ? (
                                        <div style={{color:"red"}}>{formik.errors.password}</div>
                                    ) : null}
                                    <div className="text-center mt-4">
                                        <MDBBtn color="orange" type="submit"  onClick={() => setShow(true)} >
                                            log-In
                                        </MDBBtn>
                                    </div>
                                </form>
                                <MDBLink to="/register">Not Registered </MDBLink>
                                <MDBLink to="/">Back to Home</MDBLink>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
};



export default LoginForm ;