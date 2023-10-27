import axios from "axios";
import { wishList } from "../../Utils__/apiUrl";
import { ACTION } from "../../MainContext/Reducer__";
import { handleNavigate } from "../../Function/ComponentFunctions/NavigateFunction";
export const AddToWishList = async (product) => {
  try {
    const response = await axios.post(
      `${wishList}/add/${JSON.parse(localStorage.getItem("datas"))?.email}/${
        product.id
      }`,
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
  } catch (e) {
    console.log(e, "wishList Error");
  }
};
export const deleteFromWishList = async (id) => {
  try {
    const response = await axios.delete(
      `${wishList}/delete/${
        JSON.parse(localStorage.getItem("datas"))?.email
      }/${id}`
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
export const checkWishList = async (
  key,
  product,
  navigate,
  dispatch,
  favHeart
) => {
  if (!JSON.parse(localStorage.getItem("datas"))?.loginVerification) {
    handleNavigate(navigate, "loginemail");
  } else {
    if (favHeart.includes(key)) {
      await deleteFromWishList(key);
      getAllWishListData(dispatch);
    } else {
      await AddToWishList(product);
      getAllWishListData(dispatch);
    }
  }
};
