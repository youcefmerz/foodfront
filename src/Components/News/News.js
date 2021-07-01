import './News.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  useHistory
} from "react-router-dom";
function News() {
 const [data, setData] = useState("")
 let dataa = localStorage.getItem('token2')
 dataa = JSON.parse(dataa)
 const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/checktoken`,{ headers: {"x-auth-token" : `${dataa}`} });
    console.log("response is ", response)
    if (!response || response.status !== 200)
      return "erreur";
      setData(response.data.data.user1)
  } catch (err) {
    console.log(err.message);
   
  }
};
  const click = () =>{
    fetchData()
    console.log('user is ',data)
  }

  return (
     <div className="News">
      <div className="parent">
      <div className="child-img">
        <img src="/tacos2.jpg" alt="" height="370px" />
      </div>
      <div className="child-news">
      <h1>Nouvelle gamme tacos Grec</h1>
      <p>Simplifiez-vous la vie avec la gamme Pret à la maison : des recettes exclusives à réchauffer et à savourer à la maison et nos incontournables en format généreux à partager et à offrir !  

Gamme disponible dans une sélection de Pret à Manger, en click & collect et livraison ! </p>
<Link to="/Menu-page"><button>Commander</button></Link>
      </div>
      </div>
      <div className="parent">
     
      <div className="child-news">
      <h1>nouvelles recettes de smoothies</h1>
      <p>Simplifiez-vous la vie avec la gamme Pret à la maison : des recettes exclusives à réchauffer et à savourer à la maison et nos incontournables en format généreux à partager et à offrir !  

Gamme disponible dans une sélection de Pret à Manger, en click & collect et livraison ! </p>
<Link to="/Menu-page"><button>Commander</button></Link>
      </div>
      <div className="child-img">
        <img src="/smoothie.jpg" alt="" height="370px"  />
      </div>
      </div>
    </div>
  );
}

export default News;
