export const addtoCartRedux = (id) => {
  //   console.log("Redux id is :", id);
  return {
    type: "ADDTOCART",
    payload: id,
  };
};
export const itemCounterInc = () => {
  return {
    type: "INCREMENT",
  };
};
export const itemCounterDec = () => {
  return {
    type: "DECREMENT",
  };
};
