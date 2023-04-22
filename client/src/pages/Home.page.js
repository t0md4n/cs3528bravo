import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import { Link } from "react-router-dom";
import { Container } from '@mui/system';

import Hero from "../components/Hero";
import '../components/css/home.css';

 
export default function Home() {
 const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();
     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }


 return (
   <>
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    title="Welcome to Spòrs"
    text="Want to view the current events?"
    buttonText="Events"
    url="./events"
    btnClass="show"
    />
    <Container style={{ paddingTop: '100px', paddingBottom: '300px' }}>
    
      <h1>You are currently logged in</h1>
      <Button style={{left: '50%', transform: 'translate(-50%, 50%)'}}variant="contained" onClick={logOut}>Logout</Button>

       
     </Container>
   </>
 )
}