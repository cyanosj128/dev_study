import {joongGu, sungdongGu, mapoGu, yongsanGu, jongroGu, seodaemunGu, sungbookGu, dongdaemoonGu} from './seoulAreas';
import {Coordinate} from "../types";

export function getRandomCoords(): Coordinate[] {
  const randomPoints: Coordinate[] = [];
  const seoulAreaCoordinates = [...joongGu, ...sungdongGu, ...mapoGu, ...yongsanGu, ...jongroGu, ...seodaemunGu, ...sungbookGu, ...dongdaemoonGu];
  
  seoulAreaCoordinates.forEach(seoulAreaCoordinate => {
    const outputCount = Math.floor(Math.random() * 5);
    for (let i = 0; i < outputCount; i++) {
      const randomLatNumber = Math.floor(Math.random() * 10);
      const randomLngNumber = Math.floor(Math.random() * 10);
      randomPoints.push({
        lat: getRandomCoordinate(seoulAreaCoordinate.lat, randomLatNumber),
        lng: getRandomCoordinate(seoulAreaCoordinate.lng, randomLngNumber),
      });
    }
  });
  
  return randomPoints;
}

function getRandomCoordinate(coord: number, randomNumber: number): number {
  const splitCoord = coord.toString().split('');
  let randomIndex = 0;
  do {
    randomIndex = Math.floor(Math.random() * 13);
  } while (randomIndex < 11);
  splitCoord[splitCoord.length - randomIndex] = randomNumber.toString();
  return parseFloat(splitCoord.join(''));
}
