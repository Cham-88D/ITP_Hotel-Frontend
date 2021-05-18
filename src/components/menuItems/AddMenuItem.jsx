import React, { Component } from 'react';

import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import Alert from "../alert";
import ALERT_TYPES from "../../constants/AlertTypes";
import MenuItemService from '../../adapters/MenuItemService';

import 'bootstrap-css-only/css/bootstrap.min.css';
import { isValidName } from '../shared/utils';


const initialState = {
    type: [],
    newMenuItemType: "",
    newMenuItemTypeError: "",

    menuItemType: '',
    menuItemName: '',
    unitPrice: '',
    description: '',
    discount: '',
    menuItemTypeError: '',
    menuItemNameError: '',
    unitPriceError: '',
    descriptionError: '',
    discountError: '',

    localNotification: null,
    isLoading: false,
    notificationType: null,
    menuTypes: []
}


class AddMenuItem extends Component {
    interval = null;
    constructor(props) {
        super(props)

        this.state = initialState;

        this.changeMenuItemTypeHandler = this.changeMenuItemTypeHandler.bind(this);
        this.changeMenuItemNameHandler = this.changeMenuItemNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.saveMenuItem = this.saveMenuItem.bind(this);
        this.saveMenuType = this.saveMenuType.bind(this);

        this.onChangeNewMenuItemType = this.onChangeNewMenuItemType.bind(this);
        this.validateNewMenuTypeForm = this.validateNewMenuTypeForm.bind(this);

    }

    validateNewMenuTypeForm() {
        const { newMenuItemType } = this.state;
        let hasErrors = false;
        if (newMenuItemType === "" ||newMenuItemType===null||newMenuItemType===undefined || !isValidName(newMenuItemType) ) {
            this.setState({
                ...this.state,
                newMenuItemTypeError: "Menu type is required and can not contain numbers!"
            })
            hasErrors = true
        }
        return hasErrors;
    }

    onChangeNewMenuItemType(type) {
        this.setState({
            ...this.state,
            newMenuItemType: type,
            newMenuItemTypeError: ""
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
                isLoading: false,
                menuTypes: res.data
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

    validateMenuItemForm = () => {
        let menuItemTypeError = "";
        let menuItemNameError = "";
        let unitPriceError = "";
        let descriptionError = "";
        let discountError = "";
        if (!this.state.menuItemType) {
            menuItemTypeError = "Should select item type";
        }
        if (this.state.unitPrice === ""||this.state.unitPrice===null || this.state.unitPrice=== undefined || isNaN(this.state.unitPrice) || this.state.unitPrice<0 ) {
            unitPriceError = "Unit price canot be null and should be valid";
        }
        if (this.state.description === ""||this.state.description===null||this.state.description===undefined|| !isValidName(this.state.description)) {
            descriptionError = "Description canot be null and can not contain numbers";
        }
        if (this.state.discount === "" || this.state.discount===null || this.state.discount===undefined || isNaN(this.state.discount)|| this.state.discount<0 || this.state.discount>100) {
            discountError = "Discount canot be null and should be valid";
        }
        if (this.state.menuItemName === "" || this.state.menuItemName === null || this.state.menuItemName === undefined || !isValidName(this.state.menuItemName)) {
            menuItemNameError = "Item name canot be null and can not contain numbers";
        }

        if (menuItemNameError || menuItemTypeError || unitPriceError || descriptionError || discountError) {
            this.setState({ menuItemNameError, menuItemTypeError, unitPriceError, descriptionError, discountError });
            return false;
        }
        return true;
    };

    validateMenuTypeForm = () => {
        let menuItemTypeError = "";
        if (!this.state.menuItemType) {
            menuItemTypeError = "item type canot be null";
        }
        if (menuItemTypeError) {
            this.setState({ menuItemTypeError });
            return false;
        }
        return true;

    };

    saveMenuItem = (e) => {
        e.preventDefault();

        const isValid = this.validateMenuItemForm();
        if (isValid) {

            this.setState(initialState);

            let menuItem = { menuItemType: this.state.menuItemType, menuItemName: this.state.menuItemName, unitPrice: this.state.unitPrice, description: this.state.description, discount: this.state.discount };
            console.log('menuItem => ' + JSON.stringify(menuItem));

            MenuItemService.addMenuItem(menuItem).then(res => {
                this.props.history.push('/menuItems');
            });

        }
    }

    saveMenuType = (er) => {
        const { newMenuItemType } = this.state;

        er.preventDefault();
        if (!this.validateNewMenuTypeForm()) {

            this.setState({
                ...this.state,
                isLoading: true,
            })
            MenuItemService.addMenuType({ menuItemType: newMenuItemType }).then((res) => {
                this.setState({
                    ...this.state,
                    localNotification: "Menu item type saved!",
                    notificationType: ALERT_TYPES.SUCCESS
                })
                MenuItemService.getAllMenuItemTypes().then((res2) => {
                    this.setState({
                        ...this.state,
                        isLoading: false,
                        menuTypes: res2.data
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
    }


    changeMenuItemTypeHandler = (event) => {
        this.setState({ menuItemType: event.target.value });
        console.log(this.state.menuItemType)
    }

    changeMenuItemNameHandler = (event) => {
        this.setState({ menuItemName: event.target.value });
    }

    changeUnitPriceHandler = (event) => {
        this.setState({ unitPrice: event.target.value });
    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    changeDiscountHandler = (event) => {
        this.setState({ discount: event.target.value });
    }

    cancel() {
        this.props.history.push('/menuTtems');
    }

    render() {
        const { newMenuItemType, newMenuItemTypeError, menuTypes, isLoading, localNotification, notificationType } = this.state;
        const menuTypeOptions = menuTypes.map(({ menuItemType }) => {
            return menuItemType;
        })
        return (
            <div >
                <Container >
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
                        <Row>
                            {localNotification !== "" && localNotification !== null ? (<Alert message={localNotification} type={notificationType} />) : null}
                            <Col lg={5} >
                                <div className="card col-md-6 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                    <h3 className="text-center">Add New Menu Type</h3>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label for="menu_item_name">Menu Item Type</Form.Label>
                                                <Form.Control type="text" id="menu_item_type" placeholder="Menu Item Type" value={newMenuItemType} onChange={(event) => { this.onChangeNewMenuItemType(event.target.value) }} />
                                                {newMenuItemTypeError && (
                                                    <div style={{ fontSize: 12, color: "red" }}>{newMenuItemTypeError}</div>
                                                )}
                                            </Form.Group>
                                        </Form.Row>
                                        <Button variant="btn " id="submit" type="submit" onClick={this.saveMenuType} style={{ marginRight: "40px", background: "#bd9660", color: "white" }}>
                                            Submit</Button>
                                        <Button variant="btn1 " type="reset" style={{ background: "#bd9660", color: "white" }} id="cancel" >
                                            Reset</Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="row">
                                    <div className="card col-md-9 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                        <h3 className="text-center">Add Menu Item</h3>
                                        <div className="card-body">
                                            <form style={{ marginBottom: "40px" }}>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="menu_item_type">Menu Item Type</label>
                                                        <select id="menu_item_type" class="form-control" value={this.state.menuItemType} onChange={this.changeMenuItemTypeHandler} >
                                                            <option value="">choose...</option>
                                                            {menuTypeOptions.map((item) => {
                                                                return (<option value={item}>{item}</option>)
                                                            })}
                                                        </select>
                                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.menuItemTypeError}</div>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="menu_item_name">Menu Item Name</label>
                                                        <input type="text" class="form-control" id="menu_item_name" placeholder="Menu Item Name" value={this.state.menuItemName} onChange={this.changeMenuItemNameHandler} />
                                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.menuItemNameError}</div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group  col-md-6">
                                                        <label for="unit_price">Unit Price</label>
                                                        <input type="number" class="form-control" id="unit_price" placeholder="Unit Price" value={this.state.unitPrice} onChange={this.changeUnitPriceHandler} min="0"/>
                                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.unitPriceError}</div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="description">Description</label>
                                                    <textarea class="form-control" id="description" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                                    <div style={{ fontSize: 12, color: "red" }}>{this.state.descriptionError}</div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="discount">Discount</label>
                                                        <input type="number" class="form-control" id="discount" value={this.state.discount} onChange={this.changeDiscountHandler} min="0" max="100"/>
                                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.discountError}</div>
                                                    </div>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-4" >
                                                        <button type="submit" id="submit" class="btn " style={{ background: "#bd9660", color: "white" }} onClick={this.saveMenuItem}>Submit</button>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <button id="cancel" class="btn " style={{ background: "#bd9660", color: "white" }} onClick={this.cancel.bind(this)} > Cancel
                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}

                </Container>
            </div>
        );
    }




}

export default AddMenuItem;