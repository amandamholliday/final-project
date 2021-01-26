// the search bar, the list data from API, and map go here
// each will pass data between eachother so they need to be together
import "../App.css";
import { useState, useEffect } from 'react';


function Laughmap() {

    // const [item, setItems] = useState([]);


    const fetchShows = async () => {
        const response = await fetch('https://api.predicthq.com/v1/events', {
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
        // setItems(items);

    }

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <div>
            <h1>Shows</h1>
        </div>
    )
}

export default Laughmap;

// return all the data in the params, when user selects that data, display it on the screen
//might need an if statement?