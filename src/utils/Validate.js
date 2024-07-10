export const checkValidate = ( email, password) => {
   // const isnamevalid = /^[A-Za-z][A-Za-z0-9_]{3,29}$/.test(name)
    const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    //if(!isnamevalid) return "name is not valid"
    if(!isemailvalid) return "Email is not valid"
    if(!ispasswordvalid) return "Password is not valid";
    
    return null;
}