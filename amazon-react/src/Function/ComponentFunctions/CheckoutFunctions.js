import { ACTION } from "../../MainContext/Reducer__";

export const handleCheckoutCondition = (dispatch, value) => {
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
export const handelAddressRadio = (address, id, setFunction) => {
  address?.getAllAddress &&
    address?.getAllAddress?.map((item, index) => {
      if (index === id) {
        return setFunction("defaultAddress", item);
      }
    });
};
export const addressContainer = (item) => {
  return (
    <div className="user-address-containers">
      {item.name && <span className="checkout-name">{item.name},</span>}
      {item.flat && <span className="user-address-details">#{item.flat},</span>}
      {item.area && <span className="user-address-details">{item.area},</span>}
      {item.landmark && (
        <span className="user-address-details">{item.landmark},</span>
      )}
      {item.city && <span className="user-address-details">{item.city},</span>}
      {item.state && (
        <span className="user-address-details">{item.state},</span>
      )}
      {item.pincode && (
        <span className="user-address-details">{item.pincode},</span>
      )}
      <span className="user-address-details">{item.country}</span>
    </div>
  );
};
