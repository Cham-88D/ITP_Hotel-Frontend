import React, { Component,Fragment } from "react";
import { Redirect } from 'react-router';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import OrderPDF from "./orderDetailsPdf";

import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import BarRoomOrderService from "../../services/BarRoomOrderService";
import BillService from "../../services/BillService";

class ViewOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            localNotification: "",
            notificationType: "",
            orders: [],
            isLoading: false,
            orderStatus: "parked",
            createOrderClicked: false,
            billDetails:null
        }

        this.formateOrderDate = this.formateOrderDate.bind(this);
        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.createNewOrder = this.createNewOrder.bind(this);
        this.downloadPdf = this.downloadPdf.bind(this);
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            isLoading: true,
        })
        BarRoomOrderService.getAllOrders({status:"parked"}).then((res) => {
            this.setState({
                ...this.state,
                isLoading: false,
                orders: res.data
            })
        }).catch(() => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })
    }

    downloadPdf(id,handlePrint) {
        this.setState({
            ...this.state,
            isLoading: true
        })
        BillService.getBillByOrderId(id).then((res) => {
            this.setState({
                ...this.state,
                isLoading: false,
                billDetails: res.data[0]
            },() => {
                handlePrint();
              })
        }).catch(() => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })

    }
    createNewOrder() {
        this.setState({
            ...this.state,
            createOrderClicked: true
        })
    }

    onChangeFormFeild(feild) {

        this.setState({
            ...this.state,
            ...feild,
            isLoading:true
        })

        BarRoomOrderService.getAllOrders({status:feild.orderStatus}).then((res) => {
            this.setState({
                ...this.state,
                isLoading: false,
                orders: res.data
            })
        }).catch(() => {
            this.setState({
                ...this.state,
                isLoading: false,
                localNotification: "Something went wrong!",
                notificationType: ALERT_TYPES.ERROR
            })
        })
    }

    formateOrderDate(date) {
        return date.split("T")[0]
    }

    render() {
        const { orders, localNotification, notificationType, isLoading, orderStatus, createOrderClicked,billDetails } = this.state;

        if (createOrderClicked) {
            return <Redirect to="/create-order" />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="card" style={{width:"100%"}}>
                        <h3 className="text-center" >View Orders and Generate Reports</h3>
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
                            <div className="card-body" style={{ width: "100%" }}>
                                <form >
                                    <div className="form-group">
                                        <label for="beverage type">Order Status</label>
                                        <select id="b_Type" class="form-control" value={orderStatus} onChange={(event) => { this.onChangeFormFeild({ orderStatus: event.target.value }) }}>
                                            <option value="parked">PARKED</option>
                                            <option value="completed">COMPLETED</option>
                                        </select>
                                    </div>
                                </form>
                                <table className="table table-striped table-bordered" style={{ background: "#ebebe0" }}>
                                    <tr>
                                        <th style={{ color: 'red' }}>Order ID</th>
                                        <th style={{ color: 'red' }}>Status</th>
                                        <th style={{ color: 'red' }}>Order Date</th>
                                        <th style={{ color: 'red' }}>Total</th>
                                        <th style={{ color: 'red' }}>Action</th>
                                    </tr>
                                    {orders && orders.length > 0 ? (
                                        orders.map((item) => {
                                            return (
                                                <tr key={item[0]}>
                                                    <td>{item[0]}</td>
                                                    <td>{item[1]}</td>
                                                    <td>{this.formateOrderDate(item[2])}</td>
                                                    <td>{item[3].toFixed(2)}</td>
                                                    <td><Fragment>
                                                        <div style={{display:"none"}}>
                                                            <style type="text/css">
                                                                {"@media print{@page {size: landscape; margin: 10mm;}}"}
                                                            </style>
                                                            {billDetails && (
                                                                <OrderPDF
                                                                ref={(el) => (this.componentRef = el)}
                                                                totalBeforeDiscount={item[3]}
                                                                billDetails={billDetails}
                                                            />
                                                            )}
                                                        </div>
                                                        <ReactToPrint
                                                            copyStyles={true}
                                                            content={() => this.componentRef}
                                                            documentTitle={"Report"}
                                                            removeAfterPrint
                                                        >
                                                            <PrintContextConsumer>
                                                                {({ handlePrint }) =>
                                                                    <button
                                                                        className="btn btn-success" style={{ background: "#bd9660" }}
                                                                        onClick={() => {
                                                                            this.downloadPdf(item[0], handlePrint);
                                                                        }}
                                                                    >
                                                                        Download PDF
                                                                    </button>
                                                                }
                                                            </PrintContextConsumer>
                                                        </ReactToPrint>
                                                    </Fragment>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (<tr><span style={{ textAlign: "center" }}>No items</span></tr>)}
                                </table>
                                <div style={{ width: "100%", display: "flex", textAlign: "center" }}>
                                    <div style={{ flexGrow: "1" }}>
                                        <button className="btn btn-success" style={{ background: "#bd9660" }} onClick={this.createNewOrder} >Create New Order</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewOrders