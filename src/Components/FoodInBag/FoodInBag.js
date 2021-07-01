import './FoodInBag.css';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function FoodInBag({food1 , onDelete }) {
  let dataa = localStorage.getItem('token2')
  dataa = JSON.parse(dataa)
  const dispatch = useDispatch();
  const { _cart } = useSelector((state) => state.cart);
  const removeFood = async () => {
    try {
      console.log('token',dataa)
      const response = await axios.get(`http://localhost:4000/removeFromCart/${food1._id}`,{ headers: {"auth" : `${dataa}`} });
      console.log("response is ", response)
      if (!response || response.status !== 200)
        return "erreur";
        console.log(_cart)
        return  dispatch({ type: "FOOD_CART", payload: response.data });
    } catch (err) {
      console.log(err.message);
     
    }
   }
   const onClickRemoveHandler = () =>{
     removeFood()
   }
  return (
  
     <div className="FoodInBag">
       <div className="FoodInBag1">
           <div className="img-and-foodname">
          <div className="img-FoodInBag">
        <img src={food1.imgsrc} alt="nofound" height="100" />
          </div>
           <div className="FoodInBag-name"><span>{food1.title}</span></div>
           </div>
           <div className="price-and-qte">
           <div className="FoodInBag-prix">
             <span className="prix">Price</span>
             <span>{food1.price} $</span>
             </div>
           <div className="FoodInBag-qte">  
            <div className="qte"><span>Quantité</span></div> 
              <div>
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
              </div>
            </div>
            <div className="total">  
              <div className="total-text"><span>Total</span></div>
              <div>5555</div>
              </div>
         <div><button   onClick={onClickRemoveHandler}>X</button></div>
           
           </div>
          
      </div>
     </div>
  );
}

export default FoodInBag;
