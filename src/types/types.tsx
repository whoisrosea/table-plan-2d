// types.ts
export interface IBox {
  angle:number;
  selected: boolean;
  src: string;
  default: boolean;
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface UpdateBoxPositionPayload {
  id: string;
  left: number;
  top: number;
}

export interface UpdateBoxSizePayload {
  id: string;
  width: number;
  height: number;
}
