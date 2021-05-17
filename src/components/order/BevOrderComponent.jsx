import React, { Component } from 'react';
import { Redirect } from 'react-router'

import BeverageService from '../../services/BeverageService';
import BarRoomOrderService from "../../services/BarRoomOrderService";
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class BevOrderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bevTypes: [],
            beverages: [],
            barroom_order_id: null,
            bev_type: "",
            bev_ID: "",
            orderDate: new Date(),
            status: "parked",
            quantity: 1,
            rate: 0,
            discount: 0,
            beverageOrderLines: [],
            isLoading: false,
            localNotification: null,
            redirectToBill: false,
            notificationType: null
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.onSelectBeverage = this.onSelectBeverage.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.createBeverageOrder = this.createBeverageOrder.bind(this);
        this.onClickBillButton = this.onClickBillButton.bind(this);
    }

    componentDidMount() {
        const { orderDate, status } = this.state;

        this.setState({
            ...this.state,
            isLoading: true
        })
        BarRoomOrderService.createOrder({ orderDate, status }).then((res1) => {
            BeverageService.getBevType().then((res2) => {
                BeverageService.getBeverage().then((res3) => {
                    this.setState({
                        ...this.state,
                        barroom_order_id: res1.data.barroom_order_ID,
                        bevTypes: res2.data,
                        beverages: res3.data,
                        isLoading: false
                    });
                }).catch((e) => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        localNotification: "something went wrong!"
                    })
                })
            }).catch((e) => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    localNotification: "something went wrong!"
                })
            })
        }).catch((e) => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "something went wrong!"
            })
        })
    }

    onClickBillButton(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            redirectToBill: true
        })
    }

    createBeverageOrder(e) {
        e.preventDefault();
        const { discount, quantity, barroom_order_id, bev_ID, rate } = this.state;
        let totalWithOutDiscount = quantity * rate;
        let discountedValue = (totalWithOutDiscount * discount) / 100;
        let beverage;
        let bar_room_order;

        this.setState({
            ...this.state,
            isLoading: true
        })

        BeverageService.getBeverageByID(bev_ID).then((res1) => {
            beverage = res1.data;
            BarRoomOrderService.getBarRoomOrderById(barroom_order_id).then((res2) => {
                bar_room_order = res2.data;
                BarRoomOrderService.addBeverageToOrder({ discount: parseFloat(discount), quantity, total: (totalWithOutDiscount - discountedValue), barroom_Order: bar_room_order, beverage }).then((res3) => {
                    this.setState({
                        ...this.state,
                        localNotification: "beverage added to the order!",
                        notificationType: ALERT_TYPES.SUCCESS
                    })
                    BarRoomOrderService.getBeverageOrdersByBarRoomOrderId(barroom_order_id).then((res4) => {
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            beverageOrderLines: res4.data
                        })
                    }).catch(() => {
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            localNotification: "something went wrong!",
                            notificationType: ALERT_TYPES.ERROR
                        })
                    })
                }).catch(() => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        localNotification: "something went wrong!",
                        notificationType: ALERT_TYPES.ERROR
                    })
                })
            }).catch(() => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    localNotification: "something went wrong!",
                    notificationType: ALERT_TYPES.ERROR
                })
            })
        }).catch(() => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })
    }

    onClickCancel(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            bev_ID: null,
            quantity: 1,
            rate: 0,
            discount: 0,
            total: 0,
            bev_type: "",
            localNotification:null,
            notificationType:null
        })
    }

    onSelectBeverage(event) {
        let bev_ID = event.target.value
        const { beverages } = this.state;

        let selectedBeverage = beverages.filter((bev) => {
            return bev.bev_ID === parseInt(bev_ID);
        })
        if (selectedBeverage.length > 0) {
            this.setState({
                ...this.state,
                bev_ID: parseInt(bev_ID),
                rate: selectedBeverage[0].unit_Price,
                discount: selectedBeverage[0].discount,
            })
        } else {
            console.log("selectedBeverage", selectedBeverage)
        }
    }

    onChangeFormFeild(feild) {
        this.setState({
            ...this.state,
            ...feild
        })
    }

    render() {
        const { beverages, bevTypes, quantity, bev_type, rate, discount, beverageOrderLines, bev_ID, localNotification, isLoading, redirectToBill, barroom_order_id, notificationType } = this.state;
        let beverageOptions = [];
        if (beverages !== undefined && beverages.length > 0) {
            let beverageRelatedToCategory = beverages.filter((item) => {
                return item.b_Type === bev_type;
            })
            beverageOptions = beverageRelatedToCategory.map(({ bev_ID, b_Name }) => {
                return { name: b_Name, value: bev_ID }
            })
        }
        if (redirectToBill) {
            return <Redirect to={`/bill/${barroom_order_id}`} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="card" style={{width:"100%"}}>
                        <h3 className="text-center" >Create Order</h3>
                        {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                        {isLoading ? (<Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000}
                        />) : (
                            <div className="card-body" style={{display:"flex", width:"100%"}}>
                                <div style={{background: "#ebebe0",flexGrow:"1",padding: "20px"}} 
                                >
                                    <form >
                                        <div className="form-group">
                                            <label for="beverage type">Beverage Type</label>
                                            <select id="b_Type" class="form-control" value={bev_type} onChange={(event) => { this.onChangeFormFeild({ bev_type: event.target.value }) }}>
                                                <option selected value="">Choose...</option>
                                                {bevTypes.map(({ b_Type, index }) => {
                                                    return (<option value={b_Type} key={index}>{b_Type}</option>)
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="beverage type">Beverage Name</label>
                                            <select id="b_Type" class="form-control" onChange={this.onSelectBeverage} disabled={bev_type === ""} value={bev_ID}>
                                                <option selected value="">Choose...</option>
                                                {beverageOptions.map((item, index) => {
                                                    return (<option value={item.value} key={index}>{item.name}</option>)
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Quantity : </label>
                                            <input type="number" className="form-control" value={quantity} onChange={(event) => { this.onChangeFormFeild({ quantity: parseInt(event.target.value) }) }} disabled={bev_type === "" || bev_ID === ""} min="1" />
                                        </div>

                                        <div className="form-group">
                                            <label>Rate :</label>
                                            <input type="text" className="form-control" value={rate} disabled />
                                        </div>
                                        <div className="form-group">
                                            <label>Discount :</label>
                                            <input type="text" className="form-control" value={discount} disabled />
                                        </div>
                                        <button className="btn btn-success" style={{ background: "#bd9660" }} onClick={this.createBeverageOrder} disabled={bev_type === "" || bev_ID === ""}>Save</button>
                                        <button className="btn btn-danger" onClick={this.onClickCancel} style={{ marginLeft: "10px" }}>Cancel</button>

                                    </form>
                                </div>

                                <div
                                style={{backgroundColor:"#e1e1d0", flexGrow:"1"}}
                                >
                                    <h2 className="text-center">Billing Area</h2>
                                    <hr ></hr>
                                    <hr ></hr>

                                    <table className="table table-striped table-bordered">
                                        <tr>
                                            <th style={{ color: 'red' }}>Item Name</th>
                                            <th style={{ color: 'red' }}>Qty</th>
                                            <th style={{ color: 'red' }}>Rate</th>
                                            <th style={{ color: 'red' }}>Discount</th>
                                            <th style={{ color: 'red' }}>Total</th>
                                        </tr>
                                        {beverageOrderLines && beverageOrderLines.length > 0 ? (
                                            beverageOrderLines.map((item) => {
                                                return (
                                                    <tr key={item[0]}>
                                                        <td>{item[4]}</td>
                                                        <td>{item[2]}</td>
                                                        <td>{item[5]}</td>
                                                        <td>{item[1]}</td>
                                                        <td>{item[3]}</td>
                                                    </tr>
                                                )
                                            })
                                        ) : (<tr><span style={{ textAlign: "center" }}>No items added</span></tr>)}
                                    </table>
                                    <button className="btn btn-success" style={{ marginLeft: "270px", background: "#bd9660" }} onClick={this.onClickBillButton} disabled={beverageOrderLines.length < 1}>Next</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default BevOrderComponent;