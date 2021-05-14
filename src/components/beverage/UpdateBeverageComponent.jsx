import React, { Component } from 'react';
import BeverageService from '../../services/BeverageService';
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";

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
            notificationType: null

        }
        this.changeBeverageTypeHandler = this.changeBeverageTypeHandler.bind(this);
        this.changeBeverageNameHandler = this.changeBeverageNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);

        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateBeverage = this.updateBeverage.bind(this);


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

    updateBeverage = (e) => {
        e.preventDefault();
        let beverage = { b_Type: this.state.b_Type, b_Name: this.state.b_Name, unit_Price: this.state.unit_Price, description: this.state.description, discount: this.state.discount, };
        //console.log('beverage =>' + JSON.stringify(beverage));

        this.setState({
            ...this.state,
            loading: true
        })
        BeverageService.updateBeverage(beverage, this.state.bev_ID).then(res => {
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
    changeBeverageTypeHandler = (event) => {
        this.setState({ b_Type: event.target.value });
    }

    changeBeverageNameHandler = (event) => {
        this.setState({ b_Name: event.target.value });
    }
    changeUnitPriceHandler = (event) => {
        this.setState({ unit_Price: event.target.value });
    }
    changeDiscountHandler = (event) => {
        this.setState({ discount: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    cancel() {
        this.props.history.push('/beverages');
    }


    render() {
        return (
            <div>
                {this.state.loading ? (<Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />) : (
                    <div className="container">
                        {this.state.localNotification !== "" && this.state.localNotification !== null ? (<Alert message={this.state.localNotification} type={this.state.notificationType} />) : null}
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Beverage </h3>
                                <div className="card-body">
                                    <form >
                                        <div className="form-group">
                                            <label>Beverage Type</label>
                                            <select id="b_Type" class="form-control" value={this.state.b_Type} onChange={this.changeBeverageTypeHandler}>
                                                <option selected>Choose...</option>
                                                {this.state.Btypes.map(({ b_Type }) => {
                                                    return (<option value={b_Type}>{b_Type}</option>)
                                                })}
                                            </select>
                                            {/*<input type="text" placeholder="Beverage Type" name="b_Type" className="form-control"
                                                value={this.state.b_Type} onChange={this.changeBeverageTypeHandler} />*/}
                                        </div>

                                        <div className="form-group">
                                            <label>Beverage Name</label>
                                            <input type="text" placeholder="Beverage Name" name="b_Name" className="form-control"
                                                value={this.state.b_Name} onChange={this.changeBeverageNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Unit Price</label>
                                            <input placeholder="Unit Price" name="unit_Price" className="form-control"
                                                value={this.state.unit_Price} onChange={this.changeUnitPriceHandler} type="number" min="0" />
                                        </div>

                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea placeholder="Description" name="description" className="form-control"
                                                value={this.state.description} onChange={this.changeDescriptionHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label>Discount</label>
                                            <input placeholder="Discount" name="Discount" className="form-control"
                                                value={this.state.discount} onChange={this.changeDiscountHandler} type="number" min="0" max="100" />
                                        </div>
                                        <button style={{ marginLeft: "180" }} className="btn btn-success" onClick={this.updateBeverage} disabled={this.state.discount === "" || this.state.description === "" || this.state.unit_Price === "" || this.state.b_Name === "" || this.state.b_Type === ""}>Update</button>
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