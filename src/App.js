import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './Pages/Home/Index'
import Login from './Pages/Login/LoginPage'
import Register from './Pages/Register/Register'
import Menu from './Pages/Menu/MenuPage'

function App() {
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
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        </Router>
    </div>
    
  );
}

export default App;
