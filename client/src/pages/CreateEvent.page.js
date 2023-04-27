import React, { useState, useEffect, useContext } from 'react';
import '../components/css/createEvent.css';
import { Container } from '@mui/system';
import { Button } from "@mui/material";
import { UserContext } from "../contexts/user.context";


// https://cs3528.azurewebsites.net/createevent
 const CreateEvent = () => {
    // Set up state to hold the form data
    const [sportType, setSportType] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const [maxParticipants, setMaxParticipants] = useState("");

    const { user } = useContext(UserContext);
    const userProfile = user ? user.profile : null;

    // user id
    const userId = user.id;

    const handleSubmit = (event) => {
        // event.preventDefault();
        const formattedDate = new Date(date).toLocaleDateString('en-GB');
        // console.log(sportType, address, city, formattedDate, time, maxParticipants);

        fetch('https://cs3528.azurewebsites.net/createevent', {
            method: 'POST',
            body: JSON.stringify({
                sportType: sportType,
                address: address,
                city: city,
                date: formattedDate,
                time: time,
                maxParticipants: maxParticipants,
                signedUp: 1,
                creator: userId,
                participants: [userId],
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    }

     return (
        
         <Container style={{ paddingTop: '20px',display: "flex", flexDirection: "column", maxWidth: "px", margin: "auto"}}>
            <form onSubmit={handleSubmit}>
                 <h2>Create an Event</h2>
                 <label>
                     Select a sport:
                    <select name="pickSport"
                        value={sportType}
                        onChange={(event) => setSportType(event.target.value)}
                    >
                        <option value="Football">Football</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Basketball">Basketball</option>
                    </select>
                </label>
                 <hr/ >
                 <label>
                    Enter the location of the event:
                    <input 
                        type='text' 
                        placeholder='Address'value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        />
                 </label>
                 <hr/ >
                <label>
                    Select a city:
                    <select 
                        name="selectedCity"
                        defaultValue={['Aberdeen']}
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    >
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Glasgow">Glasgow</option>
                        <option value="Aberdeen">Aberdeen</option>
                        <option value="Dundee">Dundee</option>
                    </select>
                 </label>
                 <hr/ >


                <label>
                    When does the event start?
                    <input 
                        type='date' 
                        placeholder='Date'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}    
                    />
                    <input type='time' 
                        placeholder='Time'
                        value={time}
                        onChange={(event) => setTime(event.target.value)} 
                        />
                 </label>
                 <hr/ >
                 <label>
                    Maximum number of participant (including yourself):
                    <input type='number' 
                        placeholder='0'
                        value={maxParticipants}
                        onChange={(event) => setMaxParticipants(event.target.value)}
                        />
                 </label>
                 <hr/ >
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                        Create
                    </Button>
                </form>
        </Container>
     )
 };

 export default CreateEvent;