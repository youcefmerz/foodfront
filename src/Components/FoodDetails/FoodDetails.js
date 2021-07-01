import './FoodDetails.css';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from "react-router-dom";
import axios from "axios";

function FoodDetails() {
  const location = useLocation();
  console.log("location",new URLSearchParams(location.search).get('tit'));
  let tit = new URLSearchParams(location.search).get('tit')
  
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.food);
  const { title} = useSelector((state) => state.filter);
  useEffect(() => {
    console.log("eeeee", tit)
    const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/foodbytitle/${tit}`);
            console.log("response is ", response)
            if (!response || response.status !== 200)
              return dispatch({ type: "SET_FOODS", payload: [] });
            return dispatch({ type: "SET_FOODS", payload: response.data.data });
          } catch (err) {
            console.log(err.message);
            dispatch({ type: "SET_FOODS", payload: [] });
          }
        };
        fetchData();
      }, [dispatch]);
console.log("foods" , foods)
  return (
  
     <div className="FoodDetails">
     <div className="FoodDetails1">
     <div className="Food-img">
         <img src="https://delivery.pret.com/dw/image/v2/ABBI_PRD/on/demandware.static/-/Sites-pret-us-master-catalog/default/dwc8dd39dd/images/products/Chipotle_Chicken_Avocado_Wrap_US003466_PLP_TABLET.jpg?sw=600&sh=600" alt="not found" width="" height="" />
     </div>
     <div className="Food-det">
         <h1>{foods[0].title}</h1>
         <span className="Food-price">{foods[0].price}$</span>
         <span className="Food-contains">{foods[0].type}</span>
        <div className="Food-order-container"><button className="Food-order">Start order</button></div> 
         <p>Grilled chicken and avocado drizzled with mayo, yogurt and a chipotle-flavored sauce, rolled into a wholegrain tortilla wrap.</p>
     </div>
     </div>
     </div>
  );
}

export default FoodDetails;
