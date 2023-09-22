export const ACTION = {
  GETDATA: "getdata",
  HANDELONCHANGE: "handelOnChange",
  EMAIL: "email",
  PASSWORD: "password",
  VISIBLE: "passwordVisible",
  PRODUCTCOUNT: "productCount",
  COUNTNAME:"countName",
  WISHLIST:"wishList"
};

export const InitialValue = {
  email: "",
  password: "",
  passwordVisible: false,
  wishList: {},
  getApiData:[],
  productCount: {},
};
export const FormReducer = (state, action) => {
  switch (action.type) {
    case ACTION.HANDELONCHANGE:
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
      }
      case ACTION.COUNTNAME:
  const updatedQuantity = { ...state.productCount };
  if (action.payload.name === 'increase') {
    updatedQuantity[action.payload.key] = (Number(updatedQuantity[action.payload.key]) || 1) + 1;
  } else {
    updatedQuantity[action.payload.key] = Math.max((Number(updatedQuantity[action.payload.key]) || 1) - 1, 1);
  }
  return {
    ...state,
    productCount: updatedQuantity, 
  };
  case ACTION.WISHLIST:
    return {
      ...state,wishList: action.payload.data
    } 
  case ACTION.GETDATA:
    console.log(action.payload.data,"action")
    return{
      ...state,
      getApiData: action.payload.data
    }
    default:
      return state;
  }
};
