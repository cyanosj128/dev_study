export interface Coordinate {
  lat: number,
  lng: number,
}

export type MapType = 'GOOGLE' | 'KAKAO' | 'NAVER';

export interface MapProps {
  center: Coordinate | null,
}