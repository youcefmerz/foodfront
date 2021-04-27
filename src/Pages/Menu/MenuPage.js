import './MenuPage.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import FoodsList from '../../Components/FoodsList/FoodsList' 
import Footer from '../../Components/Footer/Footer'



function MenuPage() {
  return (
    <div className="Menu-page">

     <Header />
     <div className="menu-page-container">
     <div className='left-side'>
       <Menu  />
       </div>
     <div className="right-side">
       <FoodsList  />
       </div>
     </div>
     <Footer />
    </div>
    
  );
}

export default MenuPage;