// the search bar, the list data from API, and map go here
// each will pass data between eachother so they need to be together
import "../App.css";
import { useState, useEffect } from 'react';
import { useRef } from 'react';

function Laughmap() {
    const locationInput = useRef(null);
    const [shows, setShows] = useState([]);
    // const [latitude, setLatitude] = useState(0);
    // const [longitude, setLongitude] = useState(0);
    // const [userLocation, setUserLocation] = useState('');

    const addLocation = async (event) => {
        event.preventDefault();
        fetchLocation(locationInput.current.value);
        event.currentTarget.reset();
        // fetchLocation();
    }

    // console.log(userLocation);


    const fetchLocation = async (userLocation) => {
        const response = await fetch(`https://api.predicthq.com/v1/places?q=${userLocation}&type=locality`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
                'Content-type': 'application/json'
            }
        })

        const data = await response.json();
        console.log("locations", data.results[0].location[1]);
        // setLatitude(data.results[0].location[1]);
        // setLongitude(data.results[0].location[0]);
        fetchShows(data.results[0].location[1], data.results[0].location[0]);
    }


    const fetchShows = async (latitude, longitude) => {
        console.log("lat", latitude, "long", longitude);
        const response = await fetch(`https://api.predicthq.com/v1/events/?label=comedy&location_around.origin=${latitude}%2C${longitude}&offset=50`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
                'Content-type': 'application/json'
            },
            params: {
                'label': 'comedy',
                'country': 'US'
            }

        })
        const data = await response.json();
        console.log(data);
        setShows(data);

    }

    useEffect(() => {

        // fetchLocation();
        // fetchShows();
    }, []);

    return (
        <div className="searchbox">
            <form onSubmit={(event) => addLocation(event)}>
                <input type="text" ref={locationInput}/>
                <input type="submit" value="Search" />
            </form>
            <h1>Shows</h1>
        </div>
    )
}

export default Laughmap;

// return all the data in the params, when user selects that data, display it on the screen
//might need an if statement?