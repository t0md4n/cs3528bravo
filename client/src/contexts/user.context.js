import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../realm/constants";
 
// create a realm app instance
const app = new App(APP_ID);
 
// creating a user context to manage and access all the user related functions
// across different components and pages
export const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 
 // logs the user into our app service app using their email & password
 const emailPasswordLogin = async (email, password) => {
   const credentials = Credentials.emailPassword(email, password);
   const authenticatedUser = await app.logIn(credentials);
   setUser(authenticatedUser);
   return authenticatedUser;
 };
 
 // signs up the user into our app service app using their email & password
 const emailPasswordSignup = async (email, password) => {
   try {
     await app.emailPasswordAuth.registerUser(email, password);
     // we are automatically confirming users, so, we are going to log in
     // the user using the same credentials once the signup is complete
     return emailPasswordLogin(email, password);
   } catch (error) {
     throw error;
   }
 };
 
 // this fetches the user (if the user is already logged in) from local storage
 const fetchUser = async () => {
   if (!app.currentUser) return false;
   try {
     await app.currentUser.refreshCustomData();
     // if we have the user, we are setting it to our user context
     // so that we can use it in our app across different components
     setUser(app.currentUser);
     return app.currentUser;
   } catch (error) {
     throw error;
   }
 }
 
 // logout the user from our app services app
 const logOutUser = async () => {
   if (!app.currentUser) return false;
   try {
     await app.currentUser.logOut();
     // set the user to null once logged out
     setUser(null);
     return true;
   } catch (error) {
     throw error
   }
 }
 
 return <UserContext.Provider value={{ user, setUser, fetchUser, emailPasswordLogin, emailPasswordSignup, logOutUser }}>
   {children}
 </UserContext.Provider>;
}