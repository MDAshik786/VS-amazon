export const ACTION = {
  GETDATA: "getdata",
  FILTERDATA: 'filterData',
  HANDELONCHANGE: "handelOnChange",
  EMAIL: "email",
  PASSWORD: "password",
  VISIBLE: "passwordVisible",
  PRODUCTCOUNT: "productCount",
  COUNTNAME: "countName",
  WISHLIST: "wishList",
  CURRENCY: "currency",
  ADDTOCART: "addToCart",
  UPDATEQUANTITY: "updateQuantity",
  SAVEDATA: "saveData",
  DELETEPRODUCT: "deleteProduct",
  GETALLWISHLIST: "getAllWishListProduct",
  ADDTOCARTVISIBLITY: "addtoCartVisibility",
  SIGNINVISIBILITY: "signInVisiblity",
  REMOVE: "removed",
  LOCATIONVISIBLE: "locationVisble",
  WISHLISTCONTAINER: "wishListContainer",
  CHECKOUTVISIBILITY: "checkoutVisibility",
  ADDRESSVISIBLE: "addressVisible",
  BUTTONVISIBILITY: "buttonVisibility",
  ERROR: "error",
  CLEARDATA: "clearData",
  FRESHPRODUCTCOUNT:'freshProductCount'
};

export const InitialValue = {
  searchInput:'',
  email: "",
  password: "",
  pincode: "",
  pincodeName: "",
  passwordVisible: false,
  wishList: [],
  getApiData: [],
  filterData:[],
  productCount: {},
  currency: true,
  addToCart: [],
  updatedQuantity: {},
  signInVisibility: false,
  addToCartVisibility: {},
  locationVisible: false,
  shippingCharges: 0,
  wishListContainer: 2,
  addressVisible: false,
  buttonLoading: false,
  error: {
    pincode: "",
    email: "",
    password: "",
    payment:''
  },
  checkoutVisiblity: {
    address: true,
    payment: false,
    item: false,
  },
};
export const FormReducer = (state, action) => {
  switch (action.type) {
    case ACTION.HANDELONCHANGE:
      if (action.payload.name === "pincodeName")
        localStorage.setItem(
          "pincodeDetails",
          JSON.stringify({
            name: action.payload.value,
            pincode: action.payload.pincode,
          })
        );
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTION.VISIBLE:
      return {
        ...state,
        passwordVisible: !state.passwordVisible,
      };
    case ACTION.PRODUCTCOUNT:
      return {
        ...state,
        productCount: {
          ...state.productCount,
          [action.payload.key]: action.payload.value,
        },
      };
    case ACTION.FRESHPRODUCTCOUNT:
      return{
        ...state,
        productCount:[]
      }
    case ACTION.COUNTNAME:
      const updatedQuantity = { ...state.productCount };
      if (action.payload.name === "increase") {
        updatedQuantity[action.payload.key] =
          (Number(updatedQuantity[action.payload.key]) || 1) + 1;
      } else {
        updatedQuantity[action.payload.key] = Math.max(
          (Number(updatedQuantity[action.payload.key]) || 1) - 1,
          1
        );
      }
      return {
        ...state,
        productCount: updatedQuantity,
      };
    case ACTION.GETALLWISHLIST:
      return {
        ...state,
        wishList: action.payload.data,
      };
    case ACTION.GETDATA:
      return {
        ...state,
        getApiData: action.payload.data,
      };
      case ACTION.FILTERDATA:
    
      return {
        ...state,
        filterData: action.payload.data,
      };
    case ACTION.ADDTOCART:
      return {
        ...state,
        addToCart: action.payload.data,
      };
    case ACTION.CURRENCY:
      return {
        ...state,
        currency: !state.currency,
      };
    case ACTION.UPDATEQUANTITY:
      return {
        ...state,
        updatedQuantity: {
          [action.payload.data]:
            state.updatedQuantity[action.payload.data] === undefined
              ? true
              : !state.updatedQuantity[action.payload.data],
        },
      };
    case ACTION.SAVEDATA:
      let singleData = state.addToCart;
      singleData.map((data) => {
        if (data.productId === action.payload.id)
          data.userQuantity = state.productCount[action.payload.id]
            ? Number(state.productCount[action.payload.id])
            : 1;
      });
      localStorage.setItem("addToCart", JSON.stringify(singleData));
      return {
        ...state,
        addToCart: singleData,
      };
    case ACTION.DELETEPRODUCT:
      const deleteProduct = state.addToCart.filter(
        (data) => data.productId !== action.payload.id
      );
      localStorage.setItem("addToCart", JSON.stringify(deleteProduct));
      return {
        ...state,
        addToCart: deleteProduct,
      };
    case ACTION.SIGNINVISIBILITY:
      return {
        ...state,
        signInVisibility: true,
      };
    case ACTION.ADDTOCARTVISIBLITY:
      return {
        ...state,
        addToCartVisibility: {
          [action.payload.id]: state.addToCartVisibility[action.payload.id]
            ? !state.addToCartVisibility[action.payload.id]
            : true,
        },
      };
    case ACTION.REMOVE:
      return {
        ...state,
        addToCartVisibility: {},
        signInVisibility: false,
        locationVisible: false,
      };
    case ACTION.LOCATIONVISIBLE:
      return {
        ...state,
        locationVisible: true,
      };
    case ACTION.WISHLISTCONTAINER:
      return {
        ...state,
        wishListContainer: action.payload.value,
      };
    case ACTION.ADDRESSVISIBLE:
      return {
        ...state,
        addressVisible: !state?.addressVisible,
      };
    case ACTION.CHECKOUTVISIBILITY:
      const value = action?.payload?.value;

      const resetVisibility = (property) => ({
        address: false,
        payment: false,
        item: false,
      });

      const newCheckoutVisibility = {
        address: false,
        payment: false,
        item: false,
      };

      if (value === "address") {
        newCheckoutVisibility.address = !state?.checkoutVisiblity?.address;
        if(!newCheckoutVisibility.address){
          newCheckoutVisibility.payment = true;
        }
      } else if (value === "payment") {
        newCheckoutVisibility.payment = !state?.checkoutVisiblity?.payment;
        if(!newCheckoutVisibility.payment){
          newCheckoutVisibility.item = true;
        }
      } else if (value === "item") {
        newCheckoutVisibility.item = !state?.checkoutVisiblity?.item;
      }

      const updatedCheckoutVisibility = {
        ...resetVisibility(),
        ...newCheckoutVisibility,
      };

      return {
        ...state,
        checkoutVisiblity: updatedCheckoutVisibility,
      };
    case ACTION.BUTTONVISIBILITY:
      return {
        ...state,
        buttonLoading: action.payload.value,
      };
    case ACTION.ERROR:
      const { name, errors } = action.payload;
      return {
        ...state,
        error: {
          ...state?.error,
          [name]: errors,
        },
      };
    case ACTION.CLEARDATA:
      return {
        ...state,
        [action.payload.name]: "",
        error: {
          ...state?.error,
          [action.payload.name]: "",
        },
      };
    default:
      return state;
  }
};
