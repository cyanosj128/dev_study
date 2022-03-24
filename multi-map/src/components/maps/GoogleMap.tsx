import React from 'react';
import {Coordinate, MapProps} from "../../types";
import BaseMap from "../BaseMap";

function GoogleMap(props: MapProps) {
  function levelToZoom(level: number) {
    return Math.ceil(Math.sqrt(level)) + 10;
  }
  
  function createMap(mapElement: HTMLDivElement, level: number, center: Coordinate) {
    const mapOption: google.maps.MapOptions = {
      center: new google.maps.LatLng(center.lat, center.lng),
      zoom: levelToZoom(level),
    }
    
    return new google.maps.Map(mapElement, mapOption);
  }
  
  function createMarker(map: google.maps.Map, position: Coordinate) {
    return new google.maps.Marker({
      map,
      position: new google.maps.LatLng(position.lat, position.lng),
      zIndex: 2,
    })
  }
  
  function createPolygon(map: google.maps.Map, path: Coordinate[]) {
    const polygonOption = {
      strokeWeight: 2,
      strokeColor: '#000',
      strokeOpacity: 1,
      fillColor: '#000',
      fillOpacity: 0.5,
    };
    
    return new google.maps.Polygon({
      map,
      paths: path.map(e => new google.maps.LatLng(e.lat, e.lng)),
      ...polygonOption,
    });
  }
  
  function panMap(map: google.maps.Map, center: Coordinate) {
    map.panTo(new google.maps.LatLng(center.lat, center.lng));
  }
  
  return (
    <BaseMap<google.maps.Map, google.maps.Marker, google.maps.Polygon>
      createMap={createMap}
      createMarker={createMarker}
      createPolygon={createPolygon}
      panMap={panMap}
      center={props.center}
    />
  )
}

export default GoogleMap;