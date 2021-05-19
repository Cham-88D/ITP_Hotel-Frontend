import React, { Component } from 'react';
import MenuItemService from '../../adapters/MenuItemService';
import { isValidName ,isValidDescription} from '../shared/utils';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



class UpdateMenuItem extends Component {

    constructor(props){
        super(props)
     

        this.state= {

           // id: this.props.match.params.id,
           id: this.props.match.params.id,
            menuItemType:'',
            menuItemName:'',
            unitPrice:'',
            description:'',
            discount:'',
            menuItemTypeError:'',
            menuItemNameError:'',
            unitPriceError:'',
            descriptionError:'',
            discountError:''

        }

        this.changeMenuItemTypeHandler = this.changeMenuItemTypeHandler.bind(this);
        this.changeMenuItemNameHandler = this.changeMenuItemNameHandler.bind(this);
        this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDiscountHandler = this.changeDiscountHandler.bind(this);
        this.updateMenuItem = this.updateMenuItem.bind(this);
        this.onSuccessUpdate = this.onSuccessUpdate.bind(this);
    }

    componentDidMount(){
        MenuItemService.getMenuItemById(this.state.id).then((res) =>{
            let menuitem= res.data;
            this.setState({menuItemType:  menuitem.menuItemType,
                menuItemName:  menuitem.menuItemName,
                unitPrice: menuitem.unitPrice,
                description:  menuitem.description,
                discount: menuitem.discount
            });
        });

        
    }

    onSuccessUpdate() {
        confirmAlert({
            title: 'Successfully Updated!',
            buttons: [
                {
                    label: 'OK',
                    onClick: () => { this.props.history.push('/menuItems'); }
                }
            ]
        });
    }

    validateUpdateMenuItemForm =() =>{
       // let menuItemTypeError="";
        let menuItemNameError="";
        let unitPriceError="";
        let descriptionError="";
        let discountError="";

        if(this.state.unitPrice===""||this.state.unitPrice===null||this.state.unitPrice===undefined||this.state.unitPrice<0 || isNaN(this.state.unitPrice)){
            unitPriceError = "unit price canot be null and should be valid";
        }
        if(this.state.description === "" || this.state.description===null||this.state.description===undefined || !isValidDescription(this.state.description)){
            descriptionError= "description canot be null and can not contain numbers";
        }
        if(this.state.discount===""||this.state.discount===null||this.state.discount===undefined||this.state.discount<0||this.state.discount>100|| isNaN(this.state.discount)){
            discountError = "discount canot be null and shoul be valid";
        }
       if(this.state.menuItemName===""||this.state.menuItemName===null||this.state.menuItemName===undefined|| !isValidName(this.state.menuItemName)){
           menuItemNameError = "item name canot be null and can not contain numbers";
       }
       if(menuItemNameError ||  unitPriceError || descriptionError || discountError){
        this.setState({menuItemNameError,unitPriceError,descriptionError,discountError});
        return false;
    }
    return true;
    };

           
    updateMenuItem = (e) =>{
        e.preventDefault();
        const isValid = this.validateUpdateMenuItemForm();
        if(isValid){

        let menuItem ={menuItemType: this.state.menuItemType, menuItemName: this.state.menuItemName, unitPrice: this.state.unitPrice, description: this.state.description, discount: this.state.discount};
        console.log('menuItem => '+ JSON.stringify(menuItem));
        

        MenuItemService.updateMenu(menuItem, this.state.id).then(res =>{
            //this.props.history.push('/menuItems');
            this.onSuccessUpdate()
        });
         
    }
         
       
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
        this.props.history.push('/menuItems');
    }
    

    render() {
        return (
            <div >
                 
            <div className="container">
                    <div className="row"> 
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                                <h3 className="text-center">Update Menu Item</h3>
                                <div className="card-body">

                                <form>
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                            <label for="menu_item_type">Menu Item Type</label>
                                             <input type="text" class="form-control"   id="menu_item_type" value={this.state.menuItemType} onChange={this.changeMenuItemTypeHandler}  disabled/>
                                            
                                            
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="menu_item_name">Menu Item Name</label>
                                            <input type="text" class="form-control" id="menu_item_name"  value={this.state.menuItemName} onChange={this.changeMenuItemNameHandler}  required/>
                                            <div style={{fontSize:12, color:"red"}}>{this.state.menuItemNameError}</div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group  col-md-6">
                                            <label for="unit_price">Unit Price</label>
                                            <input type="number" class="form-control" id="unit_price"  value={this.state.unitPrice} onChange={this.changeUnitPriceHandler}   required min="0"/>
                                            <div style={{fontSize:12, color:"red"}}>{this.state.unitPriceError}</div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                            <label for="description">Description</label>
                                            <textarea class="form-control" id="description" value={this.state.description} onChange={this.changeDescriptionHandler}  required/>
                                            <div style={{fontSize:12, color:"red"}}>{this.state.descriptionError}</div>
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="discount">Discount</label>
                                            <input type="number" class="form-control" id="discount" value={this.state.discount} onChange={this.changeDiscountHandler}  required min="0" max="100"/>
                                            <div style={{fontSize:12, color:"red"}}>{this.state.discountError}</div>
                                        </div>
                                   
                                     </div>
                                     <div class="form-row">
                                        <div class="form-group col-md-4">
                                             <button type="submit" id="submit" class="btn " style={{background: "#bd9660",color:"white"}} onClick={this.updateMenuItem}>Update</button>
                                         </div>
                                         <div class="form-group col-md-4">
                                             <button  id="cancel" class="btn btn-primary" style={{background: "#bd9660",color:"white"}} onClick={this.cancel.bind(this)} >Cancel</button>
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