import axios from "axios";
import { cart } from "../../Utils__/apiUrl";
import { ACTION } from "../../MainContext/Reducer__";
import { handleNavigate } from "../../Function/ComponentFunctions/NavigateFunction";

export const moveToCart = async (product, quantity, dispatch, navigate) => {
  let productQuantity = 1;
  if (quantity) productQuantity = quantity;

  if (JSON.parse(localStorage.getItem("datas"))?.loginVerification) {
    await addAProduct(product.id, productQuantity, dispatch);
    getAllCartData(dispatch);
  } else {
    handleNavigate(navigate, "loginemail");
  }
};
export const addAProduct = async (id, quantity, dispatch) => {
  try {
    const response = await axios.post(
      `${cart}/add/${JSON.parse(localStorage.getItem("datas"))?.email}`,
      { productId: id, quantity },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: ACTION.ADDTOCARTVISIBLITY,
      payload: { id },
    });
    setTimeout(() => {
      dispatch({
        type: ACTION.REMOVE,
      });
    }, 2000);
  } catch (e) {
    console.log(e, "addToCart Error");
  }
};

export const getAllCartData = async (dispatch) => {
  try {
    const response = await axios.get(
      `${cart}/get/${JSON.parse(localStorage.getItem("datas"))?.email}`
    );
    dispatch({
      type: ACTION.ADDTOCART,
      payload: { data: response.data },
    });
  } catch (e) {
    console.log(e, "GetAllDataToCart");
  }
};

export const addAShippingValue = async (email, productId, value) => {
  console.log(email, productId, value);
  try {
    const response = await axios.put(
      `${cart}/shipping/${email}/${productId}/${value}`
    );
  } catch (e) {
    console.log(e, "addAShippingValue");
  }
};
export const updateAProduct = async (id, quantity, email) => {
  try {
    const response = await axios.put(
      `${cart}/update/${email}`,
      { productId: id, quantity },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e, "addToCart Error");
  }
};
export const saveData = async (id, quantity, email, state, dispatch) => {
  const productCount = state.productCount[id]
    ? state.productCount[id]
    : quantity;
  await updateAProduct(id, productCount, email);
  getAllCartData(dispatch);
};
export const deleteAProduct = async (productId, email) => {
  try {
    const response = await axios.delete(`${cart}/delete/${productId}/${email}`);
    getAllCartData();
  } catch (e) {
    console.log(e);
  }
};
