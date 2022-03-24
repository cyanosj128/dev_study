import React from 'react';
import {Coordinate, MapProps} from "../../types";
import BaseMap from "../BaseMap";

function KakaoMap(props: MapProps) {
  function createMap(mapElement: HTMLDivElement, level: number, center: Coordinate) {
    const mapOption: kakao.maps.MapOption = {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level: level,
    }
    
    return new kakao.maps.Map(mapElement, mapOption);
  }
  
  function createMarker(map: kakao.maps.Map, position: Coordinate) {
    return new kakao.maps.Marker({
      map,
      position: new kakao.maps.LatLng(position.lat, position.lng),
      zIndex: 2,
    })
  }
  
  function createPolygon(map: kakao.maps.Map, path: Coordinate[]) {
    const polygonOption = {
      strokeWeight: 2,
      strokeColor: '#000',
      strokeOpacity: 1,
      fillColor: '#000',
      fillOpacity: 0.5,
    };
    
    return new kakao.maps.Polygon({
      map,
      path: path.map(e => new kakao.maps.LatLng(e.lat, e.lng)),
      ...polygonOption,
    });
  }
  
  function panMap(map: kakao.maps.Map, center: Coordinate) {
    map.panTo(new kakao.maps.LatLng(center.lat, center.lng))
  }
  
  return (
    <BaseMap<kakao.maps.Map, kakao.maps.Marker, kakao.maps.Polygon>
      createMap={createMap}
      createMarker={createMarker}
      createPolygon={createPolygon}
      panMap={panMap}
      center={props.center}
    />
  )
}

export default KakaoMap;