import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import EventService from '../services/EventService';

class ListEventsComponent extends Component {
    constructor(props){
        super(props)

        this.state={
                events: []
        }
        this.addEvent = this.addEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);

    }
    
     viewEvent(event_Id){
         this.props.history.push(`/view-event/${event_Id}`);
     }
    
     deleteEvent(event_Id){
        EventService.deleteEvent(event_Id).then( res => {
            this.setState({events: this.state.events.filter(event => event.event_Id !== event_Id)});
        });
     }

     addEvent(){
         this.props.history.push('/add-event');
     }

     editEvent(event_Id){
         this.props.history.push(`/update-event/${event_Id}`);
     }

     componentDidMount(){
         EventService.getEvent().then( (res) =>{
        
            this.setState({events: res.data});
         });
     }

    render() {
        return (
            <div>
                <h2 className="tableheading"> Events List</h2> 
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEvent}>Add Event </button>
                </div>
               <div className="row">
                <table className="table table-striped table=bordered">
                    <thead>
                        <tr className="theartr">
                            <th>PACKAGE</th>
                            <th>TYPE</th>
                            <th>DESCRIPTION</th>
                            <th>EVENT ID</th>
                            <th>PRICE(RS.)</th>   
                            <th>ACTIONS</th>                                             
                        </tr>
                    </thead>

                    { <tbody>
                        {
                            this.state.events.map(
                                event =>
                                <tr key= {event.event_Id}>
                                    <td> {event.package} </td>
                                    <td> {event.type} </td>
                                    <td> {event.description} </td>
                                    <td> {event.event_Id} </td>
                                    <td> {event.price} </td>
                                    <td>
                                    <Container>
                                       <Row md={4}>
                                        <Col><button onClick = { () => this.editEvent(event.event_Id)} className="btn btn-info">UPDATE</button></Col>
                                        <Col><button style={{marginLeft:"20px"}} onClick = { () => this.deleteEvent(event.event_Id)} className="btn btn-danger">DELETE</button></Col>
                                        <Col> <button style={{marginLeft:"35px"}} onClick = { () => this.viewEvent(event.event_Id)} className="btn btn-success">VIEW</button></Col>
                                       </Row>
                                        </Container>
                                       
                                    </td>
                                </tr>

                            )
                        }

                    </tbody> }
                </table>
              </div> 
            </div>
        );
    }
}

export default ListEventsComponent;