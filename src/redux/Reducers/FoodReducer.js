const initialState = {
    foods: [], //
    
    
  };
  const FoodReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FOODS":
        return { ...state, foods: action.payload };
      default:
        return state;
    }
  };
  export default FoodReducer;