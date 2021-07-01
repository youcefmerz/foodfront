import './Menu.css';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function Menu() {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.filter);

    
      const fetchData = async (typ) => {
        try {
          const response = await axios.get(`http://localhost:4000/food/${typ}`);
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
     <div className="Menu">
      <div><h2 className="Menu-title">Notre Menu</h2></div>
      <ul className="menu-list">
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>Pret a la maison</li>
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>Tacos</li>
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>Sawndiwchs</li>
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>Burgers</li>
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>pizza</li>
        <li onClick={(event) => {
           fetchData(event.target.textContent);
          ;
        }}>grecs</li>
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>Deseerts</li>
        <li onClick={(event) => {
          fetchData(event.target.textContent);
          ;
        }}>Boissons</li>

      </ul>


    </div>
  );
}

export default Menu;
