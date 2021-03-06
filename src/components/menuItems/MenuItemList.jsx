
import React, {Component } from 'react';
import MenuItemService from '../../adapters/MenuItemService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class MenuItemList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuItems: [],
            search:''
           

        }
        this.addMenu = this.addMenu.bind(this);
        this.editMenuItem = this.editMenuItem.bind(this);
        this.removeMenuItem = this.removeMenuItem.bind(this);
        this.onClickDeleteItem = this.onClickDeleteItem.bind(this);
        
    }

    onClickDeleteItem(id){
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this item',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.removeMenuItem(id)
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }

    removeMenuItem(id) {
             MenuItemService.deleteMenu(id).then(res => {

             this.setState({ ...this.state,menuItems: this.state.menuItems.filter(menuItem => menuItem.menu_item_id !== id) });
             });
    }

    viewMenuItem(id) {
        this.props.history.push(`/viewMenuItem/${id}`);
    }


    editMenuItem(id) {
        this.props.history.push(`/menuItemsUpdate/${id}`);

    }

    componentDidMount() {
        MenuItemService.getMenuItems().then((res) => {
            this.setState({...this.state, menuItems: res.data });
        })

    }

   

    addMenu() {
        this.props.history.push('/add-menuItems');
    }

    searchType(event){
        this.setState({search: event.target.value.substr(0,
            20)});
    }

    

    render() {

        let filterMenuType = []
        if(this.state.menuItems && this.state.menuItems.length>0){
            filterMenuType=this.state.menuItems.filter(
                ( menuItem )=>{
                    return menuItem.menuItemType.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
                }
            );
        }
        
        return (
            <div>
               

                <h2 className="text-center">Menu Item List</h2>
                <div className="row">
                    <button className="btn1 " style={{ background: "#bd9660", color: "white" }} onClick={this.addMenu}>Add Menu Item</button>
                </div>
                <label for="menu_item_name"></label>

                


                <div style={{ fontSize: 12, color: "red" }}>{this.state.menuItemNameError}</div>

                                        <div class="form-group col-md-4">
                                            
                                            <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Menu Item Type" value={this.state.search} onChange={this.searchType.bind(this)} />
                                            
                                        </div>
                
               
                <div className="row">
                <p id="demo"></p>

                    <table id="all_menu_items" className="table table-striped table-bordered"  >

                        <thead>

                            <tr>
                                <th>Menu Item Type </th>
                                <th>Menu Item Name </th> 
                            <th>Unit Price </th>
                                {/*<th>Description </th> */}
                                <th>Discount </th>

                                <th>Edit </th>
                            </tr>

                        </thead>

                        <tbody>

                            {
                               filterMenuType.map(
                                    menuItem =>
                                        <tr key={menuItem.menu_item_id}>
                                            <td>{menuItem.menuItemType}</td>
                                             <td>{menuItem.menuItemName}</td>
                                             <td>{menuItem.unitPrice}</td>
                                           {/*<td>{menuItem.description}</td>*/}
                                            <td>{menuItem.discount}</td>
                                            <td>

                                                <button onClick={() => this.editMenuItem(menuItem.menu_item_id)} style={{ background: "#bd9660", color: "white" }} className="btn ">Update</button>
                                                
                                                <button style={{ marginLeft: "20px" }} onClick={() => this.onClickDeleteItem(menuItem.menu_item_id)} className="btn btn-danger">Delete</button>
                                                <button style={{  marginLeft: "20px", background: "#bd9660", color: "white" }} onClick={() => this.viewMenuItem(menuItem.menu_item_id)} className="btn ">View more..</button>

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