import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import EventService from '../services/EventService';

class ListEventsComponent extends Component {
    constructor(props){
        super(props)

        this.state={
                events: [],
                searchId:''
        }
        this.addEvent = this.addEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);

    }
    
     viewEvent(event_Id){
         this.props.history.push(`/view-event/${event_Id}`);
     }
    
     deleteEvent(event_Id){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
        EventService.deleteEvent(event_Id).then( res => {
            this.setState({events: this.state.events.filter(event => event.event_Id !== event_Id)});
            confirmtext="You Succesfully deleted attendance";
        }) ;
        }else{
         confirmtext="You presed cansel Try again";
        }
     }

     deleteOldEvent(){
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
           EventService.deleteOldEvent().then(res=>{
             
          }) ;
          confirmtext="You Succesfully deleted attendance";

        }else{
           confirmtext="You presed cansel Try again";
        }
          
   }

     addEvent(){
         this.props.history.push('/add-event');
     }

     editEvent(event_Id){
         this.props.history.push(`/update-event/${event_Id}`);
     }

     searchEventId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

     componentDidMount(){
         EventService.getEvent().then( (res) =>{
        
            this.setState({events: res.data});
         });
     }

    render() {
        let filterEventId = this.state.events.filter((
            event)=>{
                return event.type.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        return (
            <div>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Event Type" value={this.state.searchId} onChange={this.searchEventId.bind(this)} />
                </div>
                <h2 className="tableheading"> Events List</h2> 
                <div className="row">
                    <button className="btn btn-primary" style={{background:"rgb(197,161,60)"}} onClick={this.addEvent}>Add Event </button>
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
                            filterEventId.map(event =>
                            //this.state.events.map(
                                //event =>
                                <tr key= {event.event_Id}>
                                    <td> {event.package} </td>
                                    <td> {event.type} </td>
                                    <td> {event.description} </td>
                                    <td> {event.event_Id} </td>
                                    <td> {event.price} </td>
                                    <td>
                                    <Container>
                                       <Row md={4}>
                                        <Col><button style={{background:"rgb(197,161,60)0%"}} onClick = { () => this.editEvent(event.event_Id)} className="btn btn-info">UPDATE</button></Col>
                                        <Col><button style={{marginLeft:"20px"}} onClick = { () => this.deleteEvent(event.event_Id)} className="btn btn-danger">DELETE</button></Col>
                                        <Col> <button style={{background:"rgb(197,161,60)", marginLeft:"35px"}} onClick = { () => this.viewEvent(event.event_Id)} className="btn btn-success">VIEW</button></Col>
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