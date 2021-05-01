import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BevComponents from './components/beverage/BevComponents';
import CreateBeverageComponent from './components/beverage/CreateBeverageComponent';
import UpdateBeverageComponent from './components/beverage/UpdateBeverageComponent';
import Navbar from './components/Navbar';
import  BevOrderComponent from './components/order/BevOrderComponent';




function App() {
  return (
    <div>
      <Router>
        
           
    <Navbar></Navbar>
             <div className="container">
               <Switch> localhost:3000/update-beverages/1
                   <Route path="/"  exact component={BevComponents}></Route>
                   <Route path="/beverages" component={BevComponents}></Route>
                   <Route path="/add-beverages" component={CreateBeverageComponent}></Route>
                   <Route path="/update-beverages/:bev_ID" component={UpdateBeverageComponent}></Route>
                   <Route path="/orders" component={BevOrderComponent}></Route>
                   {/* <Route path="/view-beverages/:bev_ID" component={ViewBeverageComponent}></Route> */}
                 
               </Switch>
    
             </div>
           
        
      </Router>
    </div>
  );
}

export default App;
