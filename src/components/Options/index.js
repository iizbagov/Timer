import React, { useState } from "react";

function Options(props) {
  const [inpValue, setInpValue] = useState(0);

  function setTimer() {
    props.setTime({ value: inpValue });
  }

  function resetTimer() {
    props.setTime({ value: 0 });
  }

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setInpValue(Math.min(Math.abs(+e.target.value), 3599));
        }}
      />
      <button onClick={setTimer}>Start</button>
      <button onClick={resetTimer}>Cancel</button>
    </div>
  );
}

export default Options;
