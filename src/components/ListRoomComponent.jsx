import React, { Component } from 'react';
import RoomService from '../adapters/RoomService';

class ListRoomComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            rooms:[],
            searchId:''
          
        }
        this.addRoom=this.addRoom.bind(this);
        this.updateRoom=this.updateRoom.bind(this);
        this.deleteRoom=this.deleteRoom.bind(this);
        this.GenerateReport = this.GenerateReport.bind(this);
    }

    
    componentDidMount(){
        RoomService.getAllRooms().then((res) => {

            this.setState({rooms:res.data});
        });
    }

    viewRoom(id){
        this.props.history.push(`/view-room/${id}`);
    }

    GenerateReport(){
        this.props.history.push('/room-report');
    }

    deleteRoom(id){
        var confirmtext;
        if(window.confirm("Are You Sure You want to Delete This Room !")){
                RoomService.deleteRooms(id).then(res =>{
                this.setState({rooms:this.state.rooms.filter(room=>room.roomId!==id)});
                confirmtext="You Succesfully deleted Rservation";
            }) ;
         }else{
             confirmtext="Try again";
          }
    }

    updateRoom(id){
        this.props.history.push(`/update-room/${id}`);

    }

    addRoom(){
        this.props.history.push('/add-room');
    }

    searchRoomId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }
    render() {
        let filterRoomId= this.state.rooms.filter((
            room)=>{
                return room.room_Status.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        return (
            
             <div>
                <br></br>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Room Status" value={this.state.searchId} onChange={this.searchRoomId.bind(this)} />
                </div>
                <h2 className="text-center"> Rooms List </h2>
                    <div className="row">
                      <button className="btn btn-primary" onClick={this.addRoom}> Add Room </button>
                      <button style={{marginLeft:"20px", color:"red"}} className="pdfbutton" onClick={this.GenerateReport} type='submit'>Generate PDF</button>
                    </div>
                    <div className="row">
                      <table className= "table table-striped table-bordered">

                          <thead>

                              <tr> 
                                  <th> Room ID</th>
                                  <th> Room Type</th>
                                  <th> Room Status</th>
                                  <th> Room Price</th>
                                  <th> Actions </th>
                              </tr>

                          </thead>

                          <tbody>
                              {
                                  filterRoomId.map(
                                 
                                //   this.state.rooms.map(
                                      room=>
                                      <tr key={room.roomId}>
                                          <td>{room.roomId}</td>
                                          <td>{room.room_Type}</td>
                                          <td>{room.room_Status}</td>
                                          <td>{room.r_Price}</td>
                                          <tb>
                                              <button onClick= { () => this.updateRoom(room.roomId)}  className="btn btn-info"> Update </button>
                                              <button style={{marginLeft: "10px" }} onClick= {() =>this.deleteRoom(room.roomId)} className="btn btn-danger"> Delete </button>
                                              <button style={{marginLeft: "30px" }} onClick= {() =>this.viewRoom(room.roomId)} className="btn btn-info"> View </button>
                                              
                                          </tb>
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

export default ListRoomComponent;

