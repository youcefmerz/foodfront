import { combineReducers } from "redux";
import foodReducer from "./FoodReducer";

const rootReducer = combineReducers({
    food: foodReducer,
});
export default rootReducer;