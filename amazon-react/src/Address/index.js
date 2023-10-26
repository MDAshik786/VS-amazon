import React, { useEffect, useState } from "react";
import "./index.css";
import { ACTION } from "../MainContext/Reducer__/FormReducer";
import { RxCross2 } from "react-icons/rx";
import { addAnAddress } from "../API Function/AddressAPI";
import { useMain } from "../MainContext";
import { handleAddressVisibility } from "../Function/ComponentFunctions/CheckoutFunctions";

const Address = () => {
  const mainContext = useMain();
  const [address, setAddress] = useState({
    country: "",
    name: "",
    phone: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    defaultAddress: false,
  });

  const handelOnChange = (e) => {
    const { name, value, type, checked } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  useEffect(() => {
    document.getElementsByClassName("body").className += " overflow-hidden";
  }, []);
  return (
    <div className="address-main">
      <div
        className="address-con"
        onClick={() => handleAddressVisibility(mainContext?.dispatch)}
      ></div>
      <div className="address-heading-container">
        <RxCross2
          className="address-cancel-icon"
          onClick={() => handleAddressVisibility(mainContext?.dispatch)}
        />
        <p className="address-heading">Enter a new delivery address</p>
        <div className="address-container">
          <p className="new-address">Add a new address</p>
          <div className="address-country">
            <p className="add-country">Country/Region</p>
            <input
              type="text"
              className="input-box"
              name="country"
              value={address.country}
              onChange={handelOnChange}
            />
          </div>
          <div className="address-name">
            <p className="add-name">Full name (First and Last name)</p>
            <input
              type="text"
              className="input-box"
              name="name"
              value={address.name}
              onChange={handelOnChange}
            />
          </div>
          <div className="address-phone">
            <p className="add-phone">Mobile number</p>
            <input
              type="number"
              className="input-box"
              name="phone"
              value={address.phone}
              onChange={handelOnChange}
            />
          </div>
          <div className="address-pincode">
            <p className="add-pincode">Pincode</p>
            <input
              type="number"
              className="input-box"
              placeholder="6 digits [0-9] PIN code"
              name="pincode"
              value={address.pincode}
              onChange={handelOnChange}
            />
          </div>
          <div className="address-flatnumber">
            <p className="add-flatnumber">
              Flat, House no., Building, Company, Apartment
            </p>
            <input
              type="text"
              className="input-box"
              name="flat"
              value={address.flat}
              onChange={handelOnChange}
            />
          </div>
          <div className="address-area">
            <p className="add-area">Area, Street, Sector, Village</p>
            <input
              type="text"
              className="input-box"
              name="area"
              value={address.rea}
              onChange={handelOnChange}
            />
          </div>
          <div className="address-landmark">
            <p className="add-landmark">Landmark</p>
            <input
              type="text"
              className="input-box"
              placeholder="E.g. near apallo hospital"
              name="landmark"
              value={address.landmark}
              onChange={handelOnChange}
            />
          </div>
          <div className="town-state-containers">
            <div className="address-towncity">
              <p className="add-towncity">Town/City</p>
              <input
                type="text"
                className="input-box"
                name="city"
                value={address.city}
                onChange={handelOnChange}
              />
            </div>
            <div className="address-state">
              <p className="add-state">State</p>
              <input
                type="text"
                className="input-box"
                value={address.state}
                onChange={handelOnChange}
                name="state"
              />
            </div>
          </div>
          <div className="default-address-container">
            <input
              type="checkbox"
              className="default-address-input"
              name="defaultAddress"
              onChange={handelOnChange}
              value={address.defaultAddress}
              checked={address.defaultAddress}
            />
            <span>Make this my default address</span>
          </div>
          <button
            className="address-button"
            onClick={() =>
              addAnAddress(
                JSON.parse(localStorage.getItem("datas"))?.email,
                address
              )
            }
          >
            Use this address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
