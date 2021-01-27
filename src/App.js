
import './App.css';
import Laughmap from './Components/laughmap.js';
import MyComponent from './Components/googlemap.js';

function App() {
  return (
    <div className="App">
      <h1 className="laughtitle">LAUGH MAP</h1>
      <h3 className="description">Need a laugh? Tell us where you are and we'll show you comedy shows happening in your area:</h3>
      <div className="searchform">
        <input type="text" />
        <input type="text" />
        <input type="submit" value="Search" />
        <Laughmap />
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
