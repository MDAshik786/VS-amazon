import React, { useEffect } from "react";
import "./WishList.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import { getAllWishListData } from "../API/WhishListAPI";
import SecondWishList from "./SecondWishList";
const WishList = ({ state, dispatch }) => {
  useEffect(() => {
    getAllWishListData(dispatch);
  }, []);
  return (
    <div className="wishList-Main-div">
      <span className="list">Your List</span>
      <div className="wishlist-div">
        <div className="list-header">
          <div className="list-layout">
            {" "}
            <LuLayoutGrid />
            <BsLayoutTextWindowReverse />
          </div>
          <div className="searchBar">
            <input type="text" className="wishlist-searchBar" />
            <BiSearchAlt className="list-search-icon" />
            <span className="list-filter">Filter & Sort</span>
          </div>
        </div>
        <SecondWishList state={state} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default WishList;
