import React, { Component } from 'react';
import MenuItemService from '../services/MenuItemService';

class UpdateMenuItem extends Component {

    constructor(props){
        super(props)
     

        this.state= {

            id: this.props.match.params.id,
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
        this.updateMenuItem = this.updateMenuItem.bind(this);
           
    }

    componentDidMount(){
        MenuItemService.getMenuItemById(this.state.id).then((res) =>{
            let menuItem= res.data;
            this.setState({menuItemType: menuItem.menuItemType,
                menuItemName: menuItem.menuItemName,
                unitPrice: menuItem.unitPrice,
                description: menuItem.description,
                discount: menuItem.discount
            });
        });

        
    }

           
    updateMenuItem = (e) =>{
        e.preventDefault();

        let menuItem ={menuItemType: this.state.menuItemType, menuItemName: this.state.menuItemName, unitPrice: this.state.unitPrice, description: this.state.description, discount: this.state.discount};
        console.log('menuItem => '+ JSON.stringify(menuItem));

       
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
                                <h3 className="text-center">Update Menu Item</h3>
                                <div className="card-body">

                                <form>
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                            <label for="menu_item_type">Menu Item Type</label>
                                             <input type="text" class="form-control"   id="menu_item_type" value={this.state. menuItemType} onChange={this.changeMenuItemTypeHandler}/>
                                            
                                            
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="menu_item_name">Menu Item Name</label>
                                            <input type="text" class="form-control" id="menu_item_name"  value={this.state.menuItemName} onChange={this.changeMenuItemNameHandler}/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group  col-md-6">
                                            <label for="unit_price">Unit Price</label>
                                            <input type="text" class="form-control" id="unit_price"  value={this.state.unitPrice} onChange={this.changeUnitPriceHandler}/>
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
                                             <button type="submit" id="submit" class="btn btn-primary" onClick={this.updateMenuItem}>Update</button>
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

export default UpdateMenuItem;