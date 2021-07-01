import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Index from './Pages/Home/Index'
import Login from './Pages/Login/LoginPage'
import Register from './Pages/Register/Register'
import Menu from './Pages/Menu/MenuPage'
import BagPage from './Pages/Bag/BagPage'
import FoodDetailsPage from './Pages/FoodDetails/BagPage';
import AccountPage from './Pages/Account/AccountPage'
import MyProfilePage from './Pages/MyProfile/MyProfilePage';
import Inscription from './Components/Inscription/Inscription';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
 
    <Route
      {...rest}
       render={props =>
            window.localStorage.getItem('token2') 
       
     ? (<Component {...props} />) : (<Redirect   to="/" />)
     }
   />
 );


 

  return (
    
    <div className="App">
      <Router>
     <Switch>
          <Route path="/Menu-page">
            <Menu />
          </Route>
          <Route path="/Login-page">
            <Login />
          </Route>
          <PrivateRoute exact path="/Bag-page" component={BagPage} />
          <Route path="/Food-details-page">
            <FoodDetailsPage />
          </Route>
          <Route path="/Account-page">
            <AccountPage />
          </Route>
          <Route path="/MyProfile-page">
            <MyProfilePage  />
          </Route>
          <Route path="/Inscription-page">
            <Register  />
          </Route>
          <Route path="/">
            <Index />
          </Route>
          
        </Switch>
        </Router>
    </div>
    
  );
}

export default App;
