import React, { Component } from 'react';
import FoodDetailService from '../services/FoodDetailService-IT19176116';
import '../styles/form-IT19176116.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
class CreateFoodDetailComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step 2
            food_Id: this.props.match.params.food_Id,
            food_Name: '',
            availability: '',
            unit_Price: '',
            food_Type: '',
            nameError: '',
            availabilityError: '',
            unitpriceError: '',
            foodtypeError: ''
            

        }
        this.changefoodnamehandler = this.changefoodnamehandler.bind(this);
        this.changeavailabilityhandler = this.changeavailabilityhandler.bind(this);
        this.changeunitpricehandler = this.changeunitpricehandler.bind(this);
        this.changetypehandler = this.changetypehandler.bind(this);
        this.saveOrUpdatefooddetail = this.saveOrUpdatefooddetail.bind(this);
    }

    notify(){
        toast.warn('Food Detail Added Successfully!', {position: toast.POSITION.TOP_CENTER})

    }

    notify1(){
        toast.warn('Food Detail Updated Successfully!', {position: toast.POSITION.TOP_CENTER})
    }

    //step 3
    componentDidMount(){

        //step 4
        if(this.state.food_Id === '_add'){
            return
        }else{
            FoodDetailService.getFoodDetailById(this.state.food_Id).then((res) => {
                let foodDetail = res.data;
                this.setState({food_Name: foodDetail.food_Name,
                    availability: foodDetail.availability, 
                    unit_Price: foodDetail.unit_Price, 
                    food_Type: foodDetail.food_Type
                    });
            });

        }
        
    }
    

    validate = () => {
        let nameError= '';
        let availabilityError= '';
        let unitpriceError= '';
        let foodtypeError= '';

        if (!this.state.food_Name){
            nameError = "Please fill out this field";
        }

        if (!this.state.availability){
            availabilityError = "Please fill out this field";
        }
        else if(this.state.availability<1){
            availabilityError = "invalide availability";
        }

        if (!this.state.unit_Price){
            unitpriceError = "Please fill out this field";
        }

        if (!this.state.food_Type){
            foodtypeError = "Please choose a food type";
        }

        if (nameError || availabilityError || unitpriceError || foodtypeError) {
            this.setState({ nameError, availabilityError, unitpriceError, foodtypeError});
            return false;
        }

        return true;
    };
    

    saveOrUpdatefooddetail= (e) => {
        e.preventDefault();
        let foodDetail = {food_Name: this.state.food_Name, availability: this.state.availability, unit_Price: this.state.unit_Price, food_Type: this.state.food_Type};
        const isValid = this.validate();
        if (isValid){
            console.log('foodDetail => ' +JSON.stringify(foodDetail));
        
            //step 5
            if(this.state.food_Id === '_add'){
                FoodDetailService.createFoodDetail(foodDetail).then(res =>{
                    this.notify();
                    this.props.history.push('/foodDetails')
                });
            }else{
                FoodDetailService.updateFoodDetail(foodDetail, this.state.food_Id).then( res => {
                    this.notify1();
                    this.props.history.push('/foodDetails');
                });
            }

        }

        
    }
    
    changefoodnamehandler= (event) => {
        this.setState({food_Name: event.target.value});
    }

    changeavailabilityhandler= (event) => {
        this.setState({availability: event.target.value});
    }

    changeunitpricehandler= (event) => {
        this.setState({unit_Price: event.target.value});
    }

    changetypehandler= (event) => {
        this.setState({food_Type: event.target.value});
    }

    getTitle(){
        if(this.state.food_Id === '_add'){
            return <h3 className="text-center" /*className = "table-heading"*/>Add Food Stock Details</h3>
        }else{
            return <h3 className="text-center" /*className = "table-heading"*/>Update Food Stock Details</h3>
        }
    }

    cancel(){
        this.props.history.push('/foodDetails');
    }

    render() {
        
        return (
            <div>
                <br/>
                    <div className="container" style={{marginTop:20}}>
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                                {
                                     this.getTitle()
                                }
                                <div className="card-body">
                                    <form>
                                        <div className = "form-group" >
                                                <lable> Food Name: </lable>
                                                <br/>
                                                <input placeholder="Food Name" name="food_Name" className = "form-control" 
                                                    value={this.state.food_Name} onChange={this.changefoodnamehandler } style={{marginTop:6}}/>
                                                
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.nameError}</div>

                                            </div>
                                            <div className = "form-group">
                                                <lable> Availability (KG or L): </lable>
                                                <br/>
                                                <input placeholder="Availability" name="availability" className = "form-control" 
                                                    value={this.state.availability} onChange={this.changeavailabilityhandler} style={{marginTop:6}}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.availabilityError}</div>
                                            </div>
                                            <div className = "form-group">
                                                <lable> Unit Price: </lable>
                                                <br/>
                                                <input placeholder="Unit Price" name="unit_Price" className = "form-control" 
                                                    value={this.state.unit_Price} onChange={this.changeunitpricehandler} style={{marginTop:6}}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.unitpriceError}</div>

                                            </div>

                                            <div className = "form-group">
                                                <lable> Food Type: </lable>
                                                <br/>
                                                
                                                <select placeholder = "Choose" name="food_Type" className = "form-control"
                                                 value={this.state.food_Type} onChange={this.changetypehandler} style={{marginTop:6}}>
                                                     <option value="">Choose</option>
                                                     <option value="Vegetable">Vegetable</option>
                                                     <option value="Fruit">Fruit</option>
                                                     <option value="DryFood">Dry Food</option>
                                                     <option value="Meat">Meat</option>
                                                     <option value="Diary">Diary</option>
                                                     <option value="Leaves">Leaves</option>
                                                     <option value="Bulbs">Bulbs</option>
                                                     <option value="Seeds">Seeds</option>
                                                     <option value="Other">Other</option>
                                                 </select>

                                                 <div style={{fontSize: 12, color: "red"}}>{this.state.foodtypeError}</div>

                                            </div>

                                            <button className="forminputbtn1" onClick={this.saveOrUpdatefooddetail}>Submit</button>
                                            <button  class="btn " style={{marginLeft:30, background: "rgb(209, 83, 83)",color:"white"}} onClick={this.cancel.bind(this)} > Cancel</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    
            </div>
        );
    
    }
}

export default CreateFoodDetailComponent;