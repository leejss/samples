import { useEffect, useState } from "react";

const formatElapsedTime = ({ mm, ss, ms }: { mm: number; ss: number; ms: number }) => {
  const format = (n: number) => (n < 10 ? "0" + n : n + "");
  return `${format(mm)}:${format(ss)}:${format(ms)}`;
};

export default function useStopwatch() {
  const [isRunning, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState({
    mm: 0,
    ss: 0,
    ms: 0,
  });
  const [laps, setLaps] = useState<string[]>([]);

  const reset = () => {
    setElapsedTime({
      mm: 0,
      ss: 0,
      ms: 0,
    });
    setRunning(false);
    setLaps([]);
  };

  const stop = () => {
    setRunning(false);
  };

  const start = () => {
    setRunning(true);
  };

  const addLaps = () => {
    setLaps((prev) => [...prev, formatElapsedTime(elapsedTime)]);
  };

  useEffect(() => {
    const updateElapedTime = () => {
      setElapsedTime((prev) => {
        let { mm, ms, ss } = prev;

        ms += 1;
        if (ms >= 100) {
          ss += 1;
          ms = 0;
        }
        if (ss >= 60) {
          mm += 1;
          ss = 0;
        }

        return { mm, ss, ms };
      });
    };
    let timerId: null | ReturnType<typeof setInterval> = null;

    if (isRunning) timerId = setInterval(updateElapedTime, 10);
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning]);

  return {
    isRunning,
    elapsedTime: formatElapsedTime(elapsedTime),
    stop,
    start,
    reset,
    laps,
    addLaps,
  } as const;
}
