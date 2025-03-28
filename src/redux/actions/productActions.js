import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAIL", payload: error.message });
  }
};
