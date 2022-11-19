import useStopwatch from "./useStopwatch";

const Stopwatch = () => {
  const { start, stop, elapsedTime, reset, addLaps, laps } = useStopwatch();
  return (
    <div>
      <h1>{elapsedTime}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
      <button onClick={addLaps}>Raps</button>
      {laps.map((lap, index) => {
        return <div key={index}>{lap}</div>;
      })}
    </div>
  );
};

export default Stopwatch;
