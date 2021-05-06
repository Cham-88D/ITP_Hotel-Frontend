import React, {Component} from "react";
import { Fragment } from "react";
import USER_ROLES from "../../constants/UserRole";
import BevOrderComponent from "./BevOrderComponent";
import ViewOrders from "./ViewOrders";

class OrderManagement extends Component {

    constructor(props){
        super(props)

        this.state ={
            userRole:USER_ROLES.BAR_MANAGER
        }
    }

    componentDidMount(){
        //sent request to get current user role and set to state
    }

    render(){
        const {userRole} = this.state;
        return(
            <Fragment>
                {userRole === USER_ROLES.BAR_MANAGER ? (
                    <ViewOrders/>
                ):(
                    <BevOrderComponent/>
                )}
            </Fragment>
        )
    }
}

export default OrderManagement;