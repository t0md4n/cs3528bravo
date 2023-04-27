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
    heroImg="https://i.ibb.co/W3xZCVL/hero.jpg"
    title="Welcome to Spòrs"
    text="Want to view the current events?"
    buttonText="Events"
    url="./events"
    btnClass="show"
    
    />
    <Container style={{ paddingTop: '100px', paddingBottom: '150px' }}>
    
      <h1>You are currently logged in</h1>
      <Button style={{left: '50%', transform: 'translate(-50%, 50%)'}}variant="contained" onClick={logOut}>Logout</Button>

       
     </Container>
   </>
 )
}