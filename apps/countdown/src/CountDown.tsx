import useCountDown from "./useCountdown";

const CountDown = () => {
  const { elapsedTime, isRunning, start, stop } = useCountDown({
    minutes: 5,
    seconds: 0,
  });
  return (
    <div>
      <h1>{elapsedTime}</h1>
      <h2>{isRunning ? "Running" : "Stopped"}</h2>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};

export default CountDown;
