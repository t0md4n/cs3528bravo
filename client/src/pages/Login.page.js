import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

 
const Login = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // we consume our user-management context to
 // get & set the user details here
 const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);
 
 // we then use React's "useState" hook to keep track
 // of the form values
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // this gets called whenever the user edits the form
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 // this redirects the user to the
 // appropriate page once the authentication is done
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 // we are checking if the user is already logged in and
 // if so we are redirecting the user to the home page.
 // otherwise we will do nothing and let the user to login.
 const loadUser = async () => {
   if (!user) {
     const fetchedUser = await fetchUser();
     if (fetchedUser) {
       // Redirecting them once fetched.
       redirectNow();
     }
   }
 }
 
 // this useEffect will run only once when the component is mounted
 // Hence this is helping us in verifying whether the user is already logged in
 // or not.
 useEffect(() => {
   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 // this gets called when the user clicks on the "Login" button
 const onSubmit = async (event) => {
   try {
     // we pass user details to our emailPasswordLogin
     // function that we imported from our realm/authentication.js
     // to validate the user credentials and log in the user into the app
     const user = await emailPasswordLogin(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
       if (error.statusCode === 401) {
          alert("Invalid username/password. Try again!");
      } else {
          alert(error);
      }
 
   }
 };
 
  return <form style={{ padding: "20px", display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
   <h1>Login</h1>
   <TextField
     label="Email"
     type="email"
     variant="outlined"
     name="email"
     value={form.email}
     onChange={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <TextField
     label="Password"
     type="password"
     variant="outlined"
     name="password"
     value={form.password}
     onChange={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <Button variant="contained" color="primary" onClick={onSubmit}>
     Login
   </Button>
   <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
  </form>
}
 
export default Login;