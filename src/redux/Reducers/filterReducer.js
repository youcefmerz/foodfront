const initialState = {
    title: "",
  };
  const filtreReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TITLE":
        return { ...state, title: action.payload };
      default:
        return state;
    }
  };
  export default filtreReducer;