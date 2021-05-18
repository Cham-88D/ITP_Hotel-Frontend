import React, { Component } from 'react';
import EventServiceIT19067148 from '../services/EventServiceIT19067148';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const initialState = {
               package:'',
               type:'',
               description:'',
               price:'',

               packageError:'',
               typeError:'',
               descriptionError:'',
               priceError:'',
}
class CreateEventComponentIT19067148 extends Component {
    constructor(props){ 
        super(props)

        this.state=initialState;
        
        this.changePackageHandler=this.changePackageHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);

        this.saveEvent = this.saveEvent.bind(this);
    }

    notify(){
        toast.warn('Event is Added Successfully!', {position: toast.POSITION.TOP_CENTER})

    }
    notify1(){
        toast.error('You have canceled the Event addition!', {position: toast.POSITION.TOP_CENTER})

    }

    validate = () => {
        let packageError='';
        let typeError='';
        let descriptionError='';
        let priceError='';
        
        if(!this.state.package){
            packageError="Event Package is required "
        }
        if(!this.state.type){
            typeError="Event Type is required "
        }
        if(!this.state.description){
            descriptionError="Description is required "
        }
        if(!this.state.price){
            priceError="Price is required "
        }
        if(this.state.price<1){
            priceError="Price cannot be null or minus "
        }
        if (packageError || typeError|| descriptionError || priceError) {
            this.setState({ packageError, typeError, descriptionError, priceError});
            return false;
        }

        return true;
    }

    saveEvent = (e) =>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let event = {package:this.state.package, type:this.state.type, description:this.state.description, price:this.state.price};
            console.log('event => ' + JSON.stringify(event));
            this.setState(initialState);
            EventServiceIT19067148.createEvent(event).then(res =>{
                this.notify();
                this.props.history.push('/events');
            });
        }
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
        this.notify1();
        this.props.history.push('/events');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Add Event</h3>
                                <div className="card-body">
                                    <form>
                                    <div className="form-group">
                                            <label>Package</label>
                                            <input placeholder="Package" name="package" className="form-control"
                                             value={this.state.package} onChange={this.changePackageHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.packageError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Type</label>
                                            <input placeholder="Type" name="type" className="form-control"
                                             value={this.state.type} onChange={this.changeTypeHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.typeError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input placeholder="Description" name="description" className="form-control"
                                             value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.descriptionError}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input placeholder="Price" name="price" className="form-control"
                                             value={this.state.price} onChange={this.changePriceHandler}/>
                                             <div style={{fontSize: 12, color: "red"}}>{this.state.priceError}</div>
                                        </div>
                                        <button className="btn btn-success" style={{background:"rgb(197,161,60)"}} onClick={this.saveEvent}>Save</button>
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

export default CreateEventComponentIT19067148;