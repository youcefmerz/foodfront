import './BagPage.css';
import React, { useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Header from '../../Components/Header/Header'
import FoodInBag from '../../Components/FoodInBag/FoodInBag'
import Footer from '../../Components/Footer/Footer'
import CodePromo from '../../Components/CodePromo/CodePromo'



function BagPage() {
  
  const dispatch = useDispatch();
  /*const { cart } = useSelector((state) => state.user);
  let foodcard = localStorage.getItem('mydata')
  foodcard = JSON.parse(foodcard)
  console.log("storage",localStorage.getItem('token2'))*/
  const [foodcard, setFoodcard] = useState("")
  const { cart } = useSelector((state) => state.cart);
  
   let dataa = localStorage.getItem('token2')
   dataa = JSON.parse(dataa)
  const foodsInCard = async () => {
    try {
      console.log('token',dataa)
       const response = await axios.get(`http://localhost:4000/foodsInCard`,{ headers: {"auth" : `${dataa}`} });
       console.log("response is ", response)
      if (!response || response.status !== 200)
        return "erreur";
        console.log(cart)
        return  dispatch({ type: "FOOD_CART", payload: response.data });
    } catch (err) {
      console.log(err.message);

    }    }
 useEffect(() =>{ 
   foodsInCard()
   },[])
  
  
  return (
    <div className="Bag-page">
     <Header />
     <div className="entete"> 
       <div className="entete-left"><h1>My bag (items)</h1></div>
       <div className="entete-right">
       <div className="entete-right-child"><span>Continue shooping</span></div>
       <div className="entete-right-child"><button className="checkout-button">Procede to checkout</button></div>
      </div>
     </div>
     <div>
     {!cart || cart.length === 0 ?  (
          <div>No Data To Display</div>
        ) : (
       <>
       {cart.cart.map((item, index) => (
                <FoodInBag
                  key={index}
                  food1={item}
                  
                />
              ))}
      </>
      )}
     </div>
     <CodePromo />
     <Footer />
    </div>
    
  );
}

export default BagPage;