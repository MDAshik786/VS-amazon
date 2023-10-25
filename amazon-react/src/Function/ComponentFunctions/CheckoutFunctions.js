import { ACTION } from "../../MainContext/Reducer__/FormReducer";

export const handleCheckoutCondition = (dispatch, value) => {
  console.log(value);
  dispatch({
    type: ACTION.CHECKOUTVISIBILITY,
    payload: { value },
  });
};
export const handleAddressVisibility = (dispatch) => {
  dispatch({
    type: ACTION?.ADDRESSVISIBLE,
  });
};
