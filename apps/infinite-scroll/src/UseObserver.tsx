import { useEffect, useRef, useState } from "react";
import { data } from "./data";

const size = 30;
const UseObserver = () => {
  const [page, setPage] = useState(1);
  const fetchMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observser = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) setPage((prev) => prev + 1);
    });
    fetchMoreRef.current && observser.observe(fetchMoreRef.current);
    return () => {
      fetchMoreRef.current && observser.unobserve(fetchMoreRef.current);
    };
  }, []);

  return (
    <div className="h-screen overflow-auto relative">
      <ul className="relative">
        {data.slice(0, page * size).map((d, idx) => (
          <h1 key={idx} className="text-3xl text-center font-bold">
            {d.name}
          </h1>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-[100px]" ref={fetchMoreRef} />
      </ul>
    </div>
  );
};

export default UseObserver;
