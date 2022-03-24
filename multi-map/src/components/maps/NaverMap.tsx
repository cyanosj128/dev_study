import React from 'react';
import {Coordinate, MapProps} from "../../types";
import BaseMap from "../BaseMap";
import TransitionOptions = naver.maps.TransitionOptions;

function NaverMap(props: MapProps) {
  function levelToZoom(level: number) {
    return Math.ceil(Math.sqrt(level) + 10);
  }
  
  function createMap(mapElement: HTMLDivElement, level: number, center: Coordinate) {
    const mapOption: naver.maps.MapOptions = {
      center: new naver.maps.LatLng(center.lat, center.lng),
      zoom: levelToZoom(level),
    }
    
    return new naver.maps.Map(mapElement, mapOption);
  }
  
  function createMarker(map: naver.maps.Map, position: Coordinate) {
    return new naver.maps.Marker({
      map,
      position: new naver.maps.LatLng(position.lat, position.lng),
      zIndex: 2,
    })
  }
  
  function panMap(map: naver.maps.Map, center: Coordinate) {
    const panOption: TransitionOptions = {
      duration: 3,
    }
    
    map.panTo(new naver.maps.LatLng(center.lat, center.lng), panOption);
  }
  
  function createPolygon(map: naver.maps.Map, path: Coordinate[]) {
    const polygonOption = {
      strokeWeight: 2,
      strokeColor: '#000',
      strokeOpacity: 1,
      fillColor: '#000',
      fillOpacity: 0.5,
    };
    
    return new naver.maps.Polygon({
      map,
      paths: path.map(e => new naver.maps.LatLng(e.lat, e.lng)),
      ...polygonOption,
    });
  }
  
  return (
    <BaseMap<naver.maps.Map, naver.maps.Marker, naver.maps.Polygon>
      createMap={createMap}
      createMarker={createMarker}
      createPolygon={createPolygon}
      panMap={panMap}
      center={props.center}
    />
  )
}

export default NaverMap;