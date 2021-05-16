import React, { Component } from "react";

import { Col} from 'react-bootstrap';

class PrintRestBill extends Component {

    constructor(props){
        super(props)

        this.calculateOrderTotalWithOutDiscountPolicy = this.calculateOrderTotalWithOutDiscountPolicy.bind(this);
    }

    calculateOrderTotalWithOutDiscountPolicy(){
        const {orderLines} = this.props;

        let total = 0;
        orderLines.map((item)=>{
            total= total+parseFloat(item[3]);
            return null;
        })
        return total.toFixed(2)
    }

    render() {
        const {orderLines,finalTotal} = this.props;
        return (
            <div>
                <Col lg={7} >
                    <div className="row">
                        <div className="card col-md-10 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                            <div className="container  bg-dark" style={{ color: 'white', marginTop: 10 }} >
                                <h3 className="text-center" style={{ fontSize: 14, textAlign: "center", marginTop: 5 }}>BILL</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <table className="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>Menu Item Name </th>
                                                <th>Unit Price </th>
                                                <th>Quantity </th>
                                                <th>Discount </th>
                                                <th>Total </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderLines && orderLines.length > 0 ? (
                                                orderLines.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{item[4]}</td>
                                                            <td>{item[5]}</td>
                                                            <td>{item[2]}</td>
                                                            <td>{item[1]}</td>
                                                            <td>{item[3]}</td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                <tr>
                                                    <td><span>No Items Found</span></td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td>Net Total</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{this.calculateOrderTotalWithOutDiscountPolicy()}</td>
                                            </tr>
                                            {finalTotal && (
                                                <tr>
                                                <td>Total After Discount Policy Applied</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td style={{fontWeight:"800"}}>{finalTotal.toFixed(2)}</td>
                                            </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        )
    }
}

export default PrintRestBill;