import { useState } from 'react';
import './css/createEvent.css';


export const CreateEvent = () => {
    // Set up state to hold the form data
    const [sportType, setSportType] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("")
    const [maxParticipants, setMaxParticipants] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedDate = new Date(date).toLocaleDateString('en-GB');
        // console.log(sportType, address, city, formattedDate, time, maxParticipants);

        fetch('http://localhost:3001/createevent', {
            method: 'POST',
            body: JSON.stringify({
                sportType: sportType,
                address: address,
                city: city,
                date: date,
                time: formattedDate,
                maxParticipants: maxParticipants,
                creator: "63f3500cb72c98bd43764ac4",
                participants: ["63f3500cb72c98bd43764ac4"]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        // .then((response) => response.json())
        // .then((json) => console.log(json));
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
                <option value="football">Football</option>
                <option value="tennis">Tennis</option>
                <option value="basketball">Basketball</option>
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
            <optgroup label="England">
                <option value="London">London</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Leeds">Leeds</option>
                <option value="Bristol">Bristol</option>
                <option value="Newcastle">Newcastle</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Nottingham">Nottingham</option>
                <option value="Leicester">Leicester</option>
                <option value="Brighton">Brighton</option>
                <option value="Southampton">Southampton</option>
            </optgroup>
            <optgroup label="Scotland">
                <option value="Edinburgh">Edinburgh</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Aberdeen">Aberdeen</option>
                <option value="Dundee">Dundee</option>
            </optgroup>
            <optgroup label="Wales">
                <option value="Cardiff">Cardiff</option>
                <option value="Swansea">Swansea</option>
                <option value="Newport">Newport</option>
                <option value="Bangor">Bangor</option>
            </optgroup>
            <optgroup label="Northern Ireland">
                <option value="Belfast">Belfast</option>
                <option value="Londonderry">Londonderry</option>
                <option value="Newry">Newry</option>
                <option value="Armagh">Armagh</option>
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