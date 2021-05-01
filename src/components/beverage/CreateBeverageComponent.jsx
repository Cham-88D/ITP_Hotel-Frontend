import React, { Component } from 'react';
import BeverageService from '../../services/BeverageService';

class CreateBeverageComponent extends Component {

    constructor(props){
        super(props)
        
        this.state={
            Btype:[],
            bev_category:"",

            b_Type:'',
            b_Name:'',
            unit_Price:'',
            discount:'',
            description:'',
            nameError:' ',
            priceError:'',
            discountError:'',
            descriptionError:'',


        }
        this.onChangeBevType = this.onChangeBevType.bind(this);
        this.changeBeverageNameHandler = this.changeBeverageNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
     
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveBeverage = this.saveBeverage.bind(this);
        this.changeBeverageTypeHandler=this.changeBeverageTypeHandler.bind(this);
        this.saveBevType=this.saveBevType.bind(this);
    }

    validate =() => {
    }
    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
        console.log(this.state);
        }

    };


    componentDidMount(){
        this.getBevType();
    }
    getBevType = () =>{
       BeverageService.getBevType().then((res) =>{
      
            this.setState({Btype:  res.data
               
            });
            console.log(this.state.Btype);
        });
        

     }
    saveBeverage =(e)=>{
        e.preventDefault();
        let beverage ={b_Type: this.state.b_Type, b_Name: this.state.b_Name, unit_Price: this.state.unit_Price, discount: parseFloat(this.state.discount), description: this.state.description};
        console.log('beverage =>' + JSON.stringify(beverage));

         BeverageService.createBeverage(beverage).then(res=>{
             this.props.history.push('/beverages');

         });
    }

    saveBevType = (er) =>{
        er.preventDefault();
        alert("succes");

        console.log("2");

        let beverage ={b_Type: this.state.bev_category};
        console.log(beverage);
        console.log("1");
        console.log('beverage => '+ JSON.stringify(beverage));

        BeverageService.createBevType(beverage).then(res =>{
            this.props.history.push('/beverages');
           
        }).catch(()=>{
            alert("unsucess");
        })
             
    }
    changeBeverageCategoryTypeHandler= (event)=>{
        this.setState({BevType: event.target.value});
    }

    onChangeBevType =(event)=>{
        this.setState({...this.state,b_Type: event.target.value});
    }

    changeBeverageTypeHandler = (event)=>{
        this.setState({...this.state,bev_category: event.target.value});
    }

    changeBeverageNameHandler = (event)=>{
        this.setState({...this.state,b_Name: event.target.value});
    }
    changeUnitPriceHandler =(event) =>{
        this.setState({...this.state,unit_Price: event.target.value});
    }
    changeDiscountHandler =(event) =>{
        this.setState({...this.state,discount: event.target.value});
    }
    changeDescriptionHandler=(event) =>{
        this.setState({...this.state,description: event.target.value});
    }
    cancel(){
        this.props.history.push('/beverages');
    }

    


    render() {

        const {Btype} = this.state;
    //    function sendType (){
    //         const newType={
                    
    
    //         }
    
    //         axios.post("http://localhost:8080/api/v1/beverage_item_category",newType).then(()=>{
    
    //         }).catch((e)=>{
    //             alert("error")
    //         })
    
    
    //     }

         function AddCategoryBar() {
             const x = document.getElementById("add-new-cat").style.display;
            if (x === "none") {
                 document.getElementById('add-new-cat').style.display = "block";
               document.getElementById('bt1').style.display = "none";
    
           }
           else {
               document.getElementById('add-new-cat').style.display = "none ";
                 document.getElementById('bt1').style.display = "block";
    
    
             }
         }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Beverages</h3>

                            
                            <button id="bt1" style={{display: "block"}} onClick={AddCategoryBar}>Add Category</button>
                            
                            

                            <div id="add-new-cat" style={{ display: "none" }}> 
                            <div className="form-group">
                                            <label>Beverage Type</label>
                                            <input type="text" placeholder="Beverage Type" name="b_Type" className="form-control" 
                                                        value={this.state.bev_category} onChange={this.changeBeverageTypeHandler} />
                                            </div>
                            {/* <input type="text" placeholder="Beverage Type" name="BevType"  value={this.state.BevType} onChange={this.changeBeverageCategoryTypeHandler} /> */}
                            {/* <input type="text" value={this.state.BevType} onChange={this.changeBeverageCategoryTypeHandler} /> */}
                            <button className="btn btn-success" style={{marginLeft:"5px"}}  onClick={this.saveBevType}>Add</button>
                            <button onClick={AddCategoryBar} className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</button>
                            
                            
                            </div>

                            <div className="card-body">
                                <form >
                                            {/* <div className="form-group">
                                            <label>Beverage Type</label>
                                            <input type="text" placeholder="Beverage Type" name="b_Type" className="form-control" 
                                                        value={this.state.b_Type} onChange={this.changeBeverageTypeHandler} />
                                            </div> */}
                                        <div className="form-group">
                                        <label for="beverage type">Beverage Type</label>
                                        <select id="b_Type" class="form-control" value={this.state.b_Type} onChange={this.onChangeBevType}>
                                            <option selected>Choose...</option>
                                            {Btype.map(({b_Type})=>{
                                                return (<option value={b_Type}>{b_Type}</option>)
                                            })}
                                        </select>
                                        </div>
                                    
                                            <div className="form-group">
                                            <label>Beverage Name</label>
                                            <input type="text" placeholder="Beverage Name" name="b_Name" className="form-control" 
                                                        value={this.state.b_Name} onChange={this.changeBeverageNameHandler} />
                                                        <div style={{color:"red"}}>{this.state.nameError} </div>
                                            </div>
                                            <div className="form-group">
                                            <label>Unit Price</label>
                                            <input  placeholder="Unit Price" name="unit_Price" className="form-control" 
                                                        value={this.state.unit_Price} onChange={this.changeUnitPriceHandler} />
                                                        <div style={{color:"red"}}>{this.state.priceError} </div>
                                                        
                                            </div>
                                            <div className="form-group">
                                            <label>Discount</label>
                                            <input  placeholder="Discount" name="Discount" className="form-control" 
                                                        value={this.state.discount} onChange={this.changeDiscountHandler} />
                                                        <div style={{color:"red"}}>{this.state.discountError} </div>
                                            </div>
                                            <div className="form-group">
                                            <label>Description</label>
                                            <textarea  placeholder="Description" name="description" className="form-control" 
                                                        value={this.state.description} onChange={this.changeDescriptionHandler} />
                                                        <div style={{color:"red"}}>{this.state.descriptionError} </div>
                                            </div>
                                            <button className="btn btn-success" style={{background:"#bd9660",marginLeft:"180px"}} onClick={this.saveBeverage}>Save</button>
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

export default CreateBeverageComponent;