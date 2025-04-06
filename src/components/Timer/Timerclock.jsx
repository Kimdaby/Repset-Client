import { useState } from "react";
import { useTimer } from "react-timer-hook";
import "./Timerclock.scss";

const Timerclock = () => {
  const [inputMinutes, setInputMinutes] = useState(10);
  const [timerKey, setTimerKey] = useState(Date.now());

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + inputMinutes * 60);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, autoStart: false, key: timerKey });

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setInputMinutes(value);
    }
  };

  const handleRestart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + inputMinutes * 60);
    restart(time);
    setTimerKey(Date.now());
  };

  return (
    <div className="custom-timer">
      <div className="custom-timer__display">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>

      <div className="custom-timer__input">
        <label htmlFor="minutes">Minutes:</label>
        <input
          id="minutes"
          type="number"
          min="0"
          value={inputMinutes}
          onChange={handleChange}
          disabled={isRunning}
        />
      </div>

      <div className="custom-timer__buttons">
        {!isRunning && <button onClick={start}>Start</button>}
        {isRunning && <button onClick={pause}>Pause</button>}
        {!isRunning && <button onClick={resume}>Resume</button>}
        <button onClick={handleRestart}>Reset</button>
      </div>
    </div>
  );
};

export default Timerclock;
