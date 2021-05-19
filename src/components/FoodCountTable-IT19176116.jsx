import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService-IT19176116';
import '../styles/table-IT19176116.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class FoodCountComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodCount: [],
            searchId:''
        }
         this.addFoodCount = this.addFoodCount.bind(this);
        this.editFoodCount = this.editFoodCount.bind(this);
        this.deleteFoodCount = this.deleteFoodCount.bind(this);
        this.generatepdf = this.generatepdf.bind(this)
    }

    notify1(){
        toast.info('You pressed cancel Try again', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }

    notify2(){
        toast.error('You Succesfully deleted food count', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }

    deleteFoodCount(count_id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            FoodCountService.deleteFoodCount(count_id).then(res=>{
                this.setState({foodCount: this.state.foodCount.filter(foodcounts => foodcounts.count_id !== count_id)});
                
                this.notify2();
           }) ;
        }else{
            this.notify1();
            
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

    searchFoodType(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    render() {

        let filtertype = this.state.foodCount.filter((
            foodcounts)=>{
                return foodcounts.type.toLowerCase().indexOf(this.state.
                    searchId.toLowerCase())!==-1;
            }
        );

        return (
            <div>
                <h2 className="tableheading">Food Count</h2>

                <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Type (Add or Consumed)" value={this.state.searchId} onChange={this.searchFoodType.bind(this)}/>
                </div>                

                <div className = "row">
                    <button style={{marginLeft:755, background: "rgb(199, 161, 60) 0%"}} className = "btn btn-secondary" onClick={this.addFoodCount}>Add FoodCount</button>
                    <button style={{marginLeft:10, background: "#bd1c1c"}} className="btn btn-danger" onClick={this.generatepdf} type='submit'>Generate Report</button>
                    
                </div>
                <br/>
                <div className = "row">
                    <table className="attendtable">
                        <thead>
                            <tr>
                                
                                <th>Food Name</th>
                                <th>Date</th>
                                <th>Quantity (KG or L)</th>
                                <th>Type</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                filtertype.map(
                                    foodcounts=>
                                // this.state.foodCount.map(
                                //     foodcounts =>
                                    <tr key = {foodcounts.count_id}>
                                        
                                        <td>{foodcounts.name}</td>
                                        <td>{foodcounts.date}</td>
                                        <td>{foodcounts.quantity}</td>
                                        <td>{foodcounts.type}</td>
                                        <td>
                                            <button style={{background: "rgb(197, 161, 60) 0%"}} onClick = { () => this.editFoodCount(foodcounts.count_id)} className="btn btn-secondary">Update</button>
                                            <button style={{marginLeft: "20px"}} onClick = { () => this.deleteFoodCount(foodcounts.count_id)} className="btn btn-danger">Delete</button>
                                            <button style={{background: "rgb(197, 161, 60)", marginLeft: "20px"}} onClick = { () => this.viewFoodCount(foodcounts.count_id)} className="btn btn-secondary">View</button>
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