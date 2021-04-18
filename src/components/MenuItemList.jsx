import React, { Component } from 'react';
import MenuItemService from '../services/MenuItemService';


class MenuItemList extends Component {
    constructor(props){
        super(props)

        this.state= {
                menuItems:[]
              
        }
        this.addMenu = this.addMenu.bind(this);
        this.editMenuItem = this.editMenuItem.bind(this);
        this.removeMenuItem = this.removeMenuItem.bind(this);
       
    }

    removeMenuItem(id){
        MenuItemService.deleteMenu(id).then( res =>{

                this.setState({ menuItems: this.state.menuItems.filter(menuItem => menuItem.menu_item_id!==id)});
        });

    }

    editMenuItem(id){
            this.props.history.push(`/update menu items/${id}`);
     
    }

    componentDidMount(){
        MenuItemService.getMenuItems().then((res)=>{
            this.setState({ menuItems: res.data});
            console.log(this.state.menuItems);
        })
       
    }

    addMenu(){
        this.props.history.push('/add menu items');
    }

    render() {
        return (
            <div>
                
            <h2 className="text-center">Menu Item List</h2>
            <div className="row">
                <button className="btn1 btn-primary " onClick={this.addMenu}>Add Menu Item</button>
            </div>
             <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>

                        <tr>
                           <th>Menu Item Type </th> 
                           <th>Menu Item Name </th> 
                           <th>Unit Price </th> 
                           <th>Description </th> 
                           <th>Discount </th> 
                          
                           <th>Edit </th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            this.state.menuItems.map(
                                menuItem =>
                                <tr key={menuItem.menu_item_id}>
                                    <td>{menuItem.menuItemType}</td>
                                    <td>{menuItem.menuItemName}</td>
                                    <td>{menuItem.unitPrice}</td>
                                    <td>{menuItem.description}</td>
                                    <td>{menuItem.discount}</td>
                                    <td>
                                    
                                            <button onClick ={() => this.editMenuItem(menuItem.menu_item_id)}  className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "20px"}} onClick ={() => this.removeMenuItem(menuItem.menu_item_id)}  className="btn btn-danger">Delete</button>

                                    </td>
                                    




                                </tr>

                            )
                        }

                    </tbody>


                </table>

            </div>

            </div>
        );
    }
}

export default MenuItemList;