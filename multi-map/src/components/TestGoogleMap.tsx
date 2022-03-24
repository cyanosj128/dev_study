import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {TestMode} from "../App";

const defaultMapStyle: CSSProperties = {
  width: '100%',
  height: '100vh',
}

function TestGoogleMap({mode} : {mode: TestMode}) {
  const mapRef = useRef<null | HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [polygon, setPolygon] = useState<google.maps.Polygon | null>(null);
  
  useEffect(() => {
    if (mapRef?.current && map == null) {
      setMap(new google.maps.Map(mapRef.current, {
        center: new google.maps.LatLng(
          37.552763,
          127.0489901),
        zoom: 14
      }));
    }
  }, [mapRef]);
  
  useEffect(() => {
    console.log(mode);
    if (mode === 'FINISHED' && polygon) {
      const polygonPaths = polygon.getPath();
      polygon.setMap(null);
      
      const editingPolygon = new google.maps.Polygon({
        paths: polygonPaths,
      });
      
      const editingMarkers = polygonPaths.getArray().map(e => new google.maps.Marker({
        position: e,
        map: map
      }));
      
      editingMarkers.forEach(e => {
        e.addListener('click', () => {
          console.log('remove me', e.setMap(null));
        })
      })
      
      editingPolygon.setMap(map);
      
    }
  }, [mode]);
  
  useEffect(() => {
    if (map) {
      const polygon = new google.maps.Polygon({
        clickable: true,
        editable: true,
        draggable: true,
        paths: [
          {lat: 37.57038253579033, lng: 127.04794980454399},
          {lat: 37.56231553903832, lng: 127.05876047165025},
          {lat: 37.53378887274516, lng: 127.01719284893274},
        ].map(e => new google.maps.LatLng(e.lat, e.lng)),
      });
      polygon.setMap(map);
      setPolygon(polygon);
      // polygon.addListener('dragend', (event: google.maps.MapsEventListener) => {
      //   new google.maps.Polygon({
      //     paths: polygon.getPath().getArray(),
      //     map: map
      //   });
      // });
      
      // google.maps.event.addListener(polygon.getPath(), 'set_at', () => {
      //   polygon.getPath().getArray().forEach(e => console.log(e.lat(), e.lng()));
      // });
      // google.maps.event.addListener(polygon.getPath(), 'insert_at', () => {
      //   polygon.getPath().getArray().forEach(e => console.log(e.lat(), e.lng()));
      // });
    }
  }, [map]);
  
  return <div ref={mapRef} style={{...defaultMapStyle}}/>
}

export default TestGoogleMap;