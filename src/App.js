
import './App.css';
import Laughmap from './Components/laughmap.js';
import MyGoogleMap from './Components/googlemap.js';
import { useState, useEffect } from 'react';

function App() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

  return (
    <div className="App">
      <h1 className="laughtitle">LAUGH MAP</h1>
      <h3 className="description">Need a laugh? Tell us the name of your city and we'll show you comedy shows happening in your area:</h3>
      <div className="searchform">
        <Laughmap 
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
        <MyGoogleMap 
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
      </div>
    </div>
  );
}

export default App;
