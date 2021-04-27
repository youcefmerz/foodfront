import React, { useEffect } from "react";
import './FoodsList.css';
import FoodCard from '../FoodCard/FoodCard'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function FoodList() {
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.food);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/foods");
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
console.log("rrrrrrrr",foods)

  return (
     <div className="Foods-list">
        {!foods || foods.length === 0 ? (
          <div>No Data To Display</div>
        ) : (
       <>
       {foods.map((food, index) => (
                <FoodCard
                  key={index}
                  title={food.title}
                  price={food.price}
                  imgsrc={food.imgsrc}
                />
              ))}
      </>
      )}
    </div>
  );
}

export default FoodList;
