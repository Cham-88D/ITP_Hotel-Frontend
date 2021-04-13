import React, { Component } from 'react';
import MenuItemService from '../services/MenuItemService';
import AddMenuItem from '../components/AddMenuItem';

class MenuItemList extends Component {
    constructor(props){
        super(props)

        this.state= {
                menuItems:[]
        }
        this.addMenu = this.addMenu.bind(this);
    }

    componentDidMount(){
        MenuItemService.getMenuItems().then((res)=>{
            this.setState({ menuItems :res.data});
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
                                menuitem =>
                                <tr key={menuitem.id}>
                                    <td>{menuitem.menuItemType}</td>
                                    <td>{menuitem.menuItemName}</td>
                                    <td>{menuitem.unitPrice}</td>
                                    <td>{menuitem.description}</td>
                                    <td>{menuitem.discount}</td>
                                    




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