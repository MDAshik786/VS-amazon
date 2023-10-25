import { emailRegex } from "../../Utils__/Rejex"

export const pinCodeValidation = (pincode) => {
        if(pincode.length === 6)
        return true
    return false
}
export const formValidation = (name, value) => {
    if (value === '') {
      return `${name} is Required`;
    } else if (name === 'email') {
      if (!emailRegex.test(value)) {
        return `${name} is Invalid`;
      }
    } else if (name === 'password') {
      if (value.length < 5) {
        return `${name} must be at least 6 characters`;
      }
    }
    return true;
  };
  