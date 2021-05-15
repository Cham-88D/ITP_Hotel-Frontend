import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService';
import '../styles/table.css';

class FoodCountComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodCount: []
        }
         this.addFoodCount = this.addFoodCount.bind(this);
        this.editFoodCount = this.editFoodCount.bind(this);
        this.deleteFoodCount = this.deleteFoodCount.bind(this);
        this.generatepdf = this.generatepdf.bind(this)
    }

    deleteFoodCount(count_id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            FoodCountService.deleteFoodCount(count_id).then(res=>{
                this.setState({foodCount: this.state.foodCount.filter(foodcounts => foodcounts.count_id !== count_id)});
                confirmtext="You Succesfully deleted food count";
           }) ;
        }else{
            confirmtext="You pressed cancel Try again";
         }


        // FoodCountService.deleteFoodCount(count_id).then( res => {
        //     this.setState({foodCount: this.state.foodCount.filter(foodcounts => foodcounts.count_id !== count_id)});
        // });

    }

    deleteoldfoodcount(){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            FoodCountService.deleteoldfoodcount().then(res=>{
               
          }) ;
          confirmtext="You Succesfully deleted food count";

        }else{
           confirmtext="You pressed cansel Try again";
        }
          
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

    addFoodCount(){
        this.props.history.push('/add-foodCount/_add');
    }

    generatepdf(){
        this.props.history.push('/generateFoodCountReport');
    }

    render() {
        return (
            <div>
                <h2 className="tableheading">Food Count</h2>
                {/* <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addFoodCount}>Add FoodCount</button>
                    
                </div> */}

                <div className = "row">
                    <button style={{marginLeft:755}} className = "btn btn-primary" onClick={this.addFoodCount}>Add FoodCount</button>
                    <button style={{marginLeft:10}} className="btn btn-info" onClick={this.generatepdf} type='submit'>Generate PDF</button>
                    
                </div>
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
                                            <button style={{background: "rgb(197, 161, 60) 0%"}} onClick = { () => this.editFoodCount(foodcounts.count_id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.deleteFoodCount(foodcounts.count_id)} className="btn btn-danger">Delete</button>
                                            <button style={{background: "rgb(197, 161, 60)", marginLeft: "20px"}} onClick = { () => this.viewFoodCount(foodcounts.count_id)} className="btn btn-info">View</button>
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