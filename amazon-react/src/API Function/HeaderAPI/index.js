import { ACTION } from "../../MainContext/Reducer__";

export const callSignIn = (dispatch) => {
  dispatch({
    type: ACTION.SIGNINVISIBILITY,
  });
  setTimeout(() => {
    console.log("second");
    dispatch({
      type: ACTION.REMOVE,
    });
  }, 5000);
};
export const addAddress = (dispatch) => {
  dispatch({
    type: ACTION.LOCATIONVISIBLE,
  });
};
