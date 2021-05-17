import React, { useEffect, useState} from 'react';
import SideNav from "../components/sideNav";
import {
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBContainer, MDBNotification, MDBCard, MDBCardBody
} from 'mdbreact';
import {useHistory, useParams} from "react-router";
import AuthService from "../adapters/AuthService";
import EmployeeService from "../adapters/EmployeeService";
import {useFormik} from "formik";
import * as Yup from "yup";

function auth() {

    let user = AuthService.getCurrentUser();
    let role='';
    if(user !== null){
        user["roles"].map(result => {
                role = result
                return role;
            }
        );}
    return role;
}



const UpdateEmployee= () => {
    const {id} =  useParams();
    const history = useHistory();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [add, setAdd] = useState('');
    const [phn, setPhn] = useState('');
    const [NIC, setNIC] = useState('');
    const [message, setMessage] = useState('');
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes();
    const [show, setShow] = useState(false);
    const onClose = () => { setShow(false); history.push('/employee');}

    const cancel = () => {
        history.push('/employee');
    }

    if (auth() !== 'HRmanager') {
        history.push("/");
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setFname(res.data.fName);
            setLname(res.data.lName);
            setAdd(res.data.address);
            setNIC(res.data.nic);
            setPhn(res.data.phone);
        })
            .catch(error=>{
                console.log(error)
            })
    }, )

    const formik = useFormik({
        enableReinitialize:true,
            initialValues: {
                fName: fname,
                lName: lname,
                address:add,
                phone: phn,
                nic: NIC,
            },

            validationSchema: Yup.object({
                fName: Yup.string()
                    .min(3, "?")
                    .max(25, "Input 25 characters or below")
                    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
                lName: Yup.string()
                    .min(3, "?")
                    .max(25, "Input 15 characters or below")
                    .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
                address: Yup.string()
                    .min(10, "Input must be at least 10 characters")
                    .max(30, "Input 15 characters or below"),
                phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
                    .min(10)
                    .max(10),
                nic: Yup.string()
                    .min(9)
                    .max(12)
            }),
            onSubmit: values => {
                EmployeeService.updateEmployee(values, id).then( res => {
                    setMessage(res.data.message);
                   history.push('/employee');
                });
            }

        },
    )


    return (

        <div>
            <SideNav/>
            {show ?
                <MDBNotification
                    show
                    fade
                    title="New Message"
                    message={message}
                    className="warm-flame-gradient"
                    text={time}
                    style={{marginLeft: "1180px"}}
                    onClick={onClose}
                /> : null}
            <MDBCol>
                <MDBCard style={{width: "50rem", marginLeft: "350px", marginTop: "100px", marginBottom: "100px"}}>
                    <MDBCardBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md={11}>
                                    <form style={{marginLeft: "40px"}} onSubmit={formik.handleSubmit}>
                                        <p className="h4 text-center mb-4 black-text font-weight-bold">Update Employee</p>
                                        <br/>

                                        <label htmlFor="fName" className="black-text font-weight-bold">
                                            First Name
                                        </label>
                                        <input className="form-control font-weight-bold "
                                               style={{backgroundColor: "#fafaff", borderWidth: "2px"}}
                                               id="fName"
                                               name="fName"
                                               type="text"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.fName}

                                        />
                                        {formik.touched.fName && formik.errors.fName ? (
                                            <div style={{color: "red"}}>{formik.errors.fName}</div>
                                        ) : null}

                                        <br/>

                                        <label htmlFor="lName" className="black-text font-weight-bold">
                                            Last Name
                                        </label>
                                        <input className="form-control font-weight-bold "
                                               style={{backgroundColor: "#fafaff", borderWidth: "2px"}}
                                               id="lName"
                                               name="lName"
                                               type="text"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.lName}/>
                                        {formik.touched.lName && formik.errors.lName ? (
                                            <div style={{color: "red"}}>{formik.errors.lName}</div>
                                        ) : null}

                                        <br/>

                                        <label htmlFor="address" className="black-text font-weight-bold">
                                            Address
                                        </label>
                                        <input className="form-control font-weight-bold "
                                               style={{backgroundColor: "#fafaff", borderWidth: "2px"}}
                                               id="address"
                                               name="address"
                                               type="text"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.address}/>
                                        {formik.touched.address && formik.errors.address ? (
                                            <div style={{color: "red"}}>{formik.errors.address}</div>
                                        ) : null}

                                        <br/>

                                        <label htmlFor="phone" className="black-text font-weight-bold">
                                            Phone Number
                                        </label>
                                        <input className="form-control font-weight-bold "
                                               style={{backgroundColor: "#fafaff", borderWidth: "2px"}}
                                               id="phone"
                                               name="phone"
                                               type="text"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.phone}/>
                                        {formik.touched.phone && formik.errors.phone ? (
                                            <div style={{color: "red"}}>{formik.errors.phone}</div>
                                        ) : null}

                                        <br/>

                                        <label htmlFor="nic" className="black-text font-weight-bold">
                                            NIC
                                        </label>
                                        <input className="form-control font-weight-bold "
                                               style={{backgroundColor: "#fafaff", borderWidth: "2px"}}
                                               id="nic"
                                               name="nic"
                                               type="tel"
                                               onChange={formik.handleChange}
                                               onBlur={formik.handleBlur}
                                               value={formik.values.nic}/>
                                        {formik.touched.nic && formik.errors.nic ? (
                                            <div style={{color: "red"}}>{formik.errors.nic}</div>
                                        ) : null}




                                        <div className="text-center mt-4">
                                            <MDBBtn color="success" type="submit">
                                                Update
                                            </MDBBtn>
                                            <MDBBtn color="danger" onClick={cancel}>
                                                Cancel
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    );

}


export default UpdateEmployee;