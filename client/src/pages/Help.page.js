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

				<h1>User manual</h1>
				<p>	1. Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>	Test </p>
				<p>If you run into any other issues please email spòrshelp@gmail.com </p>
				<Button style={{ left: '50%', transform: 'translate(-50%, 50%)' }} variant="contained" onClick={logOut}>Logout</Button>


			</Container>
		</>
	);

}