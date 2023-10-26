import { addAShippingValue, getAllCartData } from "../../API Function/CartAPI";
import { ACTION } from "../../MainContext/Reducer__/FormReducer";

export const handleClickRadio = async (productId, option, dispatch) => {
  console.log(productId, option);
  await addAShippingValue(
    JSON.parse(localStorage.getItem("datas"))?.email,
    productId,
    option
  );
  getAllCartData(dispatch);
};
export const updateQunatityValue = (id, dispatch) => {
  dispatch({
    type: ACTION.UPDATEQUANTITY,
    payload: { data: id },
  });
};
