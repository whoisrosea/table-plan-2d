import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "./components/DragMenu/DragMenu";
import ElementMenu from "./components/ElementMenu/ElementMenu";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <ElementMenu />
          <Example />
        </DndProvider>
      </div>
    </Provider>
  );
}
