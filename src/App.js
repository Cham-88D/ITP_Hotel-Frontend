import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BevComponents from './components/beverage/BevComponents';
import CreateBeverageComponent from './components/beverage/CreateBeverageComponent';
import UpdateBeverageComponent from './components/beverage/UpdateBeverageComponent';
import Navbar from './components/Navbar';
import OrderManagement from "./components/order/index";
import Bill from "./components/bill/index";
import BevOrderComponent from "./components/order/BevOrderComponent";
import Auth from "./components/auth/index";

import MenuItemList from './components/menuItems/MenuItemList';
import FooterComponent from './components/FooterComponent';
import AddMenuItem from './components/menuItems/AddMenuItem';
import UpdateMenuItem from './components/menuItems/UpdateMenuItem';
import AddOrderForm from './components/menuOrder/AddOrder';
import ViewMenuItem from './components/menuItems/ViewMenuItem';
import AddOrder from './components/menuOrder/AddOrder';
import DiscountPolicy from "./components/policy/index";


function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch> localhost:3000/update-beverages/1
            <Route path="/" exact component={Auth}></Route>
            <Route path="/beverages" component={BevComponents}></Route>
            <Route path="/add-beverages" component={CreateBeverageComponent}></Route>
            <Route path="/update-beverages/:bev_ID" component={UpdateBeverageComponent}></Route>
            <Route path="/orders" component={OrderManagement}></Route>
            <Route path="/bill/:orderId" component={Bill}></Route>
            <Route path="/create-order" component={BevOrderComponent}></Route>

            <Route path="/menuItems" component={MenuItemList}></Route>
            <Route path="/add-menuItems" component={AddMenuItem }></Route>
            <Route path="/menuItemsUpdate/:id" component={UpdateMenuItem }></Route>
            <Route path="/restaurant order" component={AddOrderForm}></Route>
            <Route path="/viewMenuItem/:id" component={ViewMenuItem}></Route>
            <Route path="/ViewOrder" component={AddOrder}></Route>
            <Route path="/policy" component={DiscountPolicy}></Route>
          </Switch>

        </div>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
