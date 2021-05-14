import React, { Component } from 'react';

import BillService from '../../services/BillService';
import BarRoomOrderService from "../../services/BarRoomOrderService";
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Bill extends Component {

    constructor(props) {
        super(props);

        this.state = {
            discountPerOrder: 0,
            beverageOrderLines: [],
            isLoading: false,
            localNotification: null,
            billCreatedSuccess: false,
            notificationType: null
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.calculateNetTotal = this.calculateNetTotal.bind(this);
        this.totalAfterDiscountApplied = this.totalAfterDiscountApplied.bind(this);
        this.onClickSaveBill = this.onClickSaveBill.bind(this);
        this.resetNotification = this.resetNotification.bind(this);
    }

    componentDidMount() {
        const { match: { params: { orderId } } } = this.props;
        this.setState({
            ...this.state,
            isLoading: true
        })
        BarRoomOrderService.getBeverageOrdersByBarRoomOrderId(orderId).then((res4) => {
            this.setState({
                ...this.state,
                isLoading: false,
                beverageOrderLines: res4.data,
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

    resetNotification() {
        this.setState({
            ...this.state,
            localNotification: null
        })
    }

    onClickSaveBill() {
        const { match: { params: { orderId } } } = this.props;
        const { beverageOrderLines, discountPerOrder } = this.state;

        let total = 0;
        beverageOrderLines.map((item) => {
            total = item[3] + total
            return null;
        })
        let discountedPrice = total * discountPerOrder / 100;
        let totalAfterDiscount = total - discountedPrice;

        this.setState({
            ...this.state,
            isLoading: true
        })

        BillService.createBill({ discount_per_order: parseFloat(discountPerOrder), discounted_price: discountedPrice, total_after_discount: totalAfterDiscount }, orderId).then((res2) => {
            if (res2.data) {
                this.setState({
                    ...this.state,
                    billCreatedSuccess: true,
                    isLoading: false,
                    localNotification: "Bill saved!",
                    notificationType: ALERT_TYPES.SUCCESS
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

    calculateNetTotal() {
        const { beverageOrderLines } = this.state;
        let total = 0;
        beverageOrderLines.map((item) => {
            total = item[3] + total
            return null;
        })
        return total.toFixed(2)
    }

    totalAfterDiscountApplied() {
        const { beverageOrderLines, discountPerOrder } = this.state;
        let total = 0;
        beverageOrderLines.map((item) => {
            total = item[3] + total
            return null;
        })
        let discountedPrice = total * discountPerOrder / 100;
        let totalAfterDiscount = total - discountedPrice;

        return discountPerOrder === 0 ? total : totalAfterDiscount
    }

    onChangeFormFeild(feild) {
        this.setState({
            ...this.state,
            ...feild
        })
    }

    render() {
        const {  beverageOrderLines,  localNotification, isLoading, discountPerOrder, notificationType } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="card" style={{width:"100%"}}>
                        {isLoading ? (<Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000}
                        />) : (
                            <div className="card-body">
                                <div style={{ backgroundColor: "#e1e1d0" }}>
                                    <h2 className="text-center">Billing Details</h2>
                                    {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                                    {/*<div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                                        <button className="btn btn-success" style={{ marginRight: "15px", background: "#bd9660", marginTop: "15px", marginBottom: "15px" }} onClick={this.onClickSaveBill}>Generate Monthly Report</button>
                        </div>*/}
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
                                        ) : (<tr><span style={{ textAlign: "center" }}>No items</span></tr>)}
                                        <tr>
                                            <td style={{ fontWeight: "800" }}>Net Total:</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td style={{ fontWeight: "800" }}>{this.calculateNetTotal()}</td>
                                        </tr>
                                    </table>
                                    <hr ></hr>
                                    <div style={{ display: "flex" }}>
                                        <span>Discount (%)</span>
                                        <div style={{ marginLeft: "65px" }}>
                                            <input type="number" className="form-control" value={discountPerOrder} onChange={(event) => { this.onChangeFormFeild({ discountPerOrder: event.target.value }) }} min="0" max="100"/>
                                        </div>
                                    </div>
                                    <div style={{ width: "87%", display: "flex", justifyContent: "flex-end" }}>
                                        <span style={{  borderBottom: "2px dashed black", fontWeight: "800" }}>{this.totalAfterDiscountApplied().toFixed(2)}</span>
                                    </div>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                                        <button className="btn btn-success" style={{ background: "#bd9660", marginTop: "15px", marginBottom: "15px", marginRight: "15px" }} onClick={this.onClickSaveBill}>Save</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Bill;