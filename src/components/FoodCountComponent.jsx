import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService';
import '../styles/table.css';

class FoodCountComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodCount: []
        }
        // this.addFoodCount = this.addFoodCount.bind(this);
        this.editFoodCount = this.editFoodCount.bind(this);
        this.deleteFoodCount = this.deleteFoodCount.bind(this);
    }

    deleteFoodCount(count_id){
        FoodCountService.deleteFoodCount(count_id).then( res => {
            this.setState({foodCount: this.state.foodCount.filter(foodcounts => foodcounts.count_id !== count_id)});
        });

    }

    viewFoodCount(count_id){
        this.props.history.push(`/view-foodCount/${count_id}`)
    }

    editFoodCount(count_id){
        this.props.history.push(`/add-foodCount/${count_id}`);
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
                                <th>Action</th>
                                
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
                                        <td>
                                            <button onClick = { () => this.editFoodCount(foodcounts.count_id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.deleteFoodCount(foodcounts.count_id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.viewFoodCount(foodcounts.count_id)} className="btn btn-info">View</button>
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

export default FoodCountComponent;