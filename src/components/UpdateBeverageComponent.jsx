import React, { Component } from 'react';
import BeverageService from '../services/BeverageService';

class UpdateBeverageComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            bev_ID: this.props.match.params.bev_ID,
           //id: this.props.match.params.id,
            b_Type:'',
            b_Name:'',                             
            unit_Price:'',
            description:'',
            discount:'',
          
        }
        this.changeBeverageTypeHandler = this.changeBeverageTypeHandler.bind(this);
        this.changeBeverageNameHandler = this.changeBeverageNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateBeverage = this.updateBeverage.bind(this);
        
        
    }

     componentDidMount(){
         BeverageService.getBeverageByID(this.state.bev_ID).then( (res) => {

                let beverage =res.data;
                this.setState({b_Type: beverage.b_Type,
                    b_Name: beverage.b_Name,
                    unit_Price: beverage.unit_Price,
                    description: beverage.description,
                    discount: beverage.discount
                    
                
                });
               
         });
     }

    updateBeverage =(e)=>{
        e.preventDefault();
        let beverage ={b_Type: this.state.b_Type,b_Name: this.state.b_Name,unit_Price: this.state.unit_Price,description: this.state.description,discount: this.state.discount,};
        console.log('beverage =>' + JSON.stringify(beverage));

        BeverageService.updateBeverage(beverage, this.state.bev_ID).then(res =>{
            this.props.history.push('/beverages');
        });
    }
    changeBeverageTypeHandler = (event)=>{
        this.setState({b_Type: event.target.value});
    }

    changeBeverageNameHandler = (event)=>{
        this.setState({b_Name: event.target.value});
    }
    changeUnitPriceHandler =(event) =>{
        this.setState({unit_Price: event.target.value});
    }
    changeDiscountHandler =(event) =>{
        this.setState({discount: event.target.value});
    }
    changeDescriptionHandler=(event) =>{
        this.setState({description: event.target.value});
    }
    cancel(){
        this.props.history.push('/beverages');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Beverage </h3>
                            <div className="card-body">
                                <form >
                                            <div className="form-group">
                                            <label>Beverage Type</label>
                                            <input type="text" placeholder="Beverage Type" name="b_Type" className="form-control" 
                                                        value={this.state.b_Type} onChange={this.changeBeverageTypeHandler} />
                                            </div>
                                    
                                            <div className="form-group">
                                            <label>Beverage Name</label>
                                            <input type="text" placeholder="Beverage Name" name="b_Name" className="form-control" 
                                                        value={this.state.b_Name} onChange={this.changeBeverageNameHandler} />
                                            </div>
                                            <div className="form-group">
                                            <label>Unit Price</label>
                                            <input  placeholder="Unit Price" name="unit_Price" className="form-control" 
                                                        value={this.state.unit_Price} onChange={this.changeUnitPriceHandler} />
                                            </div>
                                           
                                            <div className="form-group">
                                            <label>Description</label>
                                            <textarea  placeholder="Description" name="description" className="form-control" 
                                                        value={this.state.description} onChange={this.changeDescriptionHandler} />
                                            </div>
                                            <div className="form-group">
                                            <label>Discount</label>
                                            <input  placeholder="Discount" name="Discount" className="form-control" 
                                                        value={this.state.discount} onChange={this.changeDiscountHandler} />
                                            </div>
                                            <button style={{marginLeft:"180"}} className="btn btn-success" onClick={this.updateBeverage}>Update</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                    
                                </form>   
                            </div>
                        </div>
                    </div>
                </div>
                
                       
                
            </div>
        );
    }
}


export default UpdateBeverageComponent;