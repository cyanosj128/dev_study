import React, {CSSProperties} from 'react';
import {Popover, Button} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import {TestMode} from "../App";

interface Props {
  mode: TestMode,
  setMode: React.Dispatch<React.SetStateAction<TestMode>>,
}

function MapControlPanel(props: Props) {
  
  const switchControllerStyle: CSSProperties = {
    position: 'absolute',
    right: '10px',
    zIndex: 5,
  }
  
  return (
    <>
      <Popover
        placement="leftBottom"
        content={
          <>
            <Button onClick={() => {
              props.setMode('EDIT')
            }}>수정
            </Button>
            <Button onClick={() => {
              props.setMode('FINISHED')
            }}>완료
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
    </>
  )
}

export default MapControlPanel;