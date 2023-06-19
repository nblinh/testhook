import { createContext } from "react";
import "./App.css";
import { UseCallback } from "./hook/UseCallback";
import { UseContext } from "./hook/UseContext";
import { UseEffect } from "./hook/UseEffect";
import { UseMemo } from "./hook/UseMemo";
import UseReducer from "./hook/UseReducer/UseReducer";
import { UseRef } from "./hook/UseRef";
import { MyComponent } from "./test/MyComponent";
import { MyComponent2 } from "./test/MyComponent2";
import { Example } from "./test/Example";
import { Blink } from "./test/Blink";
import { ResultDisplay } from "./test/ResultDisplay";
import { WelcomeTitle } from "./test/WelcomeTitle";

const data = {
  apple: 1,
  mango: 2,
  banana: 3,
};
function App() {
  return (
    <div className="App">
      {/* <Blink> Hello world!</Blink> */}
      {/* <MyComponent {...data} /> */}
      {/* <MyComponent2 /> */}
      {/* <ResultDisplay getNewResult={() => "test"} /> */}
      <WelcomeTitle />
    </div>
  );
}

export default App;
