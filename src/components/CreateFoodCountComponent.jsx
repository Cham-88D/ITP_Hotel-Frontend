import React, { Component } from 'react';
import FoodCountService from '../services/FoodCountService';
import '../styles/form.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
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

    notify(){
        toast.warn('Food Count Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})

    }

    notify1(){
        toast.warn('Food Count Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
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
                    this.notify();
                    this.props.history.push('/foodCount')
                }).catch(error=>{alert("Count Not Available")});
            }else{
                FoodCountService.updateFoodCount(foodcount, this.state.count_id).then( res => {
                    this.notify1();
                    this.props.history.push('/foodCount');
                }).catch(error=>{alert("Count Not Available")});
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
            return <h3 className="text-center" >Added and Consumed Food</h3>
        }else{
            return <h3 className="text-center" >Update Food Count</h3>
        }
    }

    cancel(){
        this.props.history.push('/foodCount');
    }

    render() {
        const {type} = this.state;
        return (
            <div>
                <br/>
                    <div className="container" style={{marginTop:20}}>
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                                    {
                                        this.getTitle()
                                    }
                                    <br></br>
                                    <div className = "cardbody">
                                        <form>
                                            <div className = "form-group col-md-11" >
                                                <lable> Food Name: </lable>
                                                <br/>
                                                <input placeholder="Food Name" name="name" className = "form-control" required
                                                    value={this.state.name} onChange={this.changefoodnamehandler} style={{marginTop:6}}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.nameError}</div>

                                            </div>
                                            <div className = "form-group col-md-11">
                                                <lable> Date: </lable>
                                                <br/>
                                                <input type="date" name="date" className = "form-control" 
                                                    value={this.state.date} onChange={this.changedatehandler} style={{marginTop:6}}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.dateError}</div>

                                            </div>
                                            <div className = "form-group col-md-11">
                                                <lable> Quantity (KG or L): </lable>
                                                <br/>
                                                <input placeholder="Quantity" name="quantity" className = "form-control" required
                                                    value={this.state.quantity} onChange={this.changequantityhandler} style={{marginTop:6}}/>

                                                    <div style={{fontSize: 12, color: "red"}}>{this.state.quantityError}</div>

                                            </div>
                                            
                                                
                                            <div className = "form-group col-md-11">
                                                <lable> Type (Add or Consumed): </lable>
                                                <div>
                                                <br/>
                                                    <input type="radio" name="type" className="typemeth" style={{marginLeft:50}}
                                                        value="Add" onChange={this.changetypehandler} checked={type === "Add"}/>
                                                    <span className="typemeth" style={{marginRight:20}}> Add </span>
                                                
                                                    <input type="radio" name="type" className="typemeth"
                                                        value="Consumed" onChange={this.changetypehandler} checked={type === "Consumed"}/>
                                                    <span className="typemeth" > Consumed </span>

                                                </div>
                                            </div>
                                             <button className="forminputbtn1" style={{marginBottom:30}} onClick={this.saveOrUpdatefoodcount}>Submit</button>
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

export default CreateFoodCountComponent;