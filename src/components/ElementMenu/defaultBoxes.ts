import circleTable4 from "../../images/4-circle-table.png";
import circleTable5 from "../../images/5-circle-table.png";
import squareCircleTable4 from "../../images/4-square-circle-table.png";
import squareTable4 from "../../images/4-square-table.png";
import squareTable6 from "../../images/6-square-table.png";
import { IBox } from "../../types/types";

export const defaultBoxes: IBox[] = [
  {
    angle: 0,
    src: circleTable4,
    selected: false,
    default: true,
    id: "circleTable4",
    top: 350,
    left: 350,
    width: 50,
    height: 50,
  },
  {
    angle: 0,
    src: circleTable5,
    default: true,
    selected: false,
    id: "circleTable5",
    top: 350,
    left: 350,
    width: 50,
    height: 50,
  },
  {
    angle: 0,
    src: squareCircleTable4,
    selected: false,
    default: true,
    id: "squareCircleTable4",
    top: 350,
    left: 350,
    width: 50,
    height: 50,
  },
  {
    angle: 0,
    src: squareTable4,
    default: true,
    id: "squareTable4",
    selected: false,
    top: 350,
    left: 350,
    width: 50,
    height: 50,
  },
  {
    angle: 0,
    src: squareTable6,
    default: true,
    id: "squareTable6",
    selected: false,
    top: 350,
    left: 350,
    width: 50,
    height: 50,
  },
];
