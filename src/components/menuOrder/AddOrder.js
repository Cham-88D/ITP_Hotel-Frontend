import React, { Component, Fragment } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import ResOrderService from '../../adapters/ResOrderService';
import MenuItemService from "../../adapters/MenuItemService";
import MenuResOrderService from "../../adapters/MenuResOrder";
import PolicyService from "../../adapters/policyService";

import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import PrintRestBill from "./pdf";

export class AddOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuTypes: [],
            menuItems: [],
            resOrder: null,
            orderLines: [],
            validPolicies: [],

            menuType: "",
            menuItem: "",
            discount: 0,
            unitPrice: 0,
            quantity: 0,
            isLoading: false,
            localNotification: null,
            notificationType: null,
            finalTotal: null,
            showPolicyTable: false,

            menuItemNameError: null,
            qtyError: null
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.onChangeMenuItem = this.onChangeMenuItem.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.addProductsToOrder = this.addProductsToOrder.bind(this);
        this.calculateOrderTotalWithOutDiscountPolicy = this.calculateOrderTotalWithOutDiscountPolicy.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.resetFormErrors = this.resetFormErrors.bind(this);
        this.getAllApplicablePolicies = this.getAllApplicablePolicies.bind(this);
        this.calculatePriceAccordingToPolicy = this.calculatePriceAccordingToPolicy.bind(this);
    }

    calculatePriceAccordingToPolicy(discount) {
        let total = this.calculateOrderTotalWithOutDiscountPolicy();
        let finalTotal = total - (total * discount) / 100;

        this.setState({
            ...this.state,
            finalTotal
        })
    }

    getAllApplicablePolicies() {
        let total = this.calculateOrderTotalWithOutDiscountPolicy();

        this.setState({
            ...this.state,
            isLoading: true,
            showPolicyTable: true
        })
        PolicyService.getApplicablePolicies(total).then((res) => {
            this.setState({
                ...this.state,
                isLoading: false,
                validPolicies: res.data
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

    componentDidMount() {
        this.setState({
            ...this.state,
            isLoading: true,
        })
        MenuItemService.getAllMenuItemTypes().then((res) => {
            this.setState({
                ...this.state,
                menuTypes: res.data
            })
            ResOrderService.save({ date: new Date() }).then((res2) => {
                this.setState({
                    ...this.state,
                    resOrder: res2.data
                })
                MenuItemService.getMenuItems().then((res3) => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        menuItems: res3.data
                    })
                }).catch(() => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        localNotification: "Something went wrong!",
                        notificationType: ALERT_TYPES.ERROR
                    })
                })
            }).catch(() => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    localNotification: "Something went wrong!",
                    notificationType: ALERT_TYPES.ERROR
                })
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

    resetFormErrors(key) {
        this.setState({
            ...this.state,
            ...key
        })
    }

    validateForm() {
        const { menuItem, quantity } = this.state;

        let hasErrors = false;
        if (menuItem === null || menuItem === "" || menuItem === undefined) {
            this.setState({
                ...this.state,
                menuItemNameError: "Item name is required"
            })
            hasErrors = true;
        }
        if (quantity === "" || quantity === null || quantity === undefined || quantity < 1) {
            this.setState({
                ...this.state,
                qtyError: "valid qunatity is required"
            })
            hasErrors = true;
        }
        return hasErrors;
    }

    addProductsToOrder(e) {
        const { menuType, menuItem, discount, quantity, resOrder, unitPrice } = this.state;
        let currentMenuItem = null;
        let total = (unitPrice * quantity) - (unitPrice * quantity * discount / 100);

        e.preventDefault();
        if (!this.validateForm()) {
            this.setState({
                ...this.state,
                isLoading: true
            })
            MenuItemService.getMenuItemById(menuItem).then((res) => {
                currentMenuItem = res.data;
                MenuResOrderService.addItemsToOrder({ menuItemName: currentMenuItem.menuItemName, menuItemType: menuType, qty: quantity, discount: discount, total: total, rest: resOrder, res: currentMenuItem }).then((res2) => {
                    this.setState({
                        ...this.state,
                        localNotification: "Item added to order!",
                        notificationType: ALERT_TYPES.SUCCESS
                    })
                    MenuResOrderService.getOrderLinesByOrderId(resOrder.menu_order_id).then((res3) => {
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            orderLines: res3.data
                        })
                    }).catch(() => {
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            localNotification: "Something went wrong!",
                            notificationType: ALERT_TYPES.ERROR
                        })
                    })
                }).catch(() => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        localNotification: "Something went wrong!",
                        notificationType: ALERT_TYPES.ERROR
                    })
                })
            }).catch(() => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    localNotification: "Something went wrong!",
                    notificationType: ALERT_TYPES.ERROR
                })
            })

            this.resetForm();
        }
    }

    calculateOrderTotalWithOutDiscountPolicy() {
        const { orderLines } = this.state;

        let total = 0;
        orderLines.map((item) => {
            total = total + parseFloat(item[3]);
            return null;
        })
        return total;
    }

    resetForm() {
        this.setState({
            ...this.state,
            menuType: "",
            menuItem: "",
            discount: 0,
            unitPrice: 0,
            quantity: 1,
        })
    }

    onChangeMenuItem(event, key) {
        let id = parseInt(event.target.value)
        const { menuItems } = this.state;

        let selectedItem = menuItems.filter((item) => {
            return item.menu_item_id === id
        })

        if (selectedItem.length > 0) {
            this.setState({
                ...this.state,
                menuItem: id,
                discount: selectedItem[0].discount,
                unitPrice: selectedItem[0].unitPrice
            }, () => {
                this.resetFormErrors(key)
            })
        }
    }

    onChangeFormFeild(feild, key = null) {
        if (key !== null) {
            this.setState({
                ...this.state,
                ...feild
            }, () => {
                this.resetFormErrors(key)
            })
        } else {
            this.setState({
                ...this.state,
                ...feild
            })
        }
    }

    render() {
        const { isLoading, localNotification, notificationType, menuTypes, menuType, menuItems, menuItem, discount, unitPrice, quantity, orderLines, menuItemNameError, qtyError, validPolicies, finalTotal, showPolicyTable } = this.state;
        const menuTypeOptions = menuTypes.map(({ menuItemType }) => {
            return menuItemType;
        })
        let menuItemOptions = []
        if (menuType !== "" && menuType !== null && menuItems) {
            menuItemOptions = menuItems.filter((item) => {
                return item.menuItemType === menuType
            })
        }
        return (
            <div>
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
                    <Container>
                        <div style={{ marginTop: "10px" }}>
                            {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                        </div>
                        <Row>
                            <Col lg={1} ></Col>
                            <Col lg={4}>
                                <div style={{ marginLeft: "8px" }}>
                                    <label for="foodType">Food Type</label>
                                    <select id="foodType" class="form-control" value={menuType} onChange={(e) => { this.onChangeFormFeild({ menuType: e.target.value }) }}> <option>choose...</option>
                                        {menuTypeOptions.map((item) => {
                                            return (<option value={item}>{item}</option>)
                                        })}
                                    </select>

                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5} >
                                <div className="row">
                                    {menuType !== "" && menuType !== null && (
                                        <div className="card col-md-10 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                            <h3 className="text-center">Order Menu Item</h3>
                                            <div className="card-body">
                                                <div id="f1">
                                                    <form >
                                                        <div class="form-row">
                                                            <div class="form-group col-md-6">
                                                                <label for="foodName">Food Item Name</label>
                                                                <select id="foodNmae" class="form-control" onChange={(event) => { this.onChangeMenuItem(event, { menuItemNameError: null }) }} value={menuItem}>
                                                                    <option>Choose...</option>
                                                                    {menuItemOptions.map((item) => {
                                                                        return (<option value={item.menu_item_id}>{item.menuItemName}</option>)
                                                                    })}
                                                                </select>
                                                                {menuItemNameError !== null && (
                                                                    <div style={{ fontSize: 12, color: "red" }}>{menuItemNameError}</div>
                                                                )}
                                                                <div> <div className="form-row">
                                                                    <div class="form-group col-md-6">
                                                                        <label for="discount">Discount</label>
                                                                        <input type="text" class="form-control" id="discount" disabled value={discount} />

                                                                        <label for="discount">Unit Price</label>
                                                                        <input type="text" class="form-control" id="price" disabled value={unitPrice} />

                                                                        <label for="discount">Quantity</label>
                                                                        <input type="number" class="form-control" id="qty" value={quantity} onChange={(e) => { this.onChangeFormFeild({ quantity: e.target.value }, { qtyError: null }) }} min="1" />
                                                                        {qtyError !== null && (
                                                                            <div style={{ fontSize: 12, color: "red" }}>{qtyError}</div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-row">
                                                            <div class="form-group col-md-4">
                                                                <button id="submit" class="btn " style={{ background: "#bd9660", color: "white" }} onClick={this.addProductsToOrder}>Add</button>
                                                            </div>
                                                            <div class="form-group col-md-4">
                                                                <button id="reset" class="btn " style={{ marginLeft: 30, background: "#bd9660", color: "white" }} onClick={this.resetForm}>Reset</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Col>
                            <Col lg={7} >
                                <div className="row">
                                    <div className="card col-md-10 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                        <div className="container  bg-dark" style={{ color: 'white', marginTop: 10 }} >
                                            <h3 className="text-center" style={{ fontSize: 14, textAlign: "center", marginTop: 5 }}>BILLING    AREA</h3>
                                        </div>
                                        <div className="card-body" style={{ marginBottom: "10px" }}>
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
                                                                <div style={{ display: "flex" }}><span>No Items Found</span></div>
                                                            </tr>
                                                        )}
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>{this.calculateOrderTotalWithOutDiscountPolicy().toFixed(2)}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {orderLines && orderLines.length > 0 && (
                                                <Fragment>
                                                    <div className="container  bg-dark" style={{ color: 'white', padding: 2, margin: 5 }} >
                                                        <h3 className="text-center" style={{ fontSize: 14, textAlign: "center", marginTop: 5 }}>Discount Policy</h3>
                                                    </div>
                                                    <div>
                                                        <div style={{ width: "100%", textAlign: "center" }}>
                                                            <Button className="btn btn-success" onClick={this.getAllApplicablePolicies}>Get Applicable Discount Policies</Button>
                                                        </div>
                                                    </div>
                                                    {showPolicyTable && (
                                                        <div className="row">
                                                            <table className="table table-striped ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Policy Name</th>
                                                                        <th>Description</th>
                                                                        <th>Min Bill Amount</th>
                                                                        <th>Discount(%)</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {validPolicies && validPolicies.length > 0 ? (
                                                                        validPolicies.map((item, index) => {
                                                                            return (
                                                                                <tr key={index}>
                                                                                    <td>{item.name}</td>
                                                                                    <td>{item.description}</td>
                                                                                    <td>{item.min_bill_amount}</td>
                                                                                    <td>{item.discount}</td>
                                                                                    <td><Button onClick={() => { this.calculatePriceAccordingToPolicy(item.discount) }}>Apply</Button></td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    ) : (
                                                                        <tr>
                                                                            <div style={{ display: "flex" }}><span>No Items Found</span></div>
                                                                        </tr>
                                                                    )}
                                                                    {finalTotal && (
                                                                        <tr>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td><span style={{ fontWeight: "800" }}>{finalTotal.toFixed(2)}</span></td>
                                                                        </tr>
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}
                                                </Fragment>
                                            )}
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <Fragment>
                                                    <ReactToPrint
                                                        copyStyles={true}
                                                        content={() => this.componentRef}
                                                        documentTitle={"Bill"}
                                                        removeAfterPrint
                                                    >
                                                        <PrintContextConsumer>
                                                            {({ handlePrint }) =>
                                                                <button
                                                                    className="btn btn-success" style={{ background: "#bd9660", color: "white" }}
                                                                    onClick={() => {
                                                                        handlePrint();
                                                                    }}
                                                                >
                                                                    Print Bill
                                                                    </button>
                                                            }
                                                        </PrintContextConsumer>
                                                    </ReactToPrint>
                                                </Fragment>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div style={{ display: "none" }}>
                            <style type="text/css">
                                {"@media print{@page {size: landscape; margin: 10mm;}}"}
                            </style>
                            {orderLines && (
                                <PrintRestBill
                                    ref={(el) => (this.componentRef = el)}
                                    orderLines={orderLines}
                                    finalTotal={finalTotal}
                                />
                            )}
                        </div>
                    </Container>
                )}
            </div>
        )
    }
}
export default AddOrder;