declare namespace kakao {
  declare namespace maps {
    class Map {
      constructor(container: HTMLDivElement, option: MapOption) {
      }
      
      getCenter(): LatLng;
      
      setCenter(location: LatLng);
      
      setLevel(level: number);
      
      setBounds(bounds: LatLngBounds);
      
      addControl(control: any, position: any);
      
      panTo(location: LatLng);
    }
    
    interface MapOption {
      center: LatLng;
      level: number;
    }
    
    class Marker {
      constructor(options: MarkerOption) {
      }
      
      marker_identifier: string;
      
      setZIndex(index: number);
      
      getDraggable(): boolean;
      
      setDraggable(drag: boolean): boolean;
      
      getImage();
      
      getPosition();
      
      getVisible();
      
      setVisible(visible: boolean);
      
      setMap(map: Map | null);
      
      setPosition(location: LatLng);
    }
    
    enum ControlPositions {
      MARKER,// : 마커
      RECTANGLE,// : 사각형
      CIRCLE,// : 원
      ELLIPSE,// : 타원
      POLYLINE,// : 선
      ARROW,// : 끝점에 화살표가 표시된 선
      POLYGON// : 다각형
    }
    
    class ControlPosition {
      static TOP: ControlPositions;
    }
    
    interface MarkerOption {
      map: Map;
      position: LatLng;
      image?: MarkerImage;
      draggable?: boolean;
      getDraggable?: () => void;
      zIndex: number;
    }
    
    class CustomOverlay {
      constructor(options: OverlayOption) {
      }
      
      marker_identifier: string;
      
      setZIndex(index: number);
      
      setMap(map: Map | null);
      
      setVisible(visible: boolean);
      
      getMap();
    }
    
    declare namespace Drawing {
      
      enum OverlayType {
        MARKER,// : 마커
        RECTANGLE,// : 사각형
        CIRCLE,// : 원
        ELLIPSE,// : 타원
        POLYLINE,// : 선
        ARROW,// : 끝점에 화살표가 표시된 선
        POLYGON// : 다각형
      }
      
      type TooltipType = 'draw' | 'drag' | 'edit'
      
      interface DrawingManagerOption {
        map: Map;
        drawingMode?: OverlayType[];
        guideTooltip?: TooltipType[];
        markerOptions?: {
          draggable: boolean
        };
      }
      
      class Toolbox {
        constructor(option: { drawingManager: kakao.maps.Drawing.DrawingManager }) {
          option;
        }
        
        getElement();
      }
      
      class DrawingManager {
        constructor(option: DrawingManagerOption)
        
        cancel()
        
        select(value: OverlayType)
        
        getData();
      }
      
    }
    
    
    interface OverlayOption {
      map?: Map;
      position: LatLng;
      content: Node | string;
    }
    
    class MarkerImage {
      constructor(src: string, size: Size) {
      }
    }
    
    interface InfoWindowOptions {
      map?: Map;
      position?: LatLng;
      removable?: boolean;
      content: Node | string;
      zIndex: number;
    }
    
    class InfoWindow {
      constructor(options: InfoWindowOptions) {
      }
      
      open(map: Map, marker?: Marker);
      
      close();
    }
    
    interface CircleOptions {
      map: Map;
      center: LatLng; // 원의 중심좌표 입니다
      radius: number; // 미터 단위의 원의 반지름입니다
      strokeWeight?: number; // 선의 두께입니다
      strokeColor?: string; // 선의 색깔입니다
      strokeOpacity?: number; // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle?: 'solid' | 'shortdash' | 'shortdot'; // 선의 스타일 입니다
      fillColor?: string; // 채우기 색깔입니다
      fillOpacity?: number; // 채우기 불투명도 입니다
    }
    
    class Circle {
      constructor(options: CircleOptions) {
      }
      
      marker_identifier: string;
      
      setVisible(val: boolean);
      
      setMap(map: Map | null);
    }
    
    interface PolygonOptions {
      map: Map;
      path: LatLng[],
      strokeWeight: number,
      strokeColor: string,
      strokeOpacity: number,
      fillColor: string,
      fillOpacity: number
    }
    
    class Polygon {
      constructor(options: PolygonOptions) {
      }
      
      marker_identifier: string;
      
      setMap(map: Map | null);
      
      getPath: () => LatLng[];
    }
    
    class LatLng {
      La: number;
      Ma: number;
      
      constructor(lat: number, lng: number) {
      }
      
      getLat(): number
      
      getLng(): number
    }
    
    class Size {
      constructor(width: number, height: number) {
      }
    }
    
    interface MouseEvent {
      latLng: LatLng;
      target: {
        getPath: () => LatLng[];
      };
    }
    
    class Coords {
      constructor(x: number, height: number) {
      }
      
      toLatLng(): LatLng
    }
    
    type EventTarget = Map | Marker | Drawing.DrawingManager;
    
    type EventHandlerMap = {
      click: (e: MouseEvent) => void;
      mouseover: () => void;
      mouseout: () => void;
      position_changed: () => void;
      rightclick: () => void;
      dragend: () => void;
      drawend: (e: Polygon) => void;
    };
    
    class event {
      static addListener<K extends keyof EventHandlerMap>(
        target: Map | Marker | Drawing.DrawingManager,
        type: K,
        handler: EventHandlerMap<K>
      );
    }
    
    class LatLngBounds {
      sw: LatLng;
      ng: LatLng;
      
      constructor() {
      }
      
      extend(latLng: LatLng): LatLng;
    }
    
    interface Keyword {
      x: number;
      y: number;
    }
    
    declare namespace services {
      declare namespace Status {
        class OK {
        }
      }
      
      class Places {
        keywordSearch(keyword: string, callback: (result: Keyword[], status: any) => void) {
        }
      }
    }
  }
}