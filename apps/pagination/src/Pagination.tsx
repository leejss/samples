import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

interface PaginationProps {
  totalCount: number;
  limit?: number;
}

const Pagination = ({ totalCount, limit = 10 }: PaginationProps) => {
  const pageWindowSize = useRef(5).current;
  const [currentWindow, setCurrentWindow] = useState(0);
  const totalPage = Math.trunc(totalCount / limit);
  const maxWindow = Math.ceil(totalPage / pageWindowSize) - 1;
  const pageArray = new Array(totalPage).fill(0).map((_, idx) => idx + 1);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const page = searchParam.get("page");
    if (!page) throw new Error("No page params");
    setCurrentWindow(Math.trunc((+page - 1) / pageWindowSize));
  }, []);

  const from = currentWindow * pageWindowSize;
  const to = from + pageWindowSize;

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          if (currentWindow <= 0) return;
          setCurrentWindow((prev) => prev - 1);
          setSearchParam({
            page: `${from}`,
          });
        }}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      {pageArray.slice(from, to).map((page) => (
        <Page key={page} page={page} />
      ))}
      <button
        onClick={() => {
          if (currentWindow >= maxWindow) return;
          setCurrentWindow((prev) => prev + 1);
          setSearchParam({
            page: `${to + 1}`,
          });
        }}
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default Pagination;

interface PageProps {
  page: number;
}

const Page = ({ page }: PageProps) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentPage = searchParam.get("page");
  return (
    <button
      data-page={page}
      className={cn(`py-1 px-2 border rounded w-[50px] h-[50px]`, {
        "bg-black text-white": currentPage === `${page}`,
      })}
      onClick={() => {
        setSearchParam({
          page: `${page}`,
        });
      }}
    >
      {page}
    </button>
  );
};

// Prev, Next
