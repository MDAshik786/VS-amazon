import { ACTION } from "../../MainContext/Reducer__/FormReducer"

export const buttonLoading = (dispatch) => {
    dispatch({
        type:ACTION.BUTTONVISIBILITY,
        payload:{value:true}
    })     
}