import axios from "axios";
import { address } from "../../Utils__/apiUrl";

export const addAnAddress = async (email, addressData) => {
 
  try {
    const response = await axios.post(
      `${address}/${email}`,
      {
        country: addressData.country,
        name: addressData.name,
        phone: addressData.phone,
        pincode: addressData.pincode,
        flat: addressData.flat,
        area: addressData.area,
        landmark: addressData.landmark,
        city: addressData.city,
        state: addressData.state,
        defaultValue: addressData.defaultAddress,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};
export const getAllAddress = async (email) => {
  try {
    const response = await axios.get(`${address}/${email}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
