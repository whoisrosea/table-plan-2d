import type { FC } from "react";
import {  useState } from "react";

import { Container } from "./Container";
import { CustomDragLayer } from "./CustomDragLayer";
import "./DragMenu.scss";
import { Switch } from "antd";
const Example: FC = () => {
  const [snapToGrid, setSnapToGrid] = useState(false);

  const handleGrid = () => {
    setSnapToGrid(!snapToGrid);
  };

  return (
    <div className="DragMenu">
      <div className="DragMenu__Item-menu">
        <h2>Карта заведения</h2>
        <div className="DragMenu__Item-menu-grid">
          <h4>Сетка</h4>
          <Switch onChange={handleGrid}></Switch>
        </div>
      </div>

      <Container snapToGrid={snapToGrid} />
      <CustomDragLayer snapToGrid={snapToGrid} />
    </div>
  );
};
export default Example;
