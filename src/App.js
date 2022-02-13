import { Callback } from "./UseCallBack";
import { ContextCounter, ContextProvider } from "./context";
import "./styles.css";
import Reducer from "./useReducer/Reducer";
import { Controlled, Uncontrolled } from "./uncontrolled";
import { UseRef } from "./useRef";
import {
  BasicClass,
  ClassCounter,
  ClassFetch,
  ErrorBoundary
} from "./classComp";
import { Delegation } from "./Delegation";
import { HocChild } from "./HOC";
import { CustomFetch, CustomHookComponent } from "./CustomHook";
import { CallApp } from "./RenderProps";
import { Animations } from "./Animations";

export default function App() {
  return (
    <div className="App">
      <Callback />
      <hr />
      <Reducer />
      <hr />
      <Animations />
      <hr />
      <ContextProvider>
        <ContextCounter />
      </ContextProvider>
      <hr />
      <Uncontrolled />
      <hr />
      <Controlled />
      <hr />
      <UseRef />
      <hr />
      <BasicClass />
      <hr />
      <ClassCounter />
      <hr />
      <ErrorBoundary>
        <ClassFetch />
      </ErrorBoundary>
      <hr />
      <Delegation />
      <hr />
      <HocChild />
      <hr />
      <CustomHookComponent />
      <hr />
      <CallApp name="Aman" />
      <hr />
      <CustomFetch />
      <hr />
    </div>
  );
}
