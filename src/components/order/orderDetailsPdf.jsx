import React, { Component } from "react";

class OrderPDF extends Component {
    constructor(props) {
        super(props)

        this.formateDate = this.formateDate.bind(this);
    }

    formateDate(date) {
        return date.split("T")[0]
    }

    render() {
        const { billDetails } = this.props;
        return (
            <table className="table table-striped table-bordered" style={{ background: "#ebebe0" }}>
                <tr>
                    <th style={{ color: 'red' }}>Order ID</th>
                    <th style={{ color: 'red' }}>Order Status</th>
                    <th style={{ color: 'red' }}>Order Date</th>
                    <th style={{ color: 'red' }}>Discount Per Order</th>
                    <th style={{ color: 'red' }}>Discount Value</th>
                    <th style={{ color: 'red' }}>Net Total</th>
                </tr>
                {billDetails && billDetails.length > 0 ? (
                    billDetails.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{item[0].barroom_order_ID}</td>
                                <td>{item[0].status}</td>
                                <td>{this.formateDate((item[0].orderDate))}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                            </tr>
                        )
                    })
                ) : (<tr><span style={{ textAlign: "center" }}>No items</span></tr>)}
            </table>
        )
    }
}

export default OrderPDF;