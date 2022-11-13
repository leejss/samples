const TimerTemplate = () => {
  return (
    <div className="p-4">
      <div className="grid gap-2 mb-4">
        <label className="grid">
          <span className="text-xl">Minutes</span>
          <input className="border p-2 rounded" type="number" />
        </label>
        <label className="grid">
          <span className="text-xl">Seconds</span>
          <input className="border p-2 rounded" type="number" />
        </label>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 rounded p-2 text-white">START</button>
        <button className="bg-red-500 rounded p-2 text-white">PAUSE/RESUME</button>
        <button className="bg-green-500 rounded p-2 text-white">RESET</button>
      </div>
      <h1 className="text-4xl font-bold">00:00</h1>
    </div>
  );
};

export default TimerTemplate;
