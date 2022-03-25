import React, {useState} from 'react';
import './App.css'
import MapControlPanel from "./components/MapControlPanel";
import MapSwitcher from './components/MapSwitcher'
import {Coordinate, MapType} from "./types";
import TestGoogleMap from "./components/TestGoogleMap";
import TestMapControlPanel from "./components/TestMapControlPanel";

export type TestMode = 'EDIT' | 'FINISHED';

function App() {
  const [mapType, setMapType] = useState<MapType>('NAVER');
  const [center, setCenter] = useState<Coordinate | null>(null);
  
  const [mode, setMode] = useState<TestMode>('EDIT');
  
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
