import "./App.css";
import Timer from "./components/Timer";
import Options from "./components/Options";
import React, { useState } from "react";

function App() {
  const [time, setTime] = useState({ value: 0 });

  return (
    <div className="App">
      <Options setTime={setTime} />
      <Timer time={time} />
    </div>
  );
}

export default App;
