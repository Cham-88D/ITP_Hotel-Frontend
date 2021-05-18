import React, { Component } from 'react';
import EventServiceIT19067148 from '../services/EventServiceIT19067148';

class ViewEventComponentIT19067148 extends Component {
    constructor(props){
        super(props)

        this.state={
            Event_Id: this.props.match.params.Event_Id,
            event: {}
        }
    }

    componentDidMount(){
        EventServiceIT19067148.getEventById(this.state.Event_Id).then( res =>{
            this.setState({event: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Event Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                           <label>Event Package:</label>
                           <div> {this.state.event.package} </div>
                        </div>
                        <div className = "row">
                           <label>Event Type:</label>
                           <div> {this.state.event.type} </div>
                        </div>
                        <div className = "row">
                           <label>Event Description:</label>
                           <div> {this.state.event.description} </div>
                        </div>
                        <div className = "row">
                           <label>Event Price:</label>
                           <div> {this.state.event.price} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEventComponentIT19067148;