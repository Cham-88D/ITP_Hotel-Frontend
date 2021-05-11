import React, { Component } from 'react';
import FoodDetailService from '../services/FoodDetailService';
import '../styles/table.css';

class FoodDetailsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodDetails: [],
            searchId:''
        }
        // this.addFoodDetails = this.addFoodDetails.bind(this);
        this.editFoodDetail = this.editFoodDetail.bind(this);
        this.deleteFoodDetail = this.deleteFoodDetail.bind(this);
    }

    deleteFoodDetail(food_Id){
        FoodDetailService.deleteFoodDetail(food_Id).then( res => {
            this.setState({foodDetails: this.state.foodDetails.filter(foodDetails => foodDetails.food_Id !== food_Id)});
        });

    }

    editFoodDetail(food_Id){
        this.props.history.push(`/add-foodDetails/${food_Id}`);
    }
    
    // addFoodDetails(){
    //     this.props.history.push('/add-foodDetails/_add');
    // }

    componentDidMount(){
        FoodDetailService.getFoodDetail().then((res) => {
            this.setState({foodDetails: res.data});
        });
    }

    searchMenuId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }
    
    render() {

        let filterfood_Name = this.state.foodDetails.filter((
            foodDetail)=>{
                return foodDetail.food_Name.toLowerCase().indexOf(this.state.
                    searchId.toLowerCase())!==-1;
            }
        );

        return (
            <div>
                <h2 className="tableheading">Food Stock Details</h2>
                {/* <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addFoodDetails}>Add Food Details</button>
                </div> */}
                <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Food Name" value={this.state.searchId} onChange={this.searchMenuId.bind(this)}/>
                    
                </div>
                <div className = "row">
                    <table className="attendtable">
                        <thead>
                            <tr>
                                <th>Food ID</th>
                                <th>Food Name</th>
                                <th>Food Type</th>
                                <th>Availability (KG or L)</th>
                                <th>Unit Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                filterfood_Name.map(
                                    foodDetail=>
                                // this.state.foodDetails.map(
                                //     foodDetail =>
                                    <tr key = {foodDetail.food_Id }>
                                        <td>{foodDetail.food_Id}</td>
                                        <td>{foodDetail.food_Name}</td>
                                        <td>{foodDetail.food_Type}</td>
                                        <td>{foodDetail.availability}</td>
                                        <td>{foodDetail.unit_Price}</td>

                                        <td>
                                            <button onClick = { () => this.editFoodDetail(foodDetail.food_Id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.deleteFoodDetail(foodDetail.food_Id)} className="btn btn-danger">Delete</button>
                                            
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                
            </div>
        );
    }
}

export default FoodDetailsComponent;