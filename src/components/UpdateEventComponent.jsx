import React, { Component } from 'react';
import EventService from '../services/EventService';

class UpdateEventComponent extends Component {
    constructor(props){
        super(props)

        this.state={
               Event_Id: this.props.match.params.Event_Id,
               package:'',
               type:'',
               description:'',
               price:''
        }
        
        this.changePackageHandler=this.changePackageHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);

        this.updateEvent = this.updateEvent.bind(this);
    }

    componentDidMount(){
            EventService.getEventById(this.state.Event_Id).then( (res) =>{
                let event = res.data;
                this.setState({package: event.package, type: event.type, description: event.description, price: event.price});
            });
        
    }

    updateEvent = (e) =>{
        e.preventDefault();
        let event = {package:this.state.package, type: this.state.type, description: this.state.description, price: this.state.price};
        console.log('event => ' + JSON.stringify(event));
        EventService.updateEvent(event, this.state.Event_Id).then( res => {
            this.props.history.push('/events');
        });    
    }
    changePackageHandler = (event) =>{
        this.setState({package: event.target.value});
    }
    changeTypeHandler = (event) =>{
        this.setState({type: event.target.value});
    }
    changeDescriptionHandler = (event) =>{
        this.setState({description: event.target.value});
    }
    changePriceHandler = (event) =>{
        this.setState({price: event.target.value});
    }
    cancel(){
        this.props.history.push('/events');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Update Event</h3>
                                <div className="card-body">
                                    <form>
                                    <div className="form-group">
                                            <label>Package</label>
                                            <input placeholder="Package" name="package" className="form-control"
                                             value={this.state.package} onChange={this.changePackageHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Type</label>
                                            <input placeholder="Type" name="type" className="form-control"
                                             value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input placeholder="Description" name="description" className="form-control"
                                             value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input placeholder="Price" name="price" className="form-control"
                                             value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <button className="btn btn-success" style={{background:"rgb(197,161,60)0%"}} onClick={this.updateEvent}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEventComponent;