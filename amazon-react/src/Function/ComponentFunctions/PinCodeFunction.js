import { useMain } from "../../MainContext";
import { ACTION } from "../../MainContext/Reducer__/FormReducer";
export const removeLocation = (dispatch) => {
    dispatch({
        type: ACTION.REMOVE,
    });
   
    clearAllPinCodeData(dispatch)
};

export const clearAllPinCodeData = (dispatch) => {

    dispatch({
        type:ACTION.CLEARDATA,
        payload:{name:"pincode"}
    })
}