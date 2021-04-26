import React, { Component } from 'react';
import BeverageService from '../services/BeverageService';

class BevComponents extends Component {

    constructor(props){
        super(props)

        this.state={
            beverages: []
        }
        this.addBeverage = this.addBeverage.bind(this);
        this.editBeverage = this.editBeverage.bind(this);
        this.deleteBeverage=this.deleteBeverage.bind(this);
        // this.viewBeverage=this.viewBeverage.bind(this);
    }
    deleteBeverage(bev_ID){
        BeverageService.deleteBeverage(bev_ID).then(res =>{
                this.setState({beverages: this.state.beverages.filter(beverage => beverage.bev_ID !== bev_ID)});

        });

}

// viewBeverage(bev_ID){
//     this.props.history.push(`/view-beverages/${bev_ID}`)
// }



editBeverage(bev_ID){

     this.props.history.push(`/update-beverages/${bev_ID}`);
    }

componentDidMount(){
    BeverageService.getBeverage().then((res) => {
                this.setState({beverages:res.data});
    });
}
addBeverage(){
    this.props.history.push('/add-beverages');
}


    render() {
        return (
            <div>
                <center>
                <h2 className="text-center">Beverage List</h2>
                <div className= "row">
                    <button style={{background:"#bd9660"}} className="btn btn-primary" onClick={this.addBeverage}>Add Beverage</button>
                </div>
                    <div className= "row">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Beverage ID</th>
                                        <th>Beverage Type</th>
                                        <th>Beverage Name</th>
                                        <th>Unit Price</th>
                                        <th>Discount</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    this.state.beverages.map(
                                        beverage =>
                                        <tr key ={beverage.bev_ID}>
                                            <td>{beverage.bev_ID}</td>
                                            <td>{beverage.b_Type}</td>
                                            <td>{beverage.b_Name}</td>
                                            <td>{beverage.unit_Price}</td>
                                            <td>{beverage.discount}</td>
                                            <td>{beverage.description}</td>
                                            <td>
                                                <button style={{background:"#bd9660"}} onClick={()=> this.editBeverage(beverage.bev_ID) } className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"0px",marginTop:"5px"}} onClick={()=> this.deleteBeverage(beverage.bev_ID)} className="btn btn-danger">Delete</button>
                                                {/* <button style={{marginLeft:"10px"}} onClick={()=> this.viewBeverage(beverage.bev_ID)} className="btn btn-info">View</button> */}
                                            </td>

                                        </tr>
                                    )
                                    
                                    }
                                     
                                </tbody>
                            </table>

                    </div>
                    </center>
            </div>
        );
    }
}

export default BevComponents;