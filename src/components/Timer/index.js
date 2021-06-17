import { useEffect, useState } from "react";

function Timer(props) {
  const [time, setTime] = useState(props.time.value);

  useEffect(() => {
    setTime(props.time.value);
  }, [props.time]);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <div className="timer">
        <div className={seconds === 0 && minutes !== 0 ? "tic-tac" : ""}>
          {minutes >= 10 ? minutes : "0" + minutes}
        </div>
        <span>:</span>
        <div className={seconds > 0 ? "tic-tac" : ""}>
          {seconds >= 10 ? seconds : "0" + seconds}
        </div>
      </div>
    </div>
  );
}

export default Timer;
