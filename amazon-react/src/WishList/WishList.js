import React, { useEffect } from "react";
import "./WishList.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import { getAllWishListData } from "../API/WhishListAPI";
import SecondWishList from "./SecondWishList";
import FirstWishList from "./FirstWishList";
import { ACTION } from "../Reducer__/FormReducer";

const WishList = ({ state, dispatch }) => {
  useEffect(() => {
    getAllWishListData(dispatch);
  }, []);
 const wishListContainers = (value) => {
  console.log(value)
  dispatch({
    type:ACTION.WISHLISTCONTAINER,
    payload:{value}
  })
 }
  let favHeart = [];
  try {
    state.wishList &&
      state.wishList.map((data) => {
        favHeart.push(data.id);
      });
  } catch (error) {}
  return (
    <div className="wishList-Main-div">
      <span className="list">Your List</span>
      <div className="wishlist-div">
        <div className="list-header">
          <div className="list-layout">
            <LuLayoutGrid  className="img1 active" onClick={() => wishListContainers(1)} />
            <BsLayoutTextWindowReverse className="img2" onClick={() => wishListContainers(2)} />
          </div>
          <div className="searchBar">
            <input type="text" className="wishlist-searchBar" />
            <BiSearchAlt className="list-search-icon" />
            <span className="list-filter">Filter & Sort</span>
          </div>
        </div>
        {state?.wishListContainer === 1 ?
        <FirstWishList state={state} dispatch={dispatch} favHeart={favHeart} /> :
        <SecondWishList state={state} dispatch={dispatch} favHeart={favHeart} />
        }
      </div>
    </div>
  );
};

export default WishList;
