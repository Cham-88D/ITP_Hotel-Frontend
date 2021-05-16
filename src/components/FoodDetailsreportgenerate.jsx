import React, { Component } from 'react';
import FoodDetailService from '../services/FoodDetailService';
import '../styles/table.css';

class FoodDetailsReportGenerate extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodDetails: []
        }
        
        
    }   


    componentDidMount(){
        FoodDetailService.getFoodDetail().then((res) => {
            this.setState({foodDetails: res.data});
        });
    }

    
    
    render() {

        return (
            <div>
                <h2 className="tableheading">Food Stock Details</h2>
               
                
                <div className = "row">
                    <table className="attendtable">
                        <thead>
                            <tr>
                                <th>Food ID</th>
                                <th>Food Name</th>
                                <th>Food Type</th>
                                <th>Availability (KG or L)</th>
                                <th>Unit Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.foodDetails.map(
                                    foodDetail =>
                                    <tr key = {foodDetail.food_Id }>
                                        <td>{foodDetail.food_Id}</td>
                                        <td>{foodDetail.food_Name}</td>
                                        <td>{foodDetail.food_Type}</td>
                                        <td>{foodDetail.availability}</td>
                                        <td>{foodDetail.unit_Price}</td>

                                        
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


export default FoodDetailsReportGenerate;