import React, { CSSProperties, FC, useCallback } from "react";
import { useDrop } from "react-dnd";
import { DraggableBox } from "./DraggableBox";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import { IBox } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addBox, setCurrentBox, updateBoxPosition } from "../../redux/boxSlice";

export interface ContainerProps {
  snapToGrid: boolean;
}

export const Container: FC<ContainerProps> = ({ snapToGrid }) => {
  const styles: CSSProperties = {
    backgroundImage: snapToGrid
      ? "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)"
      : "",
    backgroundSize: "50px 50px",
    width: "100%",
    height: "100%",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    position: "relative",
  };

  const boxesArr: IBox[] = useAppSelector((state) => state.boxes.boxesList);
  const dispatch = useAppDispatch();

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      dispatch(updateBoxPosition({ id, left, top }));
      dispatch(setCurrentBox(id));
    },
    [dispatch]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item: IBox, monitor) {
        if (item.default) {
          dispatch(addBox(item));
        } else {
          const delta = monitor.getDifferenceFromInitialOffset() as {
            x: number;
            y: number;
          };

          let left = Math.round(item.left + delta.x);
          let top = Math.round(item.top + delta.y);
          if (snapToGrid) {
            [left, top] = doSnapToGrid(left, top);
          }

          moveBox(item.id, left, top);
        }
        return undefined;
      },
    }),
    [moveBox, snapToGrid]
  );

  return (
    <div ref={drop} style={styles}>
      {boxesArr.map((box) => (
        <DraggableBox key={box.id} {...box} />
      ))}
    </div>
  );
};
