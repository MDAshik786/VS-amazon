import { buttonLoading } from "../../Function/ComponentFunctions/HandleFunction";
import { removeLocation } from "../../Function/ComponentFunctions/PinCodeFunction";
import { pinCodeValidation } from "../../Function/ComponentFunctions/ValidationFunction";
import { ACTION } from "../../MainContext/Reducer__";

export const getPinCode = async (pincode, dispatch) => {
  const response = pinCodeValidation(pincode);
  !response &&
    dispatch({
      type: ACTION.ERROR,
      payload: { name: "pincode", errors: "Please Enter Valid Pincode" },
    });
  response &&
    (async () => {
      buttonLoading(dispatch);
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await res.json();

      const value = data[0]?.PostOffice[1]?.Name;
      dispatch({
        type: ACTION.HANDELONCHANGE,
        payload: { value, name: "pincodeName", pincode },
      });
      dispatch({
        type: ACTION.BUTTONVISIBILITY,
        payload: { value: false },
      });

      data && removeLocation(dispatch);
    })();
};
