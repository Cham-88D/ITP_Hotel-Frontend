import React, { Component } from 'react';
import BeverageService from '../../adapters/BeverageService';
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";

class CreateBeverageComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Btype: [],
            bev_category: "",

            b_Type: '',
            b_Name: '',
            unit_Price: 0,
            discount: 0,
            description: '',

            nameError: ' ',
            priceError: '',
            discountError: '',
            descriptionError: '',
            bevTypeError: "",

            loading: false,
            localNotification: null,
            notificationType: null

        }
        this.onChangeBevType = this.onChangeBevType.bind(this);
        this.changeBeverageNameHandler = this.changeBeverageNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);

        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveBeverage = this.saveBeverage.bind(this);
        this.changeBeverageTypeHandler = this.changeBeverageTypeHandler.bind(this);
        this.saveBevType = this.saveBevType.bind(this);
        this.validateForm = this.validateForm.bind(this);

    }

    validateForm() {
        const { b_Type, b_Name, unit_Price, discount, description } = this.state;

        let bevTypeError = null;
        let nameError = null;
        let descriptionError = null;
        let priceError = null;
        let discountError = null;

        let hasError = false;
        if (b_Type === "" || b_Type === null || b_Type===undefined) {
            bevTypeError = "Beverage type is required!"
            hasError = true;
        }
        if (b_Name === "" || b_Name === null || b_Name===undefined) {
            nameError = "Beverage name is required!"
            hasError = true;
        }
        if (description === "" || description === null || description===undefined) {
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

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }

    };


    componentDidMount() {
        this.getBevType();
    }
    getBevType = () => {
        BeverageService.getBevType().then((res) => {

            this.setState({
                Btype: res.data

            });
            console.log(this.state.Btype);
        });


    }
    saveBeverage = (e) => {
        e.preventDefault();

        let beverage = { b_Type: this.state.b_Type, b_Name: this.state.b_Name, unit_Price: this.state.unit_Price, discount: parseFloat(this.state.discount), description: this.state.description };

        if (!this.validateForm()) {
            this.setState({
                ...this.state,
                loading: true
            })
            BeverageService.createBeverage(beverage).then(res => {
                this.setState({
                    ...this.state,
                    loading: false
                })
                this.props.history.push('/beverages');

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

    saveBevType = (er) => {
        er.preventDefault();
        alert("succes");

        //console.log("2");

        let beverage = { b_Type: this.state.bev_category };
        //console.log(beverage);
        //console.log("1");
        //console.log('beverage => ' + JSON.stringify(beverage));

        this.setState({
            ...this.state,
            loading: true
        })
        BeverageService.createBevType(beverage).then(res => {
            this.setState({
                ...this.state,
                loading: false
            })
            this.props.history.push('/beverages');

        }).catch(() => {
            alert("unsucess");
        })

    }
    changeBeverageCategoryTypeHandler = (event) => {
        this.setState({ BevType: event.target.value });
    }

    onChangeBevType = (event) => {
        this.setState({ ...this.state, b_Type: event.target.value, bevTypeError: null });
    }

    changeBeverageTypeHandler = (event) => {
        this.setState({ ...this.state, bev_category: event.target.value });
    }

    changeBeverageNameHandler = (event) => {
        this.setState({ ...this.state, b_Name: event.target.value, nameError: null });
    }
    changeUnitPriceHandler = (event) => {
        this.setState({ ...this.state, unit_Price: event.target.value, priceError: null });
    }
    changeDiscountHandler = (event) => {
        this.setState({ ...this.state, discount: event.target.value, discountError: null });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ ...this.state, description: event.target.value, descriptionError: null });
    }
    cancel() {
        this.props.history.push('/beverages');
    }




    render() {

        const { Btype } = this.state;
        //    function sendType (){
        //         const newType={


        //         }

        //         axios.post("http://localhost:8080/api/v1/beverage_item_category",newType).then(()=>{

        //         }).catch((e)=>{
        //             alert("error")
        //         })


        //     }

        function AddCategoryBar() {
            const x = document.getElementById("add-new-cat").style.display;
            if (x === "none") {
                document.getElementById('add-new-cat').style.display = "block";
                document.getElementById('bt1').style.display = "none";

            }
            else {
                document.getElementById('add-new-cat').style.display = "none ";
                document.getElementById('bt1').style.display = "block";


            }
        }

        const { nameError,
            priceError,
            discountError,
            descriptionError,
            bevTypeError } = this.state;

        return (
            <div>
                {
                    this.state.loading ? (<Loader
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
                                    <h3 className="text-center" style={{ marginTop: "8px" }}>Add Beverages</h3>


                                    <button id="bt1" style={{ display: "block" }} onClick={AddCategoryBar}>Add Category</button>



                                    <div id="add-new-cat" style={{ display: "none" }}>
                                        <div className="form-group">
                                            <label>Beverage Type</label>
                                            <input type="text" placeholder="Beverage Type" name="b_Type" className="form-control"
                                                value={this.state.bev_category} onChange={this.changeBeverageTypeHandler} />
                                        </div>
                                        {/* <input type="text" placeholder="Beverage Type" name="BevType"  value={this.state.BevType} onChange={this.changeBeverageCategoryTypeHandler} /> */}
                                        {/* <input type="text" value={this.state.BevType} onChange={this.changeBeverageCategoryTypeHandler} /> */}
                                        <button className="btn btn-success" style={{ marginLeft: "5px" }} onClick={this.saveBevType} disabled={this.state.bev_category === ""}>Add</button>
                                        <button onClick={AddCategoryBar} className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>


                                    </div>

                                    <div className="card-body">
                                        <form >
                                            {/* <div className="form-group">
                                            <label>Beverage Type</label>
                                            <input type="text" placeholder="Beverage Type" name="b_Type" className="form-control" 
                                                        value={this.state.b_Type} onChange={this.changeBeverageTypeHandler} />
                                            </div> */}
                                            <div className="form-group">
                                                <label for="beverage type">Beverage Type</label>
                                                <select id="b_Type" class="form-control" value={this.state.b_Type} onChange={this.onChangeBevType}>
                                                    <option selected value="">Choose...</option>
                                                    {Btype.map(({ b_Type }) => {
                                                        return (<option value={b_Type}>{b_Type}</option>)
                                                    })}
                                                </select>
                                                {bevTypeError !== null && (
                                                    <div style={{ fontSize: 12, color: "red" }}>{bevTypeError}</div>
                                                )}
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
                                                <input placeholder="Unit Price" name="unit_Price" className="form-control" type="number" min="0"
                                                    value={this.state.unit_Price} onChange={this.changeUnitPriceHandler} />
                                                {priceError !== null && (
                                                    <div style={{ fontSize: 12, color: "red" }}>{priceError}</div>
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
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea placeholder="Description" name="description" className="form-control"
                                                    value={this.state.description} onChange={this.changeDescriptionHandler} />
                                                {descriptionError !== null && (
                                                    <div style={{ fontSize: 12, color: "red" }}>{descriptionError}</div>
                                                )}
                                            </div>
                                            <button className="btn btn-success" style={{ background: "#bd9660", marginLeft: "180px" }} onClick={this.saveBeverage}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        );
    }
}

export default CreateBeverageComponent;