import React, { Component } from 'react';
import MenuItemService from '../services/MenuItemService'

class MenuItemList extends Component {
    constructor(props){
        super(props)

        this.state= {
                menuItems:[]
        }
    }

    componentDidMount(){
        MenuItemService.getMenuItems().then((res)=>{
            this.setState({ menuItems :res.data});
        })
    }

    render() {
        return (
            <div>
                
            <h2 className="text-center">Menu Item List</h2>
             <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>

                        <tr>
                           <th>Menu Item Type </th> 
                           <th>Menu Item Name </th> 
                           <th>Unit Price </th> 
                           <th>Description </th> 
                           <th>Discount </th> 
                           <th>Available Status </th> 
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
                                    <td>{menuitem.availableStatus}</td>




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