import type { CSSProperties, FC } from "react";
import { memo, useEffect } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { Box } from "./Box";
import { IBox } from "../../types/types";
import { useDispatch } from "react-redux";
import { setCurrentBox } from "../../redux/boxSlice";

function getStyles(
  height: number,
  width: number,
  left: number,
  top: number,
  angle: number, 
  isDragging: boolean
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0) rotate(${angle}deg)`; 
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height,
    width,
  };
}


export const DraggableBox: FC<IBox> = memo(function DraggableBox(box) {
  const dispatch = useDispatch();
    const { id, src, left, top, width, height, angle } = box; 
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "box",
      item: { id, left, top, angle, src },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, src, angle]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div
      ref={drag}
      style={getStyles(width, height, left, top, angle, isDragging)}
      onClick={() => dispatch(setCurrentBox(id))}
    >
      <Box
        styles={{
          height: height,
          width: width,
          border: box.selected ? "1px solid rgba(0, 0, 0, 0.3)" : "",
          borderRadius: "5px",
        }}
        src={src}
      />
    </div>
  );
});
