import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import FoodDetailService from '../services/FoodDetailService';
import '../styles/table.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
class FoodDetailsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodDetails: [],
            searchId:''
        }
         this.addFoodDetails = this.addFoodDetails.bind(this);
        this.editFoodDetail = this.editFoodDetail.bind(this);
        this.deleteFoodDetail = this.deleteFoodDetail.bind(this);
        this.generatepdf = this.generatepdf.bind(this)
    }

    notify1(){
        toast.info('You pressed cancel Try again', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }

    notify2(){
        toast.error('You Succesfully deleted food detail', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }
    

    deleteFoodDetail(food_Id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            FoodDetailService.deleteFoodDetail(food_Id).then(res=>{
                this.setState({foodDetails: this.state.foodDetails.filter(foodDetails => foodDetails.food_Id !== food_Id)});
                 //confirmtext="You Succesfully deleted food count";
                 this.notify2();
                
           }) ;
        }else{
            this.notify1();
             //confirmtext="You pressed cancel Try again";
         }


        // FoodDetailService.deleteFoodDetail(food_Id).then( res => {
        //     this.setState({foodDetails: this.state.foodDetails.filter(foodDetails => foodDetails.food_Id !== food_Id)});
        // });

    }

//     deleteoldfooddetails(){
//         var confirmtext;
//         if(window.confirm("Are You Sure Want to Delete !")){
//             FoodDetailService.deleteoldfooddetails().then(res=>{
               
//           }) ;
//           confirmtext="You Succesfully deleted food detail";

//         }else{
//            confirmtext="You pressed cancel Try again";
//         }
          
//    }

    editFoodDetail(food_Id){
        this.props.history.push(`/add-foodDetails/${food_Id}`);
    }

    generatepdf(){
        this.props.history.push('/generateReport');
    }

    
    
    addFoodDetails(){
        this.props.history.push('/add-foodDetails/_add');
    }

    componentDidMount(){
        FoodDetailService.getFoodDetail().then((res) => {
            this.setState({foodDetails: res.data});
        });
    }

    searchFoodName(event){
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
                
                <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Food Name" value={this.state.searchId} onChange={this.searchFoodName.bind(this)}/>
                </div>
                <div className = "row">
                    <button style={{marginLeft:755, background: "rgb(199, 161, 60) 0%"}} className = "btn btn-secondary" onClick={this.addFoodDetails}>Add Food Details</button>
                    <button style={{marginLeft:10, background: "#bd1c1c"}} className="btn btn-danger" onClick={this.generatepdf} type='submit'>Generate PDF</button>
                    
                </div>
                <br></br>
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
                                            <button style={{background: "rgb(197, 161, 60) 0%"}} onClick = { () => this.editFoodDetail(foodDetail.food_Id)} className="btn btn-secondary">Update</button>
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