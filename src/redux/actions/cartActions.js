export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  
    // Cart ko localStorage mein save karo taaki refresh hone par data na ude
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  