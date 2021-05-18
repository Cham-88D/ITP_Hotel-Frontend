// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

// import HeaderComponent from './components/HeaderComponent';
import FooterComponent_IT19964010 from './components/FooterComponent_IT19964010';
import CreateRoomComponent_IT19964010 from './components/CreateRoomComponent_IT19964010';
import UpdateRoomComponent_IT19964010 from './components/UpdateRoomComponent_IT19964010';
import ViewRoomComponent_IT19964010 from './components/ViewRoomComponent_IT19964010';
import ListRoomComponent_IT19964010 from './components/ListRoomComponent_IT19964010';
import ListReservationComponent_IT19964010 from './components/ListReservationComponent_IT19964010';
import CreateReservationComponent_IT19964010 from './components/CreateReservationComponent_IT19964010';
import ViewReservationComponent_IT19964010 from './components/ViewReservationComponent_IT19964010';
import UpdateReservation_IT19964010 from './components/UpdateReservation_IT19964010';
import CustomerReservationComponent_IT19964010 from './components/CustomerReservationComponent_IT19964010';
import CreateReservationCus_IT19964010 from './components/CreateReservationCus_IT19964010';
import ListReservationModificationRequestComponent_IT19964010 from './components/ListReservationModificationRequestComponent_IT19964010';
import CreateResRequestComponent_IT19964010 from './components/CreateResRequestComponent_IT19964010';
import ListpaymentComponent_IT19964010 from './components/ListpaymentComponent_IT19964010';
import CusCreateResRequestComponent_IT19964010 from './components/CusCreateResRequestComponent_IT19964010';
import Navbar_IT19964010 from './components/Navbar_IT19964010';
import ReservationReport_IT19964010 from './components/ReservationReport_IT19964010';
import CreatePaymentcomponent_IT19964010 from './components/CreatePaymentcomponent_IT19964010';
import CusCreatePaymentComponent_IT19964010 from './components/CusCreatePaymentComponent_IT19964010';
import ViewPaymentComponent_IT19964010 from './components/ViewPaymentComponent_IT19964010';
import ViewResRequestComponent_IT19964010 from './components/ViewResRequestComponent_IT19964010';


function App() {
  return (
  <div>
    <Router> 
      
        {/* <HeaderComponent/> */}
          <div className="container">
            <Navbar_IT19964010/>
            <Switch>localhost:3000/update-room/


              <Route path= "/" exact component= {ListRoomComponent_IT19964010} />
              <Route path= "/rooms" component= {ListRoomComponent_IT19964010}/>  
              {/* <ListRoomComponent/> */}
              <Route path= "/add-room" component= {CreateRoomComponent_IT19964010} /> 
              <Route path= "/update-room/:id" component= {UpdateRoomComponent_IT19964010}/> 
              <Route path= "/view-room/:id" component= {ViewRoomComponent_IT19964010}/> 
              <Route path= "/reservations" component= {ListReservationComponent_IT19964010}/> 
              <Route path= "/add-reservation" component= {CreateReservationComponent_IT19964010} /> 
              <Route path= "/update-reservation/:id" component= {UpdateReservation_IT19964010} /> 
              <Route path= "/view-reservation/:id" component= {ViewReservationComponent_IT19964010}/> 
              <Route path= "/cus-res" component= {CustomerReservationComponent_IT19964010} /> 
              <Route path= "/cus-create-res" component= {CreateReservationCus_IT19964010} /> 

              <Route path= "/res_modification_requests" component= {ListReservationModificationRequestComponent_IT19964010}/> 
              <Route path= "/add-request" component= {CreateResRequestComponent_IT19964010}/> 
              <Route path= "/cus-res-req" component= {CusCreateResRequestComponent_IT19964010}/> 
              <Route path= "/room-report" component= {ReservationReport_IT19964010}/> 
              <Route path= "/payments" component= {ListpaymentComponent_IT19964010}/> 
              <Route path= "/add-payments" component= {CreatePaymentcomponent_IT19964010}/> 
              <Route path= "/cus-payments" component= {CusCreatePaymentComponent_IT19964010}/> 
              <Route path= "/view-payment/:id" component= {ViewPaymentComponent_IT19964010}/> 
              <Route path= "/view-request/:id" component= {ViewResRequestComponent_IT19964010}/> 


             </Switch> 
             
          </div>
        <FooterComponent_IT19964010/>
      </Router> 
  </div>
  );
}

export default App;
