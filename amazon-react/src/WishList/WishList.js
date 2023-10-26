import React, { useEffect } from "react";
import "./WishList.css";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import { getAllWishListData } from "../API Function/WishListAPI";
import SecondWishList from "./SecondWishList";
import FirstWishList from "./FirstWishList";
import { ACTION } from "../MainContext/Reducer__/FormReducer";
import { useMain } from "../MainContext";

const WishList = () => {
  const mainContext = useMain();
  useEffect(() => {
    getAllWishListData(mainContext?.dispatch);
  }, []);
  const wishListContainers = (value) => {
    console.log(value);
    mainContext?.dispatch({
      type: ACTION.WISHLISTCONTAINER,
      payload: { value },
    });
  };
  let favHeart = [];
  try {
    mainContext?.state.wishList &&
      mainContext?.state.wishList.map((data) => {
        favHeart.push(data.id);
      });
  } catch (error) {}
  return (
    <div className="wishList-Main-div">
      <span className="list">Your List</span>
      <div className="wishlist-div">
        <div className="list-header">
          <div className="list-layout">
            <LuLayoutGrid
              className="img1 active"
              onClick={() => wishListContainers(1)}
            />
            <BsLayoutTextWindowReverse
              className="img2"
              onClick={() => wishListContainers(2)}
            />
          </div>
          <div className="searchBar">
            <input type="text" className="wishlist-searchBar" />
            <BiSearchAlt className="list-search-icon" />
            <span className="list-filter">Filter & Sort</span>
          </div>
        </div>
        {mainContext?.state?.wishListContainer === 1 ? (
          <FirstWishList favHeart={favHeart} />
        ) : (
          <SecondWishList favHeart={favHeart} />
        )}
      </div>
    </div>
  );
};

export default WishList;
