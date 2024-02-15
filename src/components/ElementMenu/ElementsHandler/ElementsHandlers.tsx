import { Button, Upload } from "antd";
import React, { FC } from "react";
import { useAppDispatch } from "../../../redux/store";
import { deleteAll, deleteBox, importBoxes } from "../../../redux/boxSlice";
import { RcFile } from "antd/es/upload";
import { IBox } from "../../../types/types";
import "../ElementMenu.scss";


interface ElementsHandlersProps{
  boxes:IBox[]
  currentBox:IBox | undefined
}

const ElementsHandlers: FC<ElementsHandlersProps> = ({boxes, currentBox}) => {
  const dispatch = useAppDispatch();
  const deleteAllHandle = () => {
    dispatch(deleteAll());
  };
  const deleteHandle = () => {
    if (currentBox && currentBox.id) {
      dispatch(deleteBox(currentBox.id));
    }
  };

  const handleBeforeUpload = (event: RcFile) => {
    event
      .text()
      .then((res) => JSON.parse(res))
      .then((data) => dispatch(importBoxes(data)));

    return false;
  };
  const downloadObjectAsJson = (exportObj: any, exportName: string) => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  return (
    <div className="ElementMenu__Item">
      <Upload
        className="button"
        name="file"
        multiple={false}
        beforeUpload={handleBeforeUpload}
        accept=".json"
        showUploadList={false}
      >
        <Button type="primary">Импортировать</Button>
      </Upload>
      <Button
        className="button"
        onClick={() => {
          downloadObjectAsJson(boxes, "userData");
        }}
        type="primary"
      >
        Экспортировать
      </Button>
      <Button
        className="button"
        onClick={() => {
          deleteAllHandle();
        }}
        danger
      >
        Удалить все
      </Button>
      <Button
        className="button"
        onClick={() => {
          deleteHandle();
        }}
        danger
      >
        Удалить элемент
      </Button>
    </div>
  );
};

export default ElementsHandlers;
