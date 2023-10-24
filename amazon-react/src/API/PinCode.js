import { ACTION } from "../MainContext/Reducer__/FormReducer";


export const getPinCode = async(pincode,dispatch) => {

     const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
     const data = await res.json();
     console.log(data[0].PostOffice[1].Name);
   
     dispatch({
        type:ACTION.HANDELONCHANGE,
        payload:{value:data[0].PostOffice[1].Name, name:'pincodeName',pincode}
     })
}