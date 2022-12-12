const initialState = [];

const addtoCartReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADDTOCART":
      return [...state, action.payload];
    default:
      return [...state];
  }
};

export default addtoCartReducer;
