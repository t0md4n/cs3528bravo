import './css/createEvent.css';


export const CreateEvent = () => {

    const handleSubmit = (event) => {
        ////////////////
    }

    return (  
    <form onSubmit={handleSubmit}>
        <div className="createevent">  
            <h2>Create an Event</h2>
            <select id="sport-type" name="sport-type">
                <option value="">Select Sport</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
            </select>
            <input type='text' placeholder='Address'/>
            <input type='text' placeholder='Location'/>
            
            <select id="city" name="city">
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


            <input type='date' placeholder='Date'/>
            <input type='time' placeholder='Time'/>
            <input type='number' placeholder='Max participants'/>

        
            <button type='submit'>Create</button>
        </div>
    </form>

    )
};