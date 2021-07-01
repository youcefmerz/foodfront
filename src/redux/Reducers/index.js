import { combineReducers } from "redux";
import foodReducer from "./FoodReducer";
import filtreReducer from "./filterReducer";
import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
    food: foodReducer,
    filter: filtreReducer,
    cart: CartReducer,
});
export default rootReducer;