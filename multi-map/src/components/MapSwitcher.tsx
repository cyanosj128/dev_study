import React from 'react';
import KakaoMap from "./maps/KakaoMap";
import GoogleMap from "./maps/GoogleMap";
import NaverMap from "./maps/NaverMap";
import {Coordinate, MapType} from "../types";

interface Prop {
  mapType: MapType
  center: Coordinate | null
}

function MapSwitcher(props: Prop) {
  if (props.mapType === 'KAKAO') return <KakaoMap center={props.center}/>;
  else if (props.mapType === 'NAVER') return <NaverMap center={props.center}/>
  else return <GoogleMap center={props.center}/>
}

export default MapSwitcher;