import React, { FC } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { IBox } from "../../../types/types";
import "../ElementMenu.scss";

interface DragElementProps {
  box: IBox;
}

const DragElement: FC<DragElementProps> = ({ box }) => {
  const [, drag] = useDrag(() => ({
    type: "box",
    item: box,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        width: box.width,
        height: box.height,
      }}
    >
      <img src={box.src} height={box.height} width={box.width} alt="img" />
    </div>
  );
};

export default DragElement;
