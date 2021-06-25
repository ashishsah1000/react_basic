export const initialState = {
  bucket: [],
  user: null
};
function Reducer(state, action) {
  console.log(state.bucket);
  switch (action.type) {
    case "ADD_THE_ELEMENT":
      return {
        ...state,
        bucket: [...state.bucket, action.item]
      };
    case "REMOVE_ELEMENT":
      return { state, bucket: [] };
    default:
      return state;
  }
}

export default Reducer;
