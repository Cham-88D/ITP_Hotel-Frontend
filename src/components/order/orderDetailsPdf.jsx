import React, { Component } from "react";

class OrderPDF extends Component {
    constructor(props) {
        super(props)

        this.formateDate = this.formateDate.bind(this);
    }

    formateDate(date){
        return date.split("T")[0]
    }

    render() {
        const {totalBeforeDiscount,billDetails:{barroom_Order:{barroom_order_ID,orderDate,status},discount_per_order,discounted_price,total_after_discount}} = this.props;
        return (
            <table className="table table-striped table-bordered" style={{ background: "#ebebe0" }}>
                <tr>
                    <th style={{ color: 'red' }}>Order ID</th>
                    <th style={{ color: 'red' }}>Order Status</th>
                    <th style={{ color: 'red' }}>Order Date</th>
                    <th style={{ color: 'red' }}>Total Before Discount</th>
                    <th style={{ color: 'red' }}>Discount Per Order</th>
                    <th style={{ color: 'red' }}>Discount Value</th>
                    <th style={{ color: 'red' }}>Net Total</th>
                </tr>
                <tr>
                    <td>{barroom_order_ID}</td>
                    <td>{status}</td>
                    <td>{this.formateDate(orderDate)}</td>
                    <td>{totalBeforeDiscount}</td>
                    <td>{discount_per_order}</td>
                    <td>{discounted_price}</td>
                    <td>{total_after_discount}</td>
                </tr>
                {/*orders && orders.length > 0 ? (
                                        orders.map((item) => {
                                            return (
                                                <tr key={item[0]}>
                                                    <td>{item[0]}</td>
                                                    <td>{item[1]}</td>
                                                    <td>{this.formateOrderDate(item[2])}</td>
                                                    <td>{item[3].toFixed(2)}</td>
                                                    <td>
                                                        <ReactToPrint
                                                            copyStyles={true}
                                                            content={() => this.componentRef}
                                                            documentTitle={"Backorder Enquiry"}
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
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (<tr><span style={{ textAlign: "center" }}>No items</span></tr>)*/}
            </table>
        )
    }
}

export default OrderPDF;