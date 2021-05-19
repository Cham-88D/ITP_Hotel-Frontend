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

import AddAttendForm from './components/AddAttendFormIT19964638';
import UpdateSalaryDetail from './components/UpdateSalaryDetailIT19964638';
import ViewSalary from './components/ViewSalaryIT19964638';
import AddSalDetailForm from './components/AddSalDetailFormIT19964638';
import ViewAttendance from './components/ViewAttendanceIT19964638';
import UpdateAttendanceDetail from './components/UpdateAttendanceDetailIT19964638';
import ViewMonthlyAttendance from './components/ViewMonthlyAttendanceIT19964638';
import UpdatemonthlyAttendance from './components/UpdatemonthlyAttendanceIT19964638';
import AddMonthlyAttendFrom from './components/AddMonthlyAttendFromIT19964638';
import GenerateReport from './components/GenerateReportIT19964638';
import Payroll from './components/PayrollIT19964638';
import ViewPayslip from './components/ViewPayslipIT19964638';
import AttendanceReportGenarate from './components/AttendanceReportGenarateIT19964638';

import ViewSupplier from './pages/ViewSupplierIT19989242';
import SupplierNavBar from './components/SupplierNavBarIT19989242';
import UpdateSupplier from './pages/UpdateSupplierIT19989242';
import ViewPurchasedItemDetail from './pages/ViewPurchasedItemDetailIT19989242';
import ViewSupplierComponent from './pages/ViewSupplierComponentIT19989242';
import UpdatePurchasedItemDetail from './pages/UpdatePurchasedItemDetailIT19989242';
import ViewPurchasedItemDetailComponent from './pages/ViewPurchasedItemDetailComponentIT19989242';
import AddNewSupplier from './pages/AddNewSupplierIT19989242';
import AddNewPurchasedItem from './pages/AddNewPurchasedItemIT19989242';
import GenatePdfReport from './pages/GenatePdfReportIT19989242';
import GeneratePdfReportItem from './pages/GeneratePdfReportItemIT19989242';


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

            <Route path='/manageAttendance' component={ViewAttendance} />
            <Route path='/addAttendance' component={AddAttendForm} />
            <Route path='/manageSalary'  component={ViewSalary} />
            <Route path='/updateMonthlyAttendance/:id'  component={UpdatemonthlyAttendance} />
            <Route path='/addSalary'  component={AddSalDetailForm} />
            <Route path='/updateAttendance/:id'  component={UpdateAttendanceDetail} />
            <Route path='/updateSalary/:id'  component={UpdateSalaryDetail} />
            <Route path='/monthlyAttendance'  component={ViewMonthlyAttendance} />
            <Route path='/monthlyAttendanceAdd'  component={AddMonthlyAttendFrom} />
            <Route path='/generateReport'  component={GenerateReport} />
            <Route path='/attendancereport'  component={AttendanceReportGenarate} />
            <Route path='/payroll'  component={Payroll} />
            <Route path='/viewPalslip/:id'  component={ViewPayslip} />

            <Route path = "/view-purchaseditem"  component = {ViewPurchasedItemDetail}></Route> 
            <Route path = "/update-purchaseditem/:id"  component = {UpdatePurchasedItemDetail}></Route>
            <Route path = "/view-allpurchaseditem/:id"  component = {ViewPurchasedItemDetailComponent}></Route>
            <Route path = "/view-supplier"  component = {ViewSupplier}></Route>
            <Route path = "/supplier" component = {AddNewSupplier}></Route>
            <Route path = "/view-allsupplier/:id"  component = {ViewSupplierComponent}></Route>
            <Route path = "/update-supplier/:id"  component = {UpdateSupplier}></Route>
            <Route path = "/purchaseditem"  component = {AddNewPurchasedItem}></Route>
            <Route path = "/generatepdfreport" component = {GenatePdfReport}></Route>
            <Route path = "/generatepdfreportitem" component = {GeneratePdfReportItem}></Route>
          </Switch>

        </div>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  
  );
}

export default App;