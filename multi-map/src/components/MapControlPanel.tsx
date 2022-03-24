import React, {CSSProperties} from 'react';
import {Coordinate, MapType} from "../types";
import {Popover, Button} from "antd";
import {cityCenterPoints} from "../mocks/cityCenterPoints";
import {PlusCircleOutlined} from "@ant-design/icons";

interface Props {
  mapType: MapType,
  setMapType: React.Dispatch<React.SetStateAction<MapType>>,
  setCenter: React.Dispatch<React.SetStateAction<Coordinate | null>>,
}

function MapControlPanel(props: Props) {
  
  const switchControllerStyle: CSSProperties = {
    position: 'absolute',
    right: '10px',
    zIndex: 5,
  }
  
  const cityButtons = cityCenterPoints.map((e, i) => (
    <Button
      key={'city-buttons-' + i}
      onClick={() => {
        props.setCenter(e.point)
      }}
    >
      {e.cityName}
    </Button>
  ));
  
  return (
    <>
      <Popover
        placement="leftBottom"
        content={
          <>
            <Button onClick={() => {
              props.setMapType('GOOGLE')
            }}>Google
            </Button>
            <Button onClick={() => {
              props.setMapType('KAKAO')
            }}>Kakao
            </Button>
            <Button onClick={() => {
              props.setMapType('NAVER')
            }}>Naver
            </Button>
          </>
        }
        trigger="click"
      >
        <Button
          style={{...switchControllerStyle, top: '20px'}}
          type={'primary'}
          danger={true}
          icon={<PlusCircleOutlined/>}
          size={'large'}
        >지도선택</Button>
      </Popover>
      <Popover
        placement="leftBottom"
        content={
          <>
            {cityButtons}
          </>
        }
        trigger="click"
      >
        <Button
          style={{...switchControllerStyle, top: '60px'}}
          type={'primary'}
          danger={true}
          icon={<PlusCircleOutlined/>}
          size={'large'}
        >지역선택</Button>
      </Popover>
    </>
  )
}

export default MapControlPanel;