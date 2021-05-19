import React, { Component } from 'react';
import BeverageService from '../../adapters/BeverageService';
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class UpdateBeverageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bev_ID: this.props.match.params.bev_ID,
            Btypes: [],
            //id: this.props.match.params.id,
            b_Type: '',
            b_Name: '',
            unit_Price: '',
            description: '',
            discount: '',
            loading: false,
            localNotification: null,
            notificationType: null,

            nameError: ' ',
            priceError: '',
            discountError: '',
            descriptionError: '',
            bevTypeError: "",

        }
        this.changeBeverageTypeHandler = this.changeBeverageTypeHandler.bind(this);
        this.changeBeverageNameHandler = this.changeBeverageNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);

        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateBeverage = this.updateBeverage.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onSuccessUpdate = this.onSuccessUpdate.bind(this);


    }

    componentDidMount() {
        BeverageService.getBeverageByID(this.state.bev_ID).then((res) => {

            let beverage = res.data;
            this.setState({
                b_Type: beverage.b_Type,
                b_Name: beverage.b_Name,
                unit_Price: beverage.unit_Price,
                description: beverage.description,
                discount: beverage.discount
            });

        });

        BeverageService.getBevType().then((res) => {

            this.setState({
                Btypes: res.data

            });
            console.log(this.state.Btype);
        });
    }

    onSuccessUpdate() {
        confirmAlert({
            title: 'Successfully Updated!',
            buttons: [
                {
                    label: 'OK',
                    onClick: () => { this.props.history.push('/beverages'); }
                }
            ]
        });
    }

    validateForm() {
        const { b_Type, b_Name, unit_Price, discount, description } = this.state;

        let bevTypeError = null;
        let nameError = null;
        let descriptionError = null;
        let priceError = null;
        let discountError = null;

        let hasError = false;
        if (b_Type === "" || b_Type === null || b_Type === undefined) {
            bevTypeError = "Beverage type is required!"
            hasError = true;
        }
        if (b_Name === "" || b_Name === null || b_Name === undefined) {
            nameError = "Beverage name is required!"
            hasError = true;
        }
        if (description === "" || description === null || description === undefined) {
            descriptionError = "Beverage description is required!"
            hasError = true;
        }
        if (unit_Price === "" || unit_Price === null || unit_Price < 1 || isNaN(unit_Price)) {
            priceError = "Price should be valid and is required!"
            hasError = true;
        }
        if (discount === "" || discount === null || discount < 0 || discount > 100 || isNaN(discount)) {
            discountError = "Discount should be valid!"
            hasError = true;
        }
        this.setState({
            ...this.state,
            bevTypeError,
            nameError,
            descriptionError,
            priceError,
            discountError
        })
        return hasError;
    }

    updateBeverage = (e) => {
        e.preventDefault();
        let beverage = { b_Type: this.state.b_Type, b_Name: this.state.b_Name, unit_Price: this.state.unit_Price, description: this.state.description, discount: this.state.discount, };

        if (!this.validateForm()) {
            this.setState({
                ...this.state,
                loading: true
            })
            BeverageService.updateBeverage(beverage, this.state.bev_ID).then(res => {
                this.setState({
                    ...this.state,
                    loading: false
                }, () => {
                    this.onSuccessUpdate()
                })
            }).catch(() => {
                this.setState({
                    ...this.state,
                    loading: false,
                    localNotification: "Something went wrong!",
                    notificationType: ALERT_TYPES.ERROR
                })
            })
        }


    }

    changeBeverageTypeHandler = (event) => {
        this.setState({ b_Type: event.target.value, bevTypeError: null });
    }

    changeBeverageNameHandler = (event) => {
        this.setState({ b_Name: event.target.value, nameError: null });
    }
    changeUnitPriceHandler = (event) => {
        this.setState({ unit_Price: event.target.value, priceError: null });
    }
    changeDiscountHandler = (event) => {
        this.setState({ discount: event.target.value, discountError: null });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value, descriptionError: null });
    }
    cancel() {
        this.props.history.push('/beverages');
    }


    render() {
        const { nameError,
            priceError,
            discountError,
            descriptionError,
            bevTypeError } = this.state;

        return (
            <div>
                {this.state.loading ? (<Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />) : (
                    <div className="container" style={{ marginTop: "15px" }}>
                        {this.state.localNotification !== "" && this.state.localNotification !== null ? (<Alert message={this.state.localNotification} type={this.state.notificationType} />) : null}
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "8px" }}>
                                <h3 className="text-center" style={{ marginTop: "8px" }}>Update Beverage </h3>
                                <div className="card-body">
                                    <form >
                                        <div className="form-group">
                                            <label>Beverage Type</label>
                                            <select id="b_Type" class="form-control" value={this.state.b_Type} onChange={this.changeBeverageTypeHandler}>
                                                <option selected value="">Choose...</option>
                                                {this.state.Btypes.map(({ b_Type }) => {
                                                    return (<option value={b_Type}>{b_Type}</option>)
                                                })}
                                            </select>
                                            {bevTypeError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{bevTypeError}</div>
                                            )}
                                            {/*<input type="text" placeholder="Beverage Type" name="b_Type" className="form-control"
                                                value={this.state.b_Type} onChange={this.changeBeverageTypeHandler} />*/}
                                        </div>

                                        <div className="form-group">
                                            <label>Beverage Name</label>
                                            <input type="text" placeholder="Beverage Name" name="b_Name" className="form-control"
                                                value={this.state.b_Name} onChange={this.changeBeverageNameHandler} />
                                            {nameError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{nameError}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Unit Price</label>
                                            <input placeholder="Unit Price" name="unit_Price" className="form-control"
                                                value={this.state.unit_Price} onChange={this.changeUnitPriceHandler} type="number" min="0" />
                                            {priceError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{priceError}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea placeholder="Description" name="description" className="form-control"
                                                value={this.state.description} onChange={this.changeDescriptionHandler} />
                                            {descriptionError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{descriptionError}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Discount</label>
                                            <input placeholder="Discount" name="Discount" className="form-control"
                                                value={this.state.discount} onChange={this.changeDiscountHandler} type="number" min="0" max="100" />
                                            {discountError !== null && (
                                                <div style={{ fontSize: 12, color: "red" }}>{discountError}</div>
                                            )}
                                        </div>
                                        <button style={{ background: "#bd9660", marginLeft: "180" }} className="btn btn-info" onClick={this.updateBeverage}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default UpdateBeverageComponent;