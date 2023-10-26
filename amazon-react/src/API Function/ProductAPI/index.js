import axios from "axios";
import { ACTION } from "../../MainContext/Reducer__/FormReducer";
import { apiUrl } from "../../Utils__/apiUrl";

export const getData = async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/get`);
    dispatch({
      type: ACTION.GETDATA,
      payload: { data: response.data },
    });
  } catch (e) {
    console.log(e);
  }
};
