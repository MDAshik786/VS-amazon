import { userApiUrl } from "../Utils__/apiUrl"

export const userDetails = async (email) => {
    try{
        const response = await axios.get(`${userApiUrl}/${email}`)

    }
    catch(e){
        console.log(e,"userDetails")
    }
}
// @GetMapping("/{email}")
// public ResponseEntity<User> getUserDetails(@PathVariable String email){
//     User user = userDataRepository.findByEmail(email);
//     return new ResponseEntity<User>(user,HttpStatus.OK);
// }