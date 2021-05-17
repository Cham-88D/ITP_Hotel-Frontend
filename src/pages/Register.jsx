import React, {useState} from 'react';
import {
    MDBBtn,
    MDBCardImage,
    MDBCol,
    MDBRow,
    MDBContainer, MDBNotification, MDBLink
} from 'mdbreact';
import {useHistory} from "react-router";
import { useFormik } from 'formik';
import a from  "../images/log.jpg";
import * as Yup from 'yup';
import AuthService from "../adapters/AuthService";





const RegisterForm = () => {

    const [msg, setMsg] = useState("");
    const [show, setShow] = useState(false);
    const onClose = () =>setShow(false);
    const remove = () =>setMsg("");
    const history= useHistory();
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes();
    const x = AuthService.getCurrentUser();

    if (x  !== null) {
        history.push("/");
    }

    const formik = useFormik({
            initialValues: {
                userName: '',
                password: '',
                email: '',
                passwordConfirmation: '',
                message:  '',
                roles: ''

            },
            validationSchema: Yup.object({
                userName: Yup.string()
                    .min(5,"Minimum 5 characters need")
                    .max(15,"Input 15 characters or below")
                    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                    .required('Required'),
                email:  Yup.string().email('Invalid email').required('Required'),
                password: Yup.string()
                    .required('Required')
                     .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    ),
                passwordConfirmation: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
                roles: Yup.string()
                    .required('Required')


            }),
            onSubmit: values => {
                AuthService.register(values.userName,values.email,values.password,values.roles).then(
                    () => {
                        history.push("/login");
                        window.location.reload();
                    } ,error => {
                        const resMessage =
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString();
                        setMsg(resMessage)
                    });
            }

        },

    )


    return (

        <MDBContainer fluid style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            <MDBRow>
                <MDBCardImage style={{width:"1000px",height:"730px"}} src={a} waves/>
                <MDBCol md="4" >

                    { msg !=='' && show ?
                        <MDBNotification
                            show
                            fade
                            title="New Message"
                            message={msg}
                            className="warm-flame-gradient"
                            text={time}
                            style={{marginLeft:"200px"}}
                            onClick={onClose && remove}
                        /> : null }

                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md={11} >
                                <form style={{marginTop:"120px",marginLeft:"40px"}} onSubmit={formik.handleSubmit} >
                                    <p className="h4 text-center mb-4 black-text font-weight-bold">Register</p>

                                    <br />
                                    <label htmlFor="UserName" className="black-text font-weight-bold">
                                        User Name
                                    </label>
                                    <input  className="form-control font-weight-bold " style={{backgroundColor:"#fafaff",borderWidth:"2px"}}
                                            id="userName"
                                            name="userName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.userName}

                                    />
                                    {formik.touched.userName && formik.errors.userName ? (
                                        <div style={{color:"red"}}>{formik.errors.userName}</div>
                                    ) : null}

                                    <br />

                                    <label htmlFor="Email" className="black-text font-weight-bold" >
                                        Email
                                    </label>
                                    <input  className="form-control font-weight-bold " style={{backgroundColor:"#fafaff",borderWidth:"2px"}}
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}/>
                                    {formik.touched.email && formik.errors.email ? (
                                        <div style={{color:"red"}}>{formik.errors.email}</div>
                                    ) : null}

                                    <br/>

                                    <label htmlFor="Password" className="black-text font-weight-bold" >
                                        Password
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

                                   <br/>

                                    <label htmlFor="Password" className="black-text font-weight-bold" >
                                        Password Confirmation
                                </label>

                                <input  className="form-control font-weight-bold " style={{backgroundColor:"#fafaff",borderWidth:"2px"}}
                                        id="passwordConfirmation"
                                        name="passwordConfirmation"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.passwordConfirmation}/>
                                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation? (
                                    <div style={{color:"red"}}>{formik.errors.passwordConfirmation}</div>
                                ) : null}

                                    <br/>

                                    <label htmlFor="roles" className="black-text font-weight-bold">
                                        Role
                                    </label>
                                    <select
                                        name="roles"
                                        value={formik.values.roles}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        style={{display: 'block'}}
                                    >
                                        <option value="" label="Select a role"/>
                                        <option value="user" label="user"/>
                                        <option value="HRmanager" label="HR Manager"/>
                                    </select>
                                    {formik.errors.roles &&
                                    formik.touched.roles &&
                                    <div className="input-feedback">
                                        {formik.errors.roles}
                                    </div>}
                                    <div className="text-center mt-4">
                                        <MDBBtn color="orange" type="submit" onClick={() => setShow(true)}>
                                           Register
                                        </MDBBtn>
                                    </div>
                                </form>
                                <MDBLink to="/">Back to Home</MDBLink>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
};



export default RegisterForm ;