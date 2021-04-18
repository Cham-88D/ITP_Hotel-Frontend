import React, { Component } from 'react';
import { Col, Row, Container, Card,Form,Button } from 'react-bootstrap';
import AddMenuItemService from '../services/AddMenuItemService';
import MenuItemService from '../services/MenuItemService';
import 'bootstrap-css-only/css/bootstrap.min.css';
import UseAddMenuForm from './UseAddMenuForm';

const initialState={
    type:[],
            menuItemType:'',
            menuItemName:'',
            unitPrice:'',
            description:'',
            discount:'',
            menuItemTypeError:'',
            menuItemNameError:'',
            unitPriceError:'',
            descriptionError:'',
            discountError:'',
            TypeError:''

}


class AddMenuItem extends Component {


   


    interval = null;
    constructor(props){
        super(props)
     

        this.state= initialState;

        this.changeMenuItemTypeHandler = this.changeMenuItemTypeHandler.bind(this);
        this.changeMenuItemNameHandler = this.changeMenuItemNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.saveMenuItem = this.saveMenuItem.bind(this);
        this.saveMenuType = this.saveMenuType.bind(this);
  
           
    }



    componentDidMount(){
        this.interval = setInterval(this.getType,600);
       this.getType();
       


        
    }

     getType = () =>{
        MenuItemService.getMenuTypeById().then((res) =>{
      
            this.setState({ type:  res.data
               
            });
            console.log(this.state.type);
        });
        

     }

     validateMenuItemForm =() =>{
       let TypeError="";
       let menuItemNameError="";
       let unitPriceError="";
       let descriptionError="";
       let discountError="";
        if(!this.state.type){
           TypeError = "should select item type";
        }
        if(!this.state.unitPrice){
            unitPriceError = "unit price canot be null";
        }
        if(!this.state.description){
            descriptionError= "description canot be null";
        }
        if(!this.state.discount){
            discountError = "discount canot be null";
        }
       if(!this.state.menuItemName){
           menuItemNameError = "item name canot be null";
       }

       if(menuItemNameError || TypeError || unitPriceError || descriptionError || discountError){
           this.setState({menuItemNameError,TypeError,unitPriceError,descriptionError,discountError});
           return false;
       }
       return true;
     };

     validateMenuTypeForm =() =>{
        let menuItemTypeError="";
        if(!this.state.menuItemType){
            menuItemTypeError = "item type canot be null";
        } 
        if( menuItemTypeError ){
            this.setState({menuItemTypeError});
            return false;
        }
        return true;

     };
           
    saveMenuItem = (e) =>{
        e.preventDefault();

        const isValid = this.validateMenuItemForm();
        if(isValid){

            this.setState(initialState);

        let menuItem ={menuItemType: this.state.menuItemType, menuItemName: this.state.menuItemName, unitPrice: this.state.unitPrice, description: this.state.description, discount: this.state.discount};
        console.log('menuItem => '+ JSON.stringify(menuItem));

        MenuItemService.addMenuItem(menuItem).then(res =>{
            this.props.history.push('/menu items');
        });

         }
    }
    saveMenuType = (er) =>{
        er.preventDefault();
        const isValid = this.validateMenuTypeForm();
        if(isValid){

            this.setState(initialState);

        let menuType ={menuItemType: this.state.menuItemType};
        console.log('menuType => '+ JSON.stringify(menuType));

        MenuItemService.addMenuType(menuType).then(res =>{
            this.props.history.push('/add menu items');
        });
             }
    }


    changeMenuItemTypeHandler=(event) =>{
        this.setState({ menuItemType: event.target.value});
        console.log(this.state.menuItemType)
    }

    changeMenuItemNameHandler=(event) =>{
            this.setState({menuItemName: event.target.value});
    }

    changeUnitPriceHandler=(event) =>{
        this.setState({ unitPrice: event.target.value});
    }

    changeDescriptionHandler=(event) =>{
        this.setState({ description: event.target.value});
    }

    changeDiscountHandler=(event) =>{
        this.setState({  discount: event.target.value});
    }

    cancel(){
        this.props.history.push('/menu items');
    }
    

    render() {
        return (
            <div >
                 
                 <Container >
                    <Row>
                     <Col lg={5} >
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                        <h3 className="text-center">Add New Menu Type</h3>
               
                     <Form>
                        <Form.Row>
                        
                                 <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label for="menu_item_name">Menu Item Type</Form.Label>
                                    <Form.Control type="text" id="menu_item_type" placeholder="Menu Item Type" value={this.state.menuItemType} onChange={this.changeMenuItemTypeHandler}  />
                                    <div style={{fontSize:12, color:"red"}}>{this.state.menuItemTypeError}</div>
                                </Form.Group>
                               

                          
                        </Form.Row>

                            

  

                                <Button variant="btn btn-primary" id="submit" type="submit" onClick={this.saveMenuType} style={{marginRight:"40px"}}>
                                         Submit
                                 </Button>

                                 <Button  variant="btn1 btn-primary" type="reset"  id="cancel" >
                                         Reset
                                 </Button>
                        </Form>
                 
                            
                </div>
                </Col>
                
                <Col lg={7}>
                    <div className="row"> 
                            <div className="card col-md-9 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                                <h3 className="text-center">Add Menu Item</h3>
                                <div className="card-body">
                                            

                                <form style={{marginBottom:"40px"}}>
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                            <label for="menu_item_type">Menu Item Type</label>
                                             <select id="menu_item_type" class="form-control"  value={this.state.menuItemType} onChange={this.changeMenuItemTypeHandler} >
                                             
                                             {
                                                 this.state.type.map(type=>( <option key={type.id} >
                                                     {type.menuItemType}
                                                 </option>
                                                 
                                                  ))
                                             }
                                           
                                            </select>
                                            <div style={{fontSize:12, color:"red"}}>{this.state.menuItemTypeError}</div>
                                           
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="menu_item_name">Menu Item Name</label>
                                            <input type="text" class="form-control" id="menu_item_name" placeholder="Menu Item Name" value={this.state.menuItemName} onChange={this.changeMenuItemNameHandler} />
                                            <div style={{fontSize:12, color:"red"}}>{this.state.menuItemNameError}</div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group  col-md-6">
                                            <label for="unit_price">Unit Price</label>
                                            <input type="text" class="form-control" id="unit_price" placeholder="Unit Price" value={this.state.unitPrice} onChange={this.changeUnitPriceHandler}  />
                                            <div style={{fontSize:12, color:"red"}}>{this.state.unitPriceError}</div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                            <label for="description">Description</label>
                                            <textarea class="form-control" id="description" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                            <div style={{fontSize:12, color:"red"}}>{this.state.descriptionError}</div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="discount">Discount</label>
                                            <input type="text" class="form-control" id="discount" value={this.state.discount} onChange={this.changeDiscountHandler}  />
                                            <div style={{fontSize:12, color:"red"}}>{this.state.discountError}</div>
                                        </div>
                                   
                                     </div>
                                     <div class="form-row">
                                        <div class="form-group col-md-4">
                                             <button type="submit" id="submit" class="btn btn-primary" onClick={this.saveMenuItem}>Submit</button>
                                         </div>
                                         <div class="form-group col-md-4">
                                             <button  id="cancel" class="btn btn-primary"  onClick={this.cancel.bind(this)} >Cancel</button>
                                         </div>
                                    </div>

                                    </form>

                                </div>


                            </div>

                         </div>
                         </Col>
                         </Row>
                         </Container>

                  </div>
        );
    }




}

export default AddMenuItem;