export const initialState = {
    bucket: ["ashish"],
    user: null
  };
  function Reducer(state, action) {
    console.log(action)
    switch (action.type) {
      case "ADD_THE_ELEMENT":
        return {
          ...state,
          basket: [...state.basket,action.item]
        }
      case "REMOVE_ELEMENT":
        return {state}
      default:
        return state;
    }
  }
  
  export default Reducer;