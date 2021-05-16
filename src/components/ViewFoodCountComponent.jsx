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

    back(){
        this.props.history.push('/foodCount');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-5 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    <h3 className = "text-center">View Food Count Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Food Name :</lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.foodCount.name } </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Quantity (KG or L) : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.foodCount.quantity } </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Date : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.foodCount.date } </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Type : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.foodCount.type } </div>
                        </div>
                        <div class="form-group col-md-6">
                                             <button  class="btn " style={{background: "#bd9660",color:"white",marginLeft:130,marginTop:20}}  onClick={this.back.bind(this)} >Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewFoodCountComponent;
