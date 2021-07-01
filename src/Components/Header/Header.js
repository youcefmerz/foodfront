import './Header.css';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  useHistory
} from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.food);
  const history = useHistory()
//clear storage toekn
const clearStorag= () =>{
  localStorage.clear()
  history.push('/')
}


let nom = localStorage.getItem('name2')
nom = JSON.parse(nom)



  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/foods`);
      console.log("response is ", response)
      if (!response || response.status !== 200)
        return dispatch({ type: "SET_FOODS", payload: [] });
      return dispatch({ type: "SET_FOODS", payload: response.data.data });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: "SET_FOODS", payload: [] });
    }
  };

  return (
    
     <div className="Header">
      <div className="logo">
        <img src="/hamburger-solid.svg" alt="" width="100px"height="33px"/>                                       
       </div>
       <div className="nav">
              
                    <ul className="navb">
                    <li className="navchild" onClick={(event) => {
                        fetchData();
                       }} ><Link to="/Menu-page">Menu</Link></li>
                    
                    <li className="navchild"><Link to="/">Home</Link></li>
                    <li className="navchild"><Link to="/">A propos</Link></li>
                </ul>
       </div>
        { localStorage.getItem('token2') ? 
        <div className="right-nav">

        <div className="right-nav-child">
     <img  src="/sign-out-alt-solid.svg" alt="" width="100px"height="33px"  onClick={clearStorag}/>                                       
    </div>
    <div className="right-nav-child">
    <Link to="/Account-page" className="account">
      <img src="/user-circle-solid.svg" alt="" width="100"height="33px"/> 
      <div className="account-user"> 
        <span>hi, {nom}</span>
        <span>View account</span>
      </div>
      </Link>                                 
    </div>
    <div className="right-nav-child">
      <Link to="/Bag-page" ><img src="/icon.svg" alt="" width="100"height="33px"/>   </Link>                                    
    </div>
   </div>
      

  :
    <div className="right-nav">

           <div className="right-nav-child">
        <img  src="/search-solid.svg" alt="" width="100px"height="33px"  onClick={clearStorag}/>                                       
       </div>
       <div className="right-nav-child">
       <Link to="/Login-page"><img src="/sign-in-alt-solid.svg" alt="" width="100"height="33px"/> </Link>                                 
       </div>
       <div className="right-nav-child">
         <Link to="/Bag-page" ><img src="/icon.svg" alt="" width="100"height="33px"/>   </Link>                                    
       </div>
      </div>
      }





    
          
    </div>



    
  );
}

export default Header;
