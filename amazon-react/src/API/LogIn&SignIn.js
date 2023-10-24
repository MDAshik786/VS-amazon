import axios from "axios";
import { userApiUrl } from "../Utils__/apiUrl";
export const loginEmailVerification = async (navigate, state) => {
  try {
    const response = await axios.post(
      `${userApiUrl}/email`,
      { email: state.email },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    if (response.data === "verified")
      navigate("/loginpassword", {
        state: { loginEmail: true, email: state.email },
      });
  } catch (e) {
    console.log(e);
  }
};
export const loginPasswordVerification = async (navigate, state, email) => {
  try {
    const response = await axios.post(
      `${userApiUrl}/password`,
      { email, password: state.password },
      {
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    console.log(response.data, "pass");
    if (response.data === "verified")
      navigate("/", { state: { loginVerification: true, email } });
  } catch (e) {
    console.log(e);
  }
};
export const adduser = async (navigate,userData) => {
  try {
    const response = await axios.post(userApiUrl, {
      email: userData.email,
      password: userData.password,
      name: userData.name,
      phone: userData.phone,
    });
    if (response.data === "Added")
      navigate("/", { state: { Varification: true } });
  } catch (e) {
    console.log(e);
  }
};
