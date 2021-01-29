
import './App.css';
import Laughmap from './Components/laughmap.js';
import MyGoogleMap from './Components/googlemap.js';

function App() {
  return (
    <div className="App">
      <h1 className="laughtitle">LAUGH MAP</h1>
      <h3 className="description">Need a laugh? Tell us the name of your city and we'll show you comedy shows happening in your area:</h3>
      <div className="searchform">
        <Laughmap />
        <MyGoogleMap />
      </div>
    </div>
  );
}

export default App;
