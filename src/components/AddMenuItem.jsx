import React, { Component } from 'react';
import AddMenuItemService from '../services/AddMenuItemService';
import MenuItemService from '../services/MenuItemService';

class AddMenuItem extends Component {
   
    constructor(props){
        super(props)
     

        this.state= {

            menuItemType:'',
            menuItemName:'',
            unitPrice:'',
            description:'',
            discount:''
        }

        this.changeMenuItemTypeHandler = this.changeMenuItemTypeHandler.bind(this);
        this.changeMenuItemNameHandler = this.changeMenuItemNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.saveMenuItem = this.saveMenuItem.bind(this);
           
    }

           
    saveMenuItem = (e) =>{
        e.preventDefault();

        let menuItem ={menuItemType: this.state.menuItemType, menuItemName: this.state.menuItemName, unitPrice: this.state.unitPrice, description: this.state.description, discount: this.state.discount};
        console.log('menuItem => '+ JSON.stringify(menuItem));

        MenuItemService.addMenuItem(menuItem).then(res =>{
            this.props.history.push('/menu items');
        });
    }

    changeMenuItemTypeHandler=(event) =>{
        this.setState({ menuItemType: event.target.value});
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
                 
            <div className="container">
                    <div className="row"> 
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Menu Item</h3>
                                <div className="card-body">

                                <form>
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                            <label for="menu_item_type">Menu Item Type</label>
                                             <select id="menu_item_type" class="form-control" value={this.state. menuItemType} onChange={this.changeMenuItemTypeHandler}>
                                            <option selected>Choose...</option>
                                             <option>...</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="menu_item_name">Menu Item Name</label>
                                            <input type="text" class="form-control" id="menu_item_name" placeholder="Menu Item Name" value={this.state.menuItemName} onChange={this.changeMenuItemNameHandler}/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group  col-md-6">
                                            <label for="unit_price">Unit Price</label>
                                            <input type="text" class="form-control" id="unit_price" placeholder="Unit Price" value={this.state.unitPrice} onChange={this.changeUnitPriceHandler}/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                            <label for="description">Description</label>
                                            <textarea class="form-control" id="description" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="discount">Discount</label>
                                            <input type="text" class="form-control" id="discount" value={this.state.discount} onChange={this.changeDiscountHandler}/>
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
                    </div>

                 
                

                 

            </div>
        );
    }




}

export default AddMenuItem;