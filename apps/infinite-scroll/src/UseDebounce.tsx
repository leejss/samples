import { useState } from "react";
import { data } from "./data";
import { debounce } from "./util";

const size = 30;
const UseDebounce = () => {
  const [page, setPage] = useState(1);

  const handleScroll = debounce((target: HTMLDivElement) => {
    const { scrollHeight, scrollTop, clientHeight } = target;

    if (scrollHeight < scrollTop + clientHeight + 10) {
      setPage((prev) => prev + 1);
    }
  }, 500);
  return (
    <div
      className="h-screen overflow-auto"
      onScroll={(e) => {
        handleScroll(e.target as HTMLDivElement);
      }}
    >
      {data.slice(0, page * size).map((d, idx) => (
        <h1 key={idx} className="text-3xl text-center font-bold">
          {d.name}
        </h1>
      ))}
    </div>
  );
};

export default UseDebounce;
