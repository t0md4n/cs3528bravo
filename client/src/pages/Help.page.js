import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext} from "../contexts/user.context";
import { Container } from '@mui/system';



export default function Help() {

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
			<Container style={{ paddingTop: '50px', paddingBottom: '100px' }}>

				<h1>User Manual</h1>
				
				<p> <b>How to sign up:</b> Go to the sign up page. When signing up you must enter a unique password with
					a special character, numerics and a capital letter. If the email is already in use you must use another one.
				</p>
				
				<p> <b>How to login:</b> Go to the login page and type in the email and password used to sign up, select
					login and then you will be brought to the homepage.
				</p>
				
				<p>	<b>How to access and join events:</b> Once you are logged in, go to the current events page to view
					the current events, once you press sign up the event will be moved to the My Events section which you
					can access by looking through the Events tab at the top or directly by pressing the My Events button at
					the top right.
				</p>
				
				
				<p>	<b>How to create your own event:</b> You can select the Create Event option when looking at the Events
					tab at the top. This will allow you to select the sport that will be played, the location, time and maximum
					number of participants. You cannot make an event in the past. Once you press Create other users will then be
					able to see the event in their Current Events page. The user that creates the event will automatically be signed
					up to the event so it will be then found in that user's My Events section.
				</p>
				
				<p>	<b>How to access your joined events:</b> Once you make an event or sign up to an event
					you can access it in the My Events section. This is split into two sections, the Events
					Created section and the Signed Up For section. Under Events Created you can track how many users have signed up to your event,
					you also have the option to cancel the event altogether. Once you have made an event you as the creator are automatically signed up to the
					event so it will also appear under the signed up for section along with the events you have signed up to made by other users, there is a
					clear leave button which will take you out of that event. If you have removed yourself from an event it will leave the My Event section and
					reappear in the Current events section where you will have the chance to sign up again if your mind changes.
				</p>
				
				<p>	<b>How to log out:</b> To log off simply go to the home page and select the logout button at the bottom of the screen.
				</p>
				
				<p>If you run into any issues please email sporshelp@gmail.com for help</p>
				<Button style={{ left: '50%', transform: 'translate(-50%, 50%)' }} variant="contained" onClick={logOut}>Logout</Button>


			</Container>
		</>
	);

}