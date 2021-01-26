// the search bar, the list data from API, and map go here
// each will pass data between eachother so they need to be together
import "../App.css";
import { useState, useEffect } from 'react';


function Laughmap() {

    const [item, setItems] = useState([]);

    const fetchShows = async () => {
        const response = await fetch('https://api.predicthq.com/v1/events', {
            headers: {
                'Authorization': `Bearer ${process.env.LAUGH_APP_API_KEY}`,
                'Content-type': 'application/json'
            },
            body: {
                'label': 'comedy'
            }

        })
        const data = await response.json();
        console.log(data);
        setItems(items);

    }

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <div>
            {items.map()}
        </div>
    )
}

export default Laughmap;