import "./ElementMenu.scss";
import { IBox } from "../../types/types";
import DragElement from "./DragElement/DragElement";
import { useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import ElementsHandlers from "./ElementsHandler/ElementsHandlers";
import ElementParams from "./ElementParams/ElementParams";
import { defaultBoxes } from "./defaultBoxes";

const ElementMenu = () => {
  const boxes = useAppSelector((state) => state.boxes.boxesList); // Assuming your state structure
  const [currentBox, setCurrentBox] = useState<IBox | undefined>();

  useEffect(() => {
    if (boxes.length > 0) {
      setCurrentBox(boxes.find((box) => box.selected === true)); // Set to the first box or based on some condition
    }
  }, [boxes]);

  return (
    <div className="ElementMenu">
      <div className="ElementMenu__Item">
        {defaultBoxes.map((box) => (
          <DragElement box={box}></DragElement>
        ))}
      </div>
      <ElementParams currentBox={currentBox} />
      <ElementsHandlers currentBox={currentBox} boxes={boxes} />
    </div>
  );
};

export default ElementMenu;
