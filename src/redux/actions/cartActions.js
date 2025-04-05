export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  
    // Save the cart to localstorage so that the data is not lost on refresh
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  