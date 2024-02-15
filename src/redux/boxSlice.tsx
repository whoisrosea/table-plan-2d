import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBox } from "../types/types";


interface BoxesState {
  boxesList: IBox[];
}

const initialState: BoxesState = {
  boxesList: [],
};

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    addBox: (state, action: PayloadAction<IBox>) => {
      state.boxesList.push({
        ...action.payload,
        id: (state.boxesList.length + 1).toString(),
      });
    },
    updateBoxPosition: (
      state,
      action: PayloadAction<{ id: string; left: number; top: number }>
    ) => {
      const { id, left, top } = action.payload;
      const index = state.boxesList.findIndex((box) => box.id === id);
      if (index !== -1) {
        state.boxesList[index].left = left;
        state.boxesList[index].top = top;
      }
    },
    setCurrentBox: (state, action: PayloadAction<string>) => {
      state.boxesList = state.boxesList.map((box) =>
        box.id === action.payload
          ? { ...box, selected: true }
          : { ...box, selected: false }
      );
    },
    updateBoxSize: (
      state,
      action: PayloadAction<{ id: string; width: number; height: number }>
    ) => {
      const { id, width, height } = action.payload;
      const index = state.boxesList.findIndex((box) => box.id === id);
      if (index !== -1) {
        state.boxesList[index].width = width;
        state.boxesList[index].height = height;
      }
    },
    updateBoxAngle: (
      state,
      action: PayloadAction<{ id: string; angle: number }>
    ) => {
      const { id, angle } = action.payload;
      const index = state.boxesList.findIndex((box) => box.id === id);
      if (index !== -1) {
        state.boxesList[index].angle = angle;
      }
    },
    deleteAll: (state) => {
      console.log(222);

      state.boxesList = [];
    },
    deleteBox: (state, action: PayloadAction<string>) => {
      state.boxesList = state.boxesList.filter(
        (box) => box.id !== action.payload
      );
    },
    importBoxes: (state, action: PayloadAction<IBox[]>) => {
      state.boxesList = [...action.payload];
    },
  },
});

export const { addBox,updateBoxAngle, updateBoxPosition, setCurrentBox, updateBoxSize, deleteAll, deleteBox, importBoxes } =
  boxSlice.actions;

export default boxSlice;
