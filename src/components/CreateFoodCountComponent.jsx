import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService';
import '../styles/form.css';


class CreateFoodCountComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step 2
            count_id: this.props.match.params.count_id,
            name: '',
            date: '',
            quantity: '',
            type: 'Add',
            nameError: '',
            dateError: '',
            quantityError: ''

        }
        this.changefoodnamehandler = this.changefoodnamehandler.bind(this);
        this.changedatehandler = this.changedatehandler.bind(this);
        this.changequantityhandler = this.changequantityhandler.bind(this);
        this.changetypehandler = this.changetypehandler.bind(this);
        this.saveOrUpdatefoodcount = this.saveOrUpdatefoodcount.bind(this);
    }

    //step 3
    componentDidMount(){

        //step 4
        if(this.state.count_id === '_add'){
            return
        }else{
            FoodCountService.getFoodCountById(this.state.count_id).then((res) => {
                let foodcount = res.data;
                this.setState({name: foodcount.name,
                     date: foodcount.date, 
                     quantity: foodcount.quantity, 
                     type: foodcount.type
                    });
            });

        }
        
    }

    validate = () => {
        let nameError= '';
        let dateError= '';
        let quantityError= '';

        if (!this.state.name){
            nameError = "Please fill out this field";
        }

        if (!this.state.date){
            dateError = "Please fill out this field";
        }
        

        if (!this.state.quantity){
            quantityError = "Please fill out this field";
        }
        else if(this.state.quantity<1){
            quantityError = "Invalide quantity";
        }
        

        if (nameError || dateError || quantityError) {
            this.setState({ nameError, dateError, quantityError});
            return false;
        }

        return true;
    }

    saveOrUpdatefoodcount= (e) => {
        e.preventDefault();
        let foodcount = {name: this.state.name, date: this.state.date, quantity: this.state.quantity, type: this.state.type, "employee" : {"id":1}};
        const isValid = this.validate();
        if (isValid){
            console.log('foodcount => ' +JSON.stringify(foodcount));

            //step 5
            if(this.state.count_id === '_add'){
                FoodCountService.createFoodCount(foodcount).then(res =>{
                    this.props.history.push('/foodCount')
                });
            }else{
                FoodCountService.updateFoodCount(foodcount, this.state.count_id).then( res => {
                    this.props.history.push('/foodCount');
                });
            }
        }

        
    }

    changefoodnamehandler= (event) => {
        this.setState({name: event.target.value});
    }

    changedatehandler= (event) => {
        this.setState({date: event.target.value});
    }

    changequantityhandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changetypehandler= (event) => {
        this.setState({type: event.target.value});
    }

    getTitle(){
        if(this.state.count_id === '_add'){
            return <h3 className = "table-heading">Added and Consumed Food</h3>
        }else{
            return <h3 className = "table-heading">Update Food Count</h3>
        }
    }

    render() {
        const {type} = this.state;
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
                                                <input placeholder="Food Name" name="name" className = "form-input" required
                                                    value={this.state.name} onChange={this.changefoodnamehandler}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.nameError}</div>

                                            </div>
                                            <div className = "form-inputs">
                                                <lable className='form-label'> Date: </lable>
                                                <br/>
                                                <input type="date" name="date" className = "form-input" 
                                                    value={this.state.date} onChange={this.changedatehandler}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.dateError}</div>

                                            </div>
                                            <div className = "form-inputs">
                                                <lable className='form-label'> Quantity: </lable>
                                                <br/>
                                                <input placeholder="Quantity" name="quantity" className = "form-input" required
                                                    value={this.state.quantity} onChange={this.changequantityhandler}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div>

                                            </div>
                                            
                                                
                                            <div className = "form-inputs">
                                                <lable className='form-label'> Type (Add or Consumed): </lable>
                                                <div>
                                                <br/>
                                                    <input type="radio" name="type" className="typemeth"
                                                        value="Add" onChange={this.changetypehandler} checked={type === "Add"}/>
                                                    <span className="typemeth"> Add </span>
                                                
                                                    <input type="radio" name="type" className="typemeth"
                                                        value="Consumed" onChange={this.changetypehandler} checked={type === "Consumed"}/>
                                                    <span className="typemeth"> Consumed </span>

                                                </div>
                                            </div>
                                             
                                            
                                            <button className="forminputbtn1" onClick={this.saveOrUpdatefoodcount}>Submit</button>
                                            
                                        </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default CreateFoodCountComponent;