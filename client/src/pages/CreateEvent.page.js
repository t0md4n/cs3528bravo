import React, { useState } from 'react';
import '../components/css/createEvent.css';

// https://cs3528.azurewebsites.net/createevent
 const CreateEvent = () => {
    // Set up state to hold the form data
    const [sportType, setSportType] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const [maxParticipants, setMaxParticipants] = useState("");

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
                creator: "63f3500cb72c98bd43764ac4",
                participants: ["63f3500cb72c98bd43764ac4"]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    }

    return (  
    <form onSubmit={handleSubmit}>
        <div className="createevent">  
            <h2>Create an Event</h2>

            <select
                value={sportType}
                onChange={(event) => setSportType(event.target.value)}
            >
                <option value="">Select Sport</option>
                <option value="Football">Football</option>
                <option value="Tennis">Tennis</option>
                <option value="Basketball">Basketball</option>
            </select>

            <input 
                type='text' 
                placeholder='Address'value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            
            <select 
                value={city}
                onChange={(event) => setCity(event.target.value)}
            >
            <option value="">-- Select a city --</option>
            <optgroup label="Scotland">
                <option value="Edinburgh">Edinburgh</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Aberdeen">Aberdeen</option>
                <option value="Dundee">Dundee</option>
            </optgroup>
            </select>


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
            <input type='number' 
                placeholder='Max participants'
                value={maxParticipants}
                onChange={(event) => setMaxParticipants(event.target.value)}
            />

        
            <button type='submit'>Create</button>
        </div>
    </form>

    )
 };

 export default CreateEvent;