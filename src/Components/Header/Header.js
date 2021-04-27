import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {


  return (
    
     <div className="Header">
      <div className="logo">
        <img src="/hamburger-solid.svg" alt="" width="100px"height="33px"/>                                       
       </div>
       <div className="nav">
              
                    <ul className="navb">
                    <li className="navchild"><Link to="/Menu-page">Menu</Link></li>
                    <li className="navchild">Trouver un pret</li>
                    <li className="navchild">Franchise</li>
                    <li className="navchild">Commander</li>
                    <li className="navchild"><Link to="/">A propos</Link></li>
                </ul>
       </div>
      <div className="rec">
            <div className="rech">
        <img src="/search-solid.svg" alt="" width="100px"height="33px"/>                                       
       </div>
       <div className="rech">
       <Link to="/Login-page"><img src="/sign-in-alt-solid.svg" alt="" width="100"height="33px"/> </Link>                                 
       </div>
       <div className="rech">
        <img src="/icon.svg" alt="" width="100"height="33px"/>                                       
       </div>
      </div>
          
    </div>



    
  );
}

export default Header;
