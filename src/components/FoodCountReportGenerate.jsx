import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService';
import '../styles/table.css';

class FoodCountReportGenerate extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodCount: []
        }
        // this.addFoodCount = this.addFoodCount.bind(this);
        
    }

    

    componentDidMount(){
        FoodCountService.getFoodCount().then((res) => {
            this.setState({ foodCount: res.data});

        });
    }

    // addFoodCount(){
    //     this.props.history.push('/add-foodCount/_add');
    // }

    render() {
        return (
            <div>
                <h2 className="tableheading">Food Count</h2>
                {/* <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addFoodCount}>Add FoodCount</button>
                    
                </div> */}
                <br/>
                <div className = "row">
                    <table className="attendtable">
                        <thead>
                            <tr>
                                {/*<th>FoodCount ID</th>*/}
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
                                        {/*<td>{foodcounts.count_id}</td>*/}
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