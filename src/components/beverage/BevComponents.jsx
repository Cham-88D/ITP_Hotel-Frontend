import React, { Component } from 'react';
import BeverageService from '../../adapters/BeverageService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import userRoles from "../../constants/UserRole";

import "./styles.css";
import { Fragment } from 'react';

class BevComponents extends Component {

    constructor(props) {
        super(props)

        this.state = {
            beverages: [],
            searchKey: null
        }

        this.addBeverage = this.addBeverage.bind(this);
        this.editBeverage = this.editBeverage.bind(this);
        this.deleteBeverage = this.deleteBeverage.bind(this);
        this.createOrder = this.createOrder.bind(this);
        // this.viewBeverage=this.viewBeverage.bind(this);
        this.onClickDeleteBeverage = this.onClickDeleteBeverage.bind(this);
        this.searchBeverages = this.searchBeverages.bind(this);
        this.onChangeSearchFeild = this.onChangeSearchFeild.bind(this);
    }

    onChangeSearchFeild(event) {
        let value = event.target.value;
        this.setState({
            ...this.state,
            searchKey: value
        })
    }

    searchBeverages() {
        const { beverages, searchKey } = this.state;

        if (searchKey === "" || searchKey === null) {
            return beverages
        } else {

            let filteredBeverages = [];
            beverages.map((item) => {
                if (item.b_Name.toLowerCase().includes(searchKey.toLowerCase())) {
                    filteredBeverages.push(item);
                }
                return null;
            })

            return filteredBeverages;
        }
    }

    onClickDeleteBeverage(id) {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this beverage',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteBeverage(id)
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    }

    deleteBeverage(bev_ID) {
        BeverageService.deleteBeverage(bev_ID).then(res => {
            this.setState({ beverages: this.state.beverages.filter(beverage => beverage.bev_ID !== bev_ID) });

        });

    }

    // viewBeverage(bev_ID){
    //     this.props.history.push(`/view-beverages/${bev_ID}`)
    // }



    editBeverage(bev_ID) {

        this.props.history.push(`/update-beverages/${bev_ID}`);
    }

    componentDidMount() {
        BeverageService.getBeverage().then((res) => {
            this.setState({ beverages: res.data });
        });
        BeverageService.getBevType().then((res) => {
            console.log(
                res
            )
        })
    }
    addBeverage() {
        this.props.history.push('/add-beverages');
    }

    createOrder() {
        this.props.history.push('/orders');
    }

    render() {
        return (
            <div className="view-all-beverage-component" style={{ marginTop: "20px" }}>
                {localStorage.getItem("role") === userRoles[0] ? (
                    <center>
                        <Fragment>
                            <h2 className="text-center">Beverage List</h2>
                            <div className="row">
                                <div className="main-btn-wrapper">
                                    <div className="btn-container">
                                        <button style={{ background: "#bd9660" }} className="btn btn-primary" onClick={this.addBeverage}>Add Beverage</button>
                                    </div>
                                    <div className="btn-container">
                                        <button style={{ background: "#bd9660" }} className="btn btn-primary" onClick={this.createOrder}>Create Order</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input type="text" placeholder="Beverage Name" name="b_Name" className="form-control"
                                        value={this.state.searchKey} onChange={this.onChangeSearchFeild} />
                                </div>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Beverage ID</th>
                                            <th>Beverage Type</th>
                                            <th>Beverage Name</th>
                                            <th>Unit Price</th>
                                            <th>Discount</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {console.log("searchBeverages", this.searchBeverages())}
                                        {this.searchBeverages() && this.searchBeverages().length > 0 &&
                                            this.searchBeverages().map((beverage) => {
                                                return (
                                                    <tr key={beverage.bev_ID}>
                                                        <td>{beverage.bev_ID}</td>
                                                        <td>{beverage.b_Type}</td>
                                                        <td>{beverage.b_Name}</td>
                                                        <td>{beverage.unit_Price}</td>
                                                        <td>{beverage.discount}</td>
                                                        <td>{beverage.description}</td>
                                                        <td>
                                                            <div style={{ display: "flex" }}>
                                                                <button style={{ background: "#bd9660" }} onClick={() => this.editBeverage(beverage.bev_ID)} className="btn btn-info">Update</button>
                                                                <button style={{ marginLeft: "5px" }} onClick={() => this.onClickDeleteBeverage(beverage.bev_ID)} className="btn btn-danger">Delete</button>
                                                            </div>
                                                            {/* <button style={{marginLeft:"10px"}} onClick={()=> this.viewBeverage(beverage.bev_ID)} className="btn btn-info">View</button> */}
                                                        </td>

                                                    </tr>
                                                )
                                            })

                                        }

                                    </tbody>
                                </table>
                            </div>
                        </Fragment>
                    </center>
                ) : (
                    <center>
                        <div>
                            <span>Bar Attentend role doesn't have permission to manage beverages</span>
                        </div>
                        <div>
                            <button style={{ background: "#bd9660" }} onClick={()=>{this.props.history.push("/orders")}} className="btn btn-info">Navigate to order management</button>
                        </div>
                    </center>
                )}
            </div>
        );
    }
}

export default BevComponents;