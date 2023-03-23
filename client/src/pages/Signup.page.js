import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import '../components/css/signUp.css';
 
const Signup = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const [passwordShown, setPasswordShown] = useState(false);
 const [password, setPassword] = useState('');
 const [isValid, setIsValid] = useState(true);
 const [matching, setIsMatching] = useState(true);
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: "",
   confirmPass: "",
   age: "",
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
const passwordVerify = (event) => {
  const password = event.target.value;
  const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  if(password === ""){
    setIsValid(true);
  }
  else if(password.match(pattern) == null){
    setIsValid(false);
  }
  else{
    setIsValid(true);
  }
  setPassword(password);
  
}

// checks for matching passwords
const matchingPasswords = (event) =>{
  const confirmPass = event.target.value;
  if(confirmPass === ""){
    setIsMatching(true);
  }else if (confirmPass !== password){
    setIsMatching(false);
  }else{
    setIsMatching(true);
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
 
  return <form style={{ padding: "20px", display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
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
     onChange = {passwordVerify} 
     style={{ marginBottom: "1rem" }}
     required = "true"
   />
   {isValid ? null : <p><span style={{color:'red'}}>Must contain: 1 Uppercase, 1 Lowercase, 1 Special Character</span></p>}
   <TextField
     label="Confirm Password"
     type={passwordShown ? "text" : "password"}
     variant="outlined"
     name="confirmPass"
     value={form.confirmPass}
     onInput={onFormInputChange}
     onChange = {matchingPasswords} 
     style={{ marginBottom: "1rem" }}
     required = "true"
   />
   {matching ? null : <p><span style={{color:'red'}}>Passwords Do Not Match</span></p>}
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