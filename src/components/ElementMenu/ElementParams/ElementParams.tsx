import { Input } from "antd";
import React, { ChangeEvent, FC } from "react";
import { IBox } from "../../../types/types";
import { useAppDispatch } from "../../../redux/store";
import {
  updateBoxAngle,
  updateBoxPosition,
  updateBoxSize,
} from "../../../redux/boxSlice";
import "../ElementMenu.scss";

interface ElementParamsProps {
  currentBox: IBox | undefined;
}
const ElementParams: FC<ElementParamsProps> = ({ currentBox }) => {
  const dispatch = useAppDispatch();
  const handlePositionChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "left" | "top"
  ) => {
    if (!currentBox) return;
    const value = parseInt(e.target.value, 10) || 0;

    const payload = {
      id: currentBox.id,
      left: currentBox.left,
      top: currentBox.top,
    };

    payload[type] = value;

    dispatch(updateBoxPosition(payload));
  };
  const handleAngleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!currentBox) return;
    const angle = parseInt(e.target.value) || 0; 

    dispatch(updateBoxAngle({ id: currentBox.id, angle }));
  };
  const handleSizeChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "width" | "height"
  ) => {
    if (!currentBox) return;
    const value = parseInt(e.target.value, 10) || 0;

    const payload = {
      id: currentBox.id,
      width: currentBox.width,
      height: currentBox.height,
    };

    payload["width"] = value;
    payload["height"] = value;
    dispatch(updateBoxSize(payload));
  };
  return (
    <div className="ElementMenu__Item ElementMenu__Item-params">
      <h2>Параметры элемента</h2>
      <div className="ElementMenu__Item-input">
        <div>
          <h4>x</h4>
          <Input
            type="number"
            className="input"
            value={currentBox?.left}
            onChange={(e) => handlePositionChange(e, "left")}
            placeholder="x"
          />
        </div>
        <div>
          <h4>y</h4>
          <Input
            type="number"
            className="input"
            value={currentBox?.top}
            onChange={(e) => handlePositionChange(e, "top")}
            placeholder="y"
          />
        </div>
        <div>
          <h4>angle</h4>
          <Input
            className="input"
            type="number"
            value={currentBox?.angle}
            onChange={handleAngleChange}
            placeholder="angle"
          />
        </div>
        <div>
          <h4>height</h4>
          <Input
            type="number"
            className="input"
            value={currentBox?.height}
            onChange={(e) => handleSizeChange(e, "height")}
            placeholder="height"
          />
        </div>
        <div>
          <h4>width</h4>
          <Input
            type="number"
            className="input"
            value={currentBox?.width}
            onChange={(e) => handleSizeChange(e, "width")}
            placeholder="width"
          />
        </div>
      </div>
    </div>
  );
};

export default ElementParams;
