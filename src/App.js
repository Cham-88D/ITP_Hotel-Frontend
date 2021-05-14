import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BevComponents from './components/beverage/BevComponents';
import CreateBeverageComponent from './components/beverage/CreateBeverageComponent';
import UpdateBeverageComponent from './components/beverage/UpdateBeverageComponent';
import Navbar from './components/NavigationBar';
import OrderManagement from "./components/order/index";
import Bill from "./components/bill/index";
import BevOrderComponent from "./components/order/BevOrderComponent";
import Auth from "./components/auth/index";

import MenuItemList from './components/menuItems/MenuItemList';
import FooterComponent from './components/CommonFooter';
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
import UpdateSupplier from './pages/UpdateSupplierIT19989242';
import ViewPurchasedItemDetail from './pages/ViewPurchasedItemDetailIT19989242';
import ViewSupplierComponent from './pages/ViewSupplierComponentIT19989242';
import UpdatePurchasedItemDetail from './pages/UpdatePurchasedItemDetailIT19989242';
import ViewPurchasedItemDetailComponent from './pages/ViewPurchasedItemDetailComponentIT19989242';
import AddNewSupplier from './pages/AddNewSupplierIT19989242';
import AddNewPurchasedItem from './pages/AddNewPurchasedItemIT19989242';
import GenatePdfReport from './pages/GenatePdfReportIT19989242';
import GeneratePdfReportItem from './pages/GeneratePdfReportItemIT19989242';

import FoodCountComponent from './components/FoodCountTable-IT19176116';
import CreateFoodCountComponent from './components/CreateFoodCountForm-IT19176116';
import ViewFoodCountComponent from './components/ViewFoodCountComponent-IT19176116';
import FoodDetailsComponent from './components/FoodDetailsTable-IT19176116';
import CreateFoodDetailComponent from './components/CreateFoodDetailForm-IT19176116';
import FoodReport from './components/FoodDetailsReport-IT19176116';
import FoodCountReport from './components/FoodCountReport-IT19176116';

import ListEventBookingsComponentIT19067148 from "./components/ListEventBookingsComponentIT19067148";
import ListEventsComponentIT19067148 from "./components/ListEventsComponentIT19067148";
import PageEventBookingIT19067148 from "./components/PageEventBookingIT19067148";
import PageCusEventBookingIT19067148 from "./components/PageCusEventBookingIT19067148";
import EventsPageIT19067148 from "./components/EventsPageIT19067148";
import CusCreateEventBookingIT19067148 from "./components/CusCreateEventBookingIT19067148";
import CusEventModificationRequestIT19067148 from "./components/CusEventModificationRequestIT19067148";
import CreateEventBookingComponentIT19067148 from './components/CreateEventBookingComponentIT19067148';
import CreateEventComponentIT19067148 from './components/CreateEventComponentIT19067148';
import UpdateEventComponentIT19067148 from './components/UpdateEventComponentIT19067148';
import UpdateEventBookingComponentIT19067148 from './components/UpdateEventBookingComponentIT19067148';
import ViewEventBookingComponentIT19067148 from './components/ViewEventBookingComponentIT19067148';
import ViewEventComponentIT19067148 from './components/ViewEventComponentIT19067148';
import CreateEventModificationRequestComponentIT19067148 from './components/CreateEventModificationRequestComponentIT19067148';
import ListEventModificationRequestComponentIT19067148 from './components/ListEventModificationRequestComponentIT19067148';
import ViewEventModificationRequestComponentIT19067148 from './components/ViewEventModificationRequestComponentIT19067148';
import EventReportIT19067148 from './components/EventReportIT19067148';

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

            <Route path = "/foodCount" component = {FoodCountComponent}></Route>
            <Route path = "/add-foodCount/:count_id" component = {CreateFoodCountComponent}></Route>
            <Route path = "/view-foodCount/:count_id" component = {ViewFoodCountComponent}></Route>
            <Route path = "/foodDetails" component = {FoodDetailsComponent}></Route>
            <Route path = "/navbar" component = {Navbar}></Route>
            <Route path = "/add-foodDetails/:food_Id" component = {CreateFoodDetailComponent}></Route>
            <Route path = "/generateReport" component = {FoodReport}></Route>
            <Route path = "/generateFoodCountReport" component = {FoodCountReport}></Route>

            <Route path = "/page-bookings" component={PageEventBookingIT19067148}></Route>
            <Route path = "/event-report" component={EventReportIT19067148}></Route>
            <Route path = "/cus-page-bookings" component={PageCusEventBookingIT19067148}></Route>
            <Route path = "/events-page" component={EventsPageIT19067148}></Route>
            <Route path = "/cus-event-bookings" component={CusCreateEventBookingIT19067148}></Route>
            <Route path = "/cus-event-modification-request" component={CusEventModificationRequestIT19067148}></Route>
            <Route path = "/bookings" component={ListEventBookingsComponentIT19067148}></Route>
            <Route path = "/events" component={ListEventsComponentIT19067148}></Route>
            <Route path = "/event-modification-request" component={ListEventModificationRequestComponentIT19067148}></Route>
            <Route path = "/add-event-booking" component={CreateEventBookingComponentIT19067148}></Route>
            <Route path = "/update-event-booking/:Booking_Id" component={UpdateEventBookingComponentIT19067148}></Route>
            <Route path = "/view-event-booking/:Booking_Id" component={ViewEventBookingComponentIT19067148}></Route>
            <Route path = "/add-event" component={CreateEventComponentIT19067148}></Route>
            <Route path = "/update-event/:Event_Id" component={UpdateEventComponentIT19067148}></Route>
            <Route path = "/view-event/:Event_Id" component={ViewEventComponentIT19067148}></Route>
            <Route path = "/add-event-modification-request" component={CreateEventModificationRequestComponentIT19067148}/>
            <Route path = "/view-event-modification-request/:ev_M_ID" component={ViewEventModificationRequestComponentIT19067148}></Route>
          </Switch>

        </div>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  
  );
}

export default App;
