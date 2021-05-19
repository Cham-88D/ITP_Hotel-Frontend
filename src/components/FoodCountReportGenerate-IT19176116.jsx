import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService-IT19176116';
import '../styles/table-IT19176116.css';

class FoodCountReportGenerate extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodCount: []
        }
        
        
    }

    

    componentDidMount(){
        FoodCountService.getFoodCount().then((res) => {
            this.setState({ foodCount: res.data});

        });
    }

    

    render() {
        return (
            <div>
                <h2 className="tableheading">Food Count</h2>
                
                <br/>
                <div className = "row">
                    <table className="attendtable">
                        <thead>
                            <tr>
                                
                                <th>Food Name</th>
                                <th>Date</th>
                                <th>Quantity (KG or L)</th>
                                <th>Type</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.foodCount.map(
                                    foodcounts =>
                                    <tr key = {foodcounts.count_id}>
                                        
                                        <td>{foodcounts.name}</td>
                                        <td>{foodcounts.date}</td>
                                        <td>{foodcounts.quantity}</td>
                                        <td>{foodcounts.type}</td>
                                        
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

export default FoodCountReportGenerate;