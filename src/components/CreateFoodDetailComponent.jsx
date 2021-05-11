import React, { Component } from 'react';
import FoodDetailService from '../services/FoodDetailService';
import '../styles/form.css';

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
                    this.props.history.push('/foodDetails')
                });
            }else{
                FoodDetailService.updateFoodDetail(foodDetail, this.state.food_Id).then( res => {
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
            return <h3 className = "table-heading">Add Food Stock Details</h3>
        }else{
            return <h3 className = "table-heading">Update Food Stock Details</h3>
        }
    }

    render() {
        
        return (
            <div>
                <br/>
                    <div className = "form-container">
                        <div className = "row1">
                            <div className = "form-add-count">
                                    {
                                        this.getTitle()
                                    }
                                    <div className = "cardbody"></div>
                                        <form>
                                            <div className = "form-inputs" >
                                                <lable className='form-label'> Food Name: </lable>
                                                <br/>
                                                <input placeholder="Food Name" name="food_Name" className = "form-input" 
                                                    value={this.state.food_Name} onChange={this.changefoodnamehandler}/>
                                                
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.nameError}</div>

                                            </div>
                                            <div className = "form-inputs">
                                                <lable className='form-label'> Availability: </lable>
                                                <br/>
                                                <input placeholder="Availability" name="availability" className = "form-input" 
                                                    value={this.state.availability} onChange={this.changeavailabilityhandler}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.availabilityError}</div>
                                            </div>
                                            <div className = "form-inputs">
                                                <lable className='form-label'> Unit Price: </lable>
                                                <br/>
                                                <input placeholder="Unit Price" name="unit_Price" className = "form-input" 
                                                    value={this.state.unit_Price} onChange={this.changeunitpricehandler}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.unitpriceError}</div>

                                            </div>

                                            <div className = "form-inputs">
                                                <lable className='form-label'> Food Type: </lable>
                                                <br/>
                                                
                                                <select placeholder = "Choose" name="food_Type" className = "form-input"
                                                 value={this.state.food_Type} onChange={this.changetypehandler}>
                                                     <option value="">Choose</option>
                                                     <option value="Vegetable">Vegetable</option>
                                                     <option value="Fruit">Fruit</option>
                                                     <option value="DryFood">Dry Food</option>
                                                     <option value="Meat">Meat</option>
                                                     <option value="Diary">Diary</option>
                                                     <option value="Diary">Other</option>
                                                 </select>

                                                 <div style={{fontSize: 12, color: "red"}}>{this.state.foodtypeError}</div>

                                            </div>
                                             
                                             
                                            
                                            <button className="forminputbtn1" onClick={this.saveOrUpdatefooddetail}>Submit</button>
                                            
                                        </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    
    }
}

export default CreateFoodDetailComponent;