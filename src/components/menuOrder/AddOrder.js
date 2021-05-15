import React, { Component, Fragment } from 'react';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';

import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import ResOrderService from '../../adapters/ResOrderService';
import MenuItemService from "../../services/MenuItemService";
import MenuResOrderService from "../../adapters/MenuResOrder";

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

            menuType: "",
            menuItem: "",
            discount: 0,
            unitPrice: 0,
            quantity: 0,
            isLoading: false,
            localNotification: null,
            notificationType: null
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.onChangeMenuItem = this.onChangeMenuItem.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.addProductsToOrder = this.addProductsToOrder.bind(this);
        this.calculateOrderTotalWithOutDiscountPolicy = this.calculateOrderTotalWithOutDiscountPolicy.bind(this);
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

    addProductsToOrder() {
        const { menuType, menuItem, discount, quantity, resOrder, unitPrice } = this.state;
        let currentMenuItem = null;
        let total = (unitPrice * quantity) - (unitPrice * quantity * discount / 100);
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

    calculateOrderTotalWithOutDiscountPolicy(){
        const {orderLines} = this.state;

        let total = 0;
        orderLines.map((item)=>{
            total= total+parseFloat(item[3]);
            return null;
        })

        console.log("total",total)
        return total.toFixed(2)
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

    onChangeMenuItem(event) {
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
            })
        }
    }

    onChangeFormFeild(feild) {
        this.setState({
            ...this.state,
            ...feild
        })
    }

    render() {
        const { isLoading, localNotification, notificationType, menuTypes, menuType, menuItems, menuItem, discount, unitPrice, quantity, orderLines } = this.state;
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
                        {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                        <div class="form-group col-md-6">
                            <label for="foodType">Food Type</label>
                            <select id="foodType" class="form-control" value={menuType} onChange={(e) => { this.onChangeFormFeild({ menuType: e.target.value }) }}> <option>choose...</option>
                                {menuTypeOptions.map((item) => {
                                    return (<option value={item}>{item}</option>)
                                })}
                            </select>
                        </div>
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
                                                                <select id="foodNmae" class="form-control" onChange={this.onChangeMenuItem} value={menuItem}>
                                                                    <option>Choose...</option>
                                                                    {menuItemOptions.map((item) => {
                                                                        return (<option value={item.menu_item_id}>{item.menuItemName}</option>)
                                                                    })}
                                                                </select>
                                                                <div> <div className="form-row">
                                                                    <div class="form-group col-md-6">
                                                                        <label for="discount">Discount</label>
                                                                        <input type="text" class="form-control" id="discount" disabled value={discount} />

                                                                        <label for="discount">Unit Price</label>
                                                                        <input type="text" class="form-control" id="price" disabled value={unitPrice} />

                                                                        <label for="discount">Quantity</label>
                                                                        <input type="number" class="form-control" id="qty" value={quantity} onChange={(e) => { this.onChangeFormFeild({ quantity: e.target.value }) }} min="1"/>
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
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>{this.calculateOrderTotalWithOutDiscountPolicy()}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="form-group col-md-4">
                                                    <Fragment>
                                                        <div style={{ display: "none" }}>
                                                            <style type="text/css">
                                                                {"@media print{@page {size: landscape; margin: 10mm;}}"}
                                                            </style>
                                                            {orderLines && (
                                                                <PrintRestBill
                                                                    ref={(el) => (this.componentRef = el)}
                                                                    orderLines={orderLines}
                                                                />
                                                            )}
                                                        </div>
                                                        <ReactToPrint
                                                            copyStyles={true}
                                                            content={() => this.componentRef}
                                                            documentTitle={"Bill"}
                                                            removeAfterPrint
                                                        >
                                                            <PrintContextConsumer>
                                                                {({ handlePrint }) =>
                                                                    <button
                                                                        className="btn btn-success" style={{ marginLeft: 200, marginTop: 150, marginRight: 250, background: "#bd9660", color: "white" }}
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
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )}
            </div>
        )
    }
}
export default AddOrder;

/*
function AddOrder() {
    const [menu_order_id, setMenu_order_id] = useState("");
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState([]);
    const [gtCategory, getCategory] = useState("");
    const [menuItem, setMenuItem] = useState([]);
    const [disount, setUnitPrice] = useState("");
    const [untPrice, setDiscount] = useState("");
    const [menu, setMenu] = useState("");
    const [d, setd] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [total, setTotal] = useState(0);


    const [menuTypes, setMenuTypes] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/v1/menu_item_category').then((res) => {
    //         setCategory(res.data);
    //         console.log(category);
    //         console.log("yes");
    //     }).catch((err) => {
    //         alert(err)
    //     })


    // }, [])





    function onDisplay() {
        // const x = document.getElementById("f1").style.display;
        // if (x === "none") {
        //     document.getElementById("f1").style.display = 'block'
        // } else {
        //     document.getElementById("f1").style.display = 'block'
        // }

        document.getElementById("f1").style.display = 'block'
        axios.get('http://localhost:8080/api/v1//res_menu_item/type/' + gtCategory).then((res) => {

            setMenuItem(res.data);


            console.log(menuItem);

        }).catch((err) => {
            alert(err)
        })


    }


    function fx(e) {
        console.log(e);
        axios.get('http://localhost:8080/api/v1//res_menu_item/name/' + e).then((res) => {

            setd(res.data);
            console.log(res.data);

        }).catch((err) => {
            alert(err)
        })

    }

    return (





    )

}

export default AddOrder;*/