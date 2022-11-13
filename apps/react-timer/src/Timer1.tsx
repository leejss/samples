import { useEffect, useRef, useState } from "react";

const DEFAULT_TIME = {
  minutes: "",
  seconds: "",
};

type Time = typeof DEFAULT_TIME;

const parseTime = (t: Time) => {
  let m = Number(t.minutes);
  let s = Number(t.seconds);
  m += Math.trunc(s / 60);
  s %= 60;
  return {
    minutes: m,
    seconds: s,
  };
};

const formatTime = (t: { minutes: number; seconds: number }) => {
  return {
    minutes: t.minutes.toString().padStart(2, "0"),
    seconds: t.seconds.toString().padStart(2, "0"),
  };
};

const display = (time: Time) => {
  if (!time.minutes && !time.seconds) return "00:00";
  return `${time.minutes}:${time.seconds}`;
};

const Timer1 = () => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [start, setStart] = useState(false);
  const timerRef = useRef<any>(null);
  const timeRef = useRef({
    minutes: 0,
    seconds: 0,
  });
  const [timeDisplay, setTimeDisplay] = useState("00:00");
  const tic = () => {
    if (timeRef.current.minutes === 0 && timeRef.current.seconds === 0) return;
    if (timeRef.current.seconds === 0) {
      timeRef.current.minutes -= 1;
      timeRef.current.seconds = 59;
    } else {
      timeRef.current.seconds -= 1;
    }
    setTimeDisplay(display(formatTime(timeRef.current)));
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (start) {
        tic();
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [start]);

  return (
    <div className="p-4">
      <div className="grid gap-2 mb-4">
        <label className="grid">
          <span className="text-xl">Minutes</span>
          <input
            value={time.minutes}
            onChange={(e) => {
              setTime((prev) => ({
                ...prev,
                minutes: e.target.value,
              }));
            }}
            className="border p-2 rounded"
            type="number"
          />
        </label>
        <label className="grid">
          <span className="text-xl">Seconds</span>
          <input
            onChange={(e) => {
              setTime((prev) => ({
                ...prev,
                seconds: e.target.value,
              }));
            }}
            value={time.seconds}
            className="border p-2 rounded"
            type="number"
          />
        </label>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setStart(true);
            timeRef.current = parseTime(time);
            setTimeDisplay(display(formatTime(parseTime(time))));
          }}
          className="bg-blue-500 rounded p-2 text-white"
        >
          START
        </button>
        <button
          onClick={() => {
            if (start) {
              setStart(false);
            } else {
              setStart(true);
            }
          }}
          className="bg-red-500 rounded p-2 text-white"
        >
          PAUSE / RESUME
        </button>
        <button
          onClick={() => {
            setStart(false);
            setTime(DEFAULT_TIME);
            timeRef.current = parseTime(DEFAULT_TIME);
            setTimeDisplay(display(DEFAULT_TIME));
          }}
          className="bg-green-500 rounded p-2 text-white"
        >
          RESET
        </button>
      </div>
      <h1 className="text-4xl font-bold">{timeDisplay}</h1>
    </div>
  );
};

export default Timer1;
