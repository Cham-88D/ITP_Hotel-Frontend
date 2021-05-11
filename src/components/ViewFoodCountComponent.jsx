import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService';

class ViewFoodCountComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            count_id: this.props.match.params.count_id,
            foodCount: {}
        }
    }

    componentDidMount(){
        FoodCountService.getFoodCountById(this.state.count_id).then( res => {
            this.setState({foodCount: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Food Count Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <lable> Food Name :</lable>
                            <div> { this.state.foodCount.name } </div>
                        </div>
                        <div className = "row">
                            <lable> Quantity : </lable>
                            <div> { this.state.foodCount.quantity } </div>
                        </div>
                        <div className = "row">
                            <lable> Date : </lable>
                            <div> { this.state.foodCount.date } </div>
                        </div>
                        <div className = "row">
                            <lable> Type : </lable>
                            <div> { this.state.foodCount.type } </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewFoodCountComponent;
