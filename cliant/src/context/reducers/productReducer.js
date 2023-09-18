const productReducer = (state = null, actions) => {
  switch (actions.type) {
    case "GET_ALL_PRODUCTS":
      return state;
    case "SET_ALL_PRODUCTS":
      return actions.products;
    default:
      return state;
  }
};

export default productReducer;
