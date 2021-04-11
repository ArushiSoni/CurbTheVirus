import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Home from './Layout/Home';
import Footer from './Layout/Footer';
import about_us from './Layout/AboutUs';
import RegisteredSuccess from './components/RegisteredSuccess';
import SeekerReg from './Layout/SeekerReg';
import DonorReg from './Layout/DonorReg';
import FAQ from './Layout/FAQ';
import Login from './Layout/Login'; 
import ListDonorComponent from './components/ListDonorComponent';
import SearchDonorComponent from'./components/SearchDonorComponent';
import EditDonorComponent from'./components/EditDonorComponent';
import Contact from './Layout/ContactUs';
import PrivacyPolicy from './Layout/PrivacyPolicy';
import TermsNConditions from './Layout/TermsNConditions';
import Guidelines from './Layout/Guidelines';
import Feedback from './Layout/Feedback';
import AdminDonorsList from './components/AdminDonorsList';
import AdminDashboard from './components/AdminDashboard';
import EditSeekerComponent from'./components/EditSeekerComponent';
import ListSeekerAfterAcceptingComponent from './components/ListSeekerAfterAcceptingComponent';
import ListDonorAfterAcceptingComponent from './components/ListDonorAfterAcceptingComponent';
import ListSeekerComponent from './components/ListSeekerComponent';
import AdminSeekersList from './components/AdminSeekersList';


function App() {
  return (
    <Router> 
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
        <Switch>
        <Route exact path='/about_us' component={about_us} />
        <Route exact path ='/contact_us' component={Contact} />
        <Route exact path='/privacy_policy' component={PrivacyPolicy} />
        <Route exact path='/termsnconditions' component={TermsNConditions} />
        <Route exact path='/guidelines' component={Guidelines} />
        <Route exact path='/feedback' component={Feedback} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/seeker_registration' component={SeekerReg} />
        <Route exact path='/donor_registration' component={DonorReg} />
        <Route exact path='/registered_successfully' component={RegisteredSuccess} />
        <Route exact path='/donordashboard' component={ListDonorComponent} />
				<Route exact path='/search' component={SearchDonorComponent} />
				<Route exact path='/edit_donor' component={EditDonorComponent} />
        <Route exact path='/edit_seeker' component={EditSeekerComponent} />
        <Route exact path='/seeker_details' component={ListSeekerAfterAcceptingComponent} />
				<Route exact path='/donor_details' component={ListDonorAfterAcceptingComponent} />
        <Route exact path='/seekerdashboard' component={ListSeekerComponent} />
        <Route exact path='/admin_donorslist' component={AdminDonorsList}/>
				<Route exact path='/admindashboard' component={AdminDashboard}/>
        <Route exact path='/admin_seekerslist' component={AdminSeekersList} />



        </Switch>
      <Footer />
    </Fragment>
    </Router>
  );
}

export default App;
