import React, { Component } from "react";

import { Col, Container, Form, Button } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import PolicyService from "../../adapters/policyService";
import { isValidName,isValidDescription } from "../shared/utils";

class Policy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            discount: "",
            min_bill_amount: "",

            nameError: null,
            desError: null,
            discountError: null,
            minBillAmountError: null,

            isLoading: false,
            localNotification: null,
            notificationType: null
        }

        this.onChangeFormFeilds = this.onChangeFormFeilds.bind(this);
        this.savePolicy = this.savePolicy.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.resetFormErrors = this.resetFormErrors.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.deletePolicy = this.deletePolicy.bind(this);
        this.onclickDeleteButton = this.onclickDeleteButton.bind(this);
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            isLoading: true
        })
        PolicyService.getAll().then((res)=>{
            this.setState({
                ...this.state,
                isLoading:false,
                policies:res.data
            })
        }).catch(()=>{
            this.setState({
                ...this.state,
                isLoading:false,
                localNotification:"Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })
    }

    onclickDeleteButton(id){
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this policy',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.deletePolicy(id)
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }

    deletePolicy(id){
        this.setState({
            ...this.state,
            isLoading: true,
        })
        PolicyService.delete(id).then((res)=>{
            this.setState({
                ...this.state,
                localNotification:"Policy Delete Successfully!",
                notificationType: ALERT_TYPES.SUCCESS
            })
            PolicyService.getAll().then((res2)=>{
                this.setState({
                    ...this.state,
                    isLoading:false,
                    policies: res2.data
                })
            }).catch(()=>{
                this.setState({
                    ...this.state,
                    isLoading:false,
                    localNotification:"Something went wrong!",
                    notificationType: ALERT_TYPES.ERROR
                })
            })
        }).catch(()=>{
            this.setState({
                ...this.state,
                isLoading:false,
                localNotification:"Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })
    }

    resetForm(e) {
        e.preventDefault()
        this.setState({
            ...this.state,
            name: "",
            description: "",
            discount: "",
            min_bill_amount: "",

            nameError: null,
            desError: null,
            discountError: null,
            minBillAmountError: null,
        })
    }

    validateForm() {
        const { name, description, discount, min_bill_amount } = this.state;
        let nameError = null;
        let desError = null;
        let minBillAmountError = null;
        let discountError = null;

        let hasErrors = false
        if (name === ""||name===null||name===undefined || !isValidName(name)) {
            nameError="Name is required and can not contain numbers";
            hasErrors = true
        }
        if (description === ""||description===null||description===undefined || !isValidDescription(description)) {
            desError= "Description is required and can not contain numbers"
            hasErrors = true

        }
        if (min_bill_amount === "" || min_bill_amount < 0 || isNaN(min_bill_amount) || min_bill_amount===null || min_bill_amount === undefined) {
            minBillAmountError= "Bill amount should be a number greater than 0"
            hasErrors = true
        }
        if (discount === "" || discount < 0 || discount > 100 || isNaN(discount) || discount=== null || discount===undefined) {
            discountError = "Discount should be a number between 0 and 100"
            hasErrors = true
        }

        this.setState({
            ...this.state,
            nameError,
            desError,
            minBillAmountError,
            discountError
        })
        return hasErrors
    }

    resetFormErrors(key) {
        this.setState({
            ...this.state,
            ...key
        })
    }

    savePolicy(e) {
        const { name, description, discount, min_bill_amount } = this.state;
        e.preventDefault()
        if (!this.validateForm()) {
            this.setState({
                ...this.state,
                isLoading: true
            })

            PolicyService.save({ name, description, discount, min_bill_amount }).then((res) => {
                this.setState({
                    ...this.state,
                    localNotification: "Policy Saved!",
                    notificationType: ALERT_TYPES.SUCCESS
                })
                PolicyService.getAll().then((res2) => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        policies: res2.data
                    })
                }).catch(() => {
                    this.setState({
                        ...this.state,
                        localNotification: "Something went wrong!",
                        notificationType: ALERT_TYPES.ERROR
                    })
                })
            }).catch(() => {
                this.setState({
                    ...this.state,
                    localNotification: "Something went wrong!",
                    notificationType: ALERT_TYPES.ERROR
                })
            })

        }
    }

    onChangeFormFeilds(feild, key) {
        this.setState({
            ...this.state,
            ...feild
        }, () => {
            this.resetFormErrors(key)
        })

    }

    render() {
        const { name, description, discount, min_bill_amount, nameError, desError, discountError, minBillAmountError, isLoading, localNotification,notificationType,policies } = this.state;

        return (
            <div>
                <Container >
                    {isLoading ? (
                        <Col lg={12}>
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={3000}
                            />
                        </Col>
                    ) : (
                        <Col lg={12} >
                            <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", width: "100%", display: "flex", padding: "10px" }}>
                                <h3 className="text-center">Manage Discount Policies</h3>
                                {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                                <Form>
                                    <Form.Row>

                                        <Form.Group as={Col} controlId="formName">
                                            <Form.Label for="policy_name">Policy Name</Form.Label>
                                            <Form.Control type="text" id="policy_name" placeholder="Policy Name" value={name} onChange={(event) => { this.onChangeFormFeilds({ name: event.target.value }, { nameError: null }) }} />
                                            {nameError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{nameError}</div>
                                            )}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formDescription">
                                            <Form.Label for="policy_description">Policy Description</Form.Label>
                                            <Form.Control type="text" id="policy_description" placeholder="Policy Description" value={description} onChange={(event) => { this.onChangeFormFeilds({ description: event.target.value }, { desError: null }) }} />
                                            {desError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{desError}</div>
                                            )}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formMinBillAmount">
                                            <Form.Label for="min_bill_amount">Minimum Bill Amount</Form.Label>
                                            <Form.Control type="number" id="min_bill_amount" placeholder="Enter" value={min_bill_amount} onChange={(event) => { this.onChangeFormFeilds({ min_bill_amount: event.target.value }, { minBillAmountError: null }) }} min="0" />
                                            {minBillAmountError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{minBillAmountError}</div>
                                            )}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formDiscount">
                                            <Form.Label for="discount">Discount</Form.Label>
                                            <Form.Control type="number" id="discount" placeholder="Enter" value={discount} onChange={(event) => { this.onChangeFormFeilds({ discount: event.target.value }, { discountError: null }) }} min="0" max="100" />
                                            {discountError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{discountError}</div>
                                            )}
                                        </Form.Group>
                                    </Form.Row>

                                    <Button variant="btn " id="submit" onClick={this.savePolicy} style={{ marginRight: "40px", background: "#bd9660", color: "white" }}>
                                        Submit
                                 </Button>

                                    <Button variant="btn1 " style={{ background: "#bd9660", color: "white" }} id="cancel" onClick={this.resetForm} >
                                        Reset
                                 </Button>
                                </Form>
                                <table className="table table-striped ">
                                    <thead>
                                        <tr>
                                            <th>Policy Name</th>
                                            <th>Description</th>
                                            <th>Minimum Bill Amount </th>
                                            <th>Discount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {policies && policies.length>0 ? (
                                            policies.map((policy,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>{policy.name}</td>
                                                        <td>{policy.description}</td>
                                                        <td>{policy.min_bill_amount}</td>
                                                        <td>{policy.discount}</td>
                                                        <td><Button onClick={()=>{this.onclickDeleteButton(policy.id)}}>Delete</Button></td>
                                                    </tr>
                                                )
                                            })
                                        ):(
                                            <tr><span>No Items Found</span></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    )}
                </Container>
            </div>
        )
    }
}

export default Policy