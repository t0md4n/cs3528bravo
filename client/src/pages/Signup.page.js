import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import '../components/css/signUp.css';
 
const Signup = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const [passwordShown, setPasswordShown] = useState(false);
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: "",
   confirmPass: "",
   age: "",
   location : "",
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };

 
 // toggle visibility of password
 const toggleVis = () => {
  setPasswordShown(!passwordShown);
}


// Special char, uppercase, lowercase etc.
const passwordVerify = (pass, message) => {
  let password = pass.value;
  let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  if (password === ""){
    document.getElementById(message).innerHTML = "";
  }else if(password.match(pattern) == null){
    document.getElementById(message).innerHTML = 'Password MUST contain: 1 Uppercase, 1 Lowercase, 1 Special Character, 1 Numeric Character';
    document.getElementById(message).style.color = 'red';
  }
  else{
    document.getElementById(message).innerHTML = "";
  }
}


// checks for matching passwords
const matchingPasswords = (passwordOne, passwordTwo, message) =>{
  let x = document.getElementById(passwordOne);
  let y = passwordTwo
  if(y.value === ""){
    document.getElementById(message).innerHTML = "";
  }else if (x.value !== y.value){
    document.getElementById(message).innerHTML = 'passwords not matching';
    document.getElementById(message).style.color = 'red';
  }else{
    document.getElementById(message).innerHTML = 'passwords match';
    document.getElementById(message).style.color = 'green';
  }
}
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }

 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
     const user = await emailPasswordSignup(form.email, form.password, form.confirmPass, form.age, form.location);
     if (user) {
       redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
   <h1>Sign up</h1>
   <TextField
     label="Email"
     type="email"
     variant="outlined"
     name="email"
     value={form.email}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
     required = "true"
   />
   <TextField
     label="Password"
     type={passwordShown ? "text" : "password"}
     variant="outlined"
     name="password"
     id = "password"
     value={form.password}
     onInput={onFormInputChange}
     onMouseEnter={toggleVis}
     style={{ marginBottom: "1rem" }}
     required = "true"
   />
   <p><span id='messageChars'></span></p>
   <TextField
     label="Confirm Password"
     type={passwordShown ? "text" : "password"}
     variant="outlined"
     name="confirmPass"
     value={form.confirmPass}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
     required = "true"
   />
   <TextField
     type="date"
     variant="outlined"
     name="age"
     value={form.age}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
     required = "true"
   />
   

   
   <Button variant="contained" color="primary" onClick={onSubmit}>
     Sign up
   </Button>
   <p>Have an account already? <Link to="/login">Login</Link></p>
 </form>
}
 


export default Signup;