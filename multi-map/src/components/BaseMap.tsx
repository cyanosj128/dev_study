import React, {CSSProperties, useEffect, useRef, useState} from "react";
import {Coordinate} from "../types";
import {getRandomCoords} from "../mocks/randomPoints";
import {joongGu, sungdongGu, mapoGu, yongsanGu, jongroGu, seodaemunGu, sungbookGu, dongdaemoonGu} from '../mocks/seoulAreas';

interface BaseMapProps<Map, Marker, Polygon> {
  createMap: (mapElement: HTMLDivElement, level: number, center: Coordinate) => Map,
  createMarker: (map: Map, position: Coordinate) => Marker,
  createPolygon: (map: Map, path: Coordinate[]) => Polygon,
  panMap: (map: Map, center: Coordinate) => void,
  center: Coordinate | null,
}

const defaultMapStyle: CSSProperties = {
  width: '100%',
  height: '100vh',
}

const defaultMapOption = {
  center: {
    lat: 37.572863,
    lng: 126.9816452,
  },
  level: 7,
}

const randomCoords = getRandomCoords();
const seoulAreas = [
  joongGu,
  sungdongGu,
  mapoGu,
  yongsanGu,
  jongroGu,
  seodaemunGu,
  sungbookGu,
  dongdaemoonGu,
]

function BaseMap<Map, Marker, Polygon>(
  {
    createMap,
    createMarker,
    createPolygon,
    panMap,
    center,
  }: BaseMapProps<Map, Marker, Polygon>) {
  const mapRef = useRef<null | HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [polygons, setPolygons] = useState<Polygon[]>([]);
  
  // props를 destruction을 통해 받는 이유
  // 아래 useEffect의 depth에 추가하여 다른 props의 변동이 있을때에 불필요한 호출을 막기위함
  
  useEffect(() => {
    if (mapRef?.current && map == null) {
      setMap(createMap(
        mapRef.current,
        defaultMapOption.level,
        defaultMapOption.center,
      ))
    }
  }, [mapRef, createMap]);
  
  useEffect(() => {
    if (map) {
      if (markers.length === 0) {
        const markers = randomCoords.map(e => createMarker(map, e));
        setMarkers(markers);
      }
      if (polygons.length === 0) {
        const polygons = seoulAreas.map(e => createPolygon(map, e));
        setPolygons(polygons);
      }
    }
  }, [map, createMarker, createPolygon]);
  
  useEffect(() => {
    if (center && map) {
      panMap(map, center);
    }
  }, [center]);
  
  return <div ref={mapRef} style={{...defaultMapStyle}}/>
}

export default BaseMap;