import { useEffect, useRef, useState } from "react";

type Time = {
  minutes: number;
  seconds: number;
};

const formatElapsedTime = ({ minutes, seconds }: Time) => {
  const format = (n: number) => (n < 10 ? "0" + n : n + "");
  return `${format(minutes)}:${format(seconds)}`;
};

export default function useCountDown(initialTime: Time) {
  const [isRunning, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(initialTime);

  const start = () => {
    setRunning(true);
    // setElapsedTime(initialTime);
  };
  const stop = () => {
    setRunning(false);
  };

  useEffect(() => {
    const updateTime = () => {
      setElapsedTime((prev) => {
        let { minutes, seconds } = prev;
        if (seconds === 0) {
          seconds = 59;
          minutes -= 1;
        } else {
          seconds -= 1;
        }

        return { minutes, seconds };
      });
    };

    let timerId: null | ReturnType<typeof setInterval> = null;
    if (isRunning) timerId = setInterval(updateTime, 1000);
    return () => {
      timerId && clearInterval(timerId);
    };
  }, [isRunning]);

  return { isRunning, elapsedTime: formatElapsedTime(elapsedTime), start, stop } as const;
}
