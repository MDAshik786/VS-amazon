import axios from "axios";
import { wishList } from "../Utils__/apiUrl";
import { ACTION } from "../Reducer__/FormReducer";

export const AddToWishList = async (product) => {
  
    try {
      const response = await axios.post(
        `${wishList}/add/${JSON.parse(localStorage.getItem("datas"))?.email}/${product.id}`,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          priceCents: product.priceCents,
          priceIndia: product.priceIndia,
          totalQuantity: product.totalQuantity,
          ratingStar: product.ratingStar,
          ratingcount: product.ratingCount,
          description: product.description,
          size: product.size,
        },
        {
          headers: {
            "content-Type": "application/json",
          },
        }
        );
      console.log(response.data)
    } catch (e) {
      console.log(e, "wishList Error");
    }
  };
 export const deleteFromWishList = async (id) => {
    console.log(`${wishList}/delete/${JSON.parse(localStorage.getItem("datas"))?.email}/${id}`)
    try {
      const response = await axios.delete(
        `${wishList}/delete/${JSON.parse(localStorage.getItem("datas"))?.email}/${id}`
      );
    } catch (e) {
      console.log(e, "deleteFromWishList Error");
    }
  };
 export const getAllWishListData = async (dispatch) => {
    try {
      const response = await axios.get(
        `${wishList}/get/${JSON.parse(localStorage.getItem("datas")).email}`
      );
      dispatch({
        type: ACTION.GETALLWISHLIST,
        payload: { data: response.data },
      });
    } catch (e) {
      console.log(e, "getAllDataFromWishList");
    }
  };