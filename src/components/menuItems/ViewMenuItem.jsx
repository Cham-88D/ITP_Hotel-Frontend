import React, { Component } from 'react';
import MenuItemService from '../../services/MenuItemService';

class ViewMenuItem extends Component {

    constructor(props){
        super(props)
     

        this.state= {

            id: this.props.match.params.id, 
            menuItem:{}
         
        }

      
 } 

 componentDidMount(){
     MenuItemService.getMenuItemById(this.state.id).then(res =>{
         this.setState({menuItem: res.data});
     })

 }

 cancel(){
    this.props.history.push('/menu items');
}



    render() {
        return (
            <div>

               <div className="card col-md-7 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    <h3 className="text-center">View Menu Item Details</h3>
                    <div className="card-body">
                        <div className="row">
                        <div style={{fontWeight:"bold"}}>
                            <label>Menu Item Type:</label>
                            
                            </div>
                            <br></br>
                            <div style={{marginLeft:20}}>{ this.state.menuItem.menuItemType}</div>
                        </div>
                        <div className="row"  >
                        <div style={{fontWeight:"bold"}}>
                            <label>Menu Item Name:</label>
                            
                            </div>
                            <br></br>
                            <div style={{marginLeft:20}}>{ this.state.menuItem.menuItemName}</div>
                        </div>
                        <div className="row">
                        <div style={{fontWeight:"bold"}}>
                            <label>Unit Price:</label>
                            
                            </div>
                            <br></br>
                            <div style={{marginLeft:20}}>{ this.state.menuItem.unitPrice}</div>
                        </div>
                        <div className="row">
                        <div style={{fontWeight:"bold"}}>
                            <label >Description:</label>
                            
                           
                            </div>
                            
                            <div className="card col-md-4 " style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                            <div style={{marginLeft:20,color:"#9f4ef5"}}>{ this.state.menuItem.description}</div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                        <div style={{fontWeight:"bold"}}>
                            <label >Discount:</label>
                           
                            </div>
                            <br></br>
                           
                            <div style={{marginLeft:20}}>{ this.state.menuItem.discount}</div>
                        </div>
                        <div class="form-group col-md-6">
                                             <button  id="cancel" class="btn " style={{background: "#bd9660",color:"white",marginLeft:10,marginTop:20}}  onClick={this.cancel.bind(this)} >Back</button>
                        </div>

                    </div>

               </div>
                
            </div>
        );
    }
}

export default ViewMenuItem;