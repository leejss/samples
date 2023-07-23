import { useEffect, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [primes, setPrimes] = useState<number[]>([]);

  function generatePrimes() {
    if (!number) return;

    function isPrime(n: number) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < number) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }

    setPrimes(primes);
    return primes;
  }

  useEffect(() => {
    const worker = new Worker("/worker.js");
    console.log(worker);
  }, []);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const n = Number(e.target.value);
          if (isNaN(n)) return;
          setNumber(n);
        }}
      />
      <button onClick={generatePrimes}>get prime</button>
      {primes.length > 0 && primes.map((n) => <div key={n}>{n}</div>)}
    </div>
  );
};

export default App;
