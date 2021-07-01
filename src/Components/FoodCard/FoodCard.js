import './FoodCard.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


function FoodCard({ foodd, }) {
  const dispatch = useDispatch();
  const  cart  = useSelector((state) => state.user);

/*const addToCart = () =>{
  dispatch({ type: "ADD_FOODTOCARD", payload: foodd });
  localStorage.setItem('mydata', JSON.stringify(cart))
  console.log('cart',cart)
  console.log('title', foodd.imgsrc)
}*/
 const [data, setData] = useState("")
 let dataa = localStorage.getItem('token2')
 dataa = JSON.parse(dataa)
const addToCart = async () => {
  try {
    console.log('token',dataa)
    const response = await axios.get(`http://localhost:4000/addToCart/${foodd._id}`,{ headers: {"auth" : `${dataa}`} });
    console.log("response is ", response)
    if (!response || response.status !== 200)
      return "erreur";
      return response;
  } catch (err) {
    console.log(err.message);
   
  }
};
  return (
  
     <div className="Foodcard">
       <div className="Foodcard1">
      <div className="FoodCard-img" >
      <Link to={`/Food-details-page/?tit=${foodd.title}`}><img src={foodd.imgsrc} alt="nofound" height="270"  width="250"/>
       </Link>
      </div>
      <div className="FoodCard-name"><span >{foodd.title}</span></div>
      <div className="FoodCard-prix"><span >{foodd.price} $</span></div>
     <div className="Commander-container"> <button className="commander-button" onClick={addToCart}>Commander</button></div>
     </div>
     </div>
  );
}

export default FoodCard;
