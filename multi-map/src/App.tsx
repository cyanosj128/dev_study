import React, {useState} from 'react';
import './App.css'
import MapControlPanel from "./components/MapControlPanel";
import MapSwitcher from './components/MapSwitcher'
import {Coordinate, MapType} from "./types";

function App() {
  const [mapType, setMapType] = useState<MapType>('NAVER');
  const [center, setCenter] = useState<Coordinate | null>(null);
  
  return (
    <div className="App">
      <MapControlPanel
        mapType={mapType}
        setMapType={setMapType}
        setCenter={setCenter}
      />
      <MapSwitcher
        mapType={mapType}
        center={center}
      />
    </div>
  );
}

export default App;
