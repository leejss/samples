import { PropsWithChildren, useEffect, useState, forwardRef, useRef } from "react";
import images from "./images";

const Viewport = forwardRef<HTMLDivElement, PropsWithChildren>((props, ref) => {
  const { children } = props;

  return (
    <div
      ref={ref}
      className="w-full h-[500px] border-solid border-4 border-red-600 overflow-y-auto"
    >
      {children}
    </div>
  );
});

const makeTable = (list: string[], viewRow: number, k = 3) => {
  const table: Record<string, string[]> = {};
  for (let i = 0; i < Math.trunc(list.length / k); i++) {
    table[i] = list.slice(i * k, i * k + k);
  }
  for (const row in table) {
    if (Number(row) > viewRow) {
      table[row] = new Array(k).fill("");
    }
  }
  return table;
};

const App = () => {
  const [viewRow, setViewRow] = useState(0);
  const table = makeTable(images, viewRow);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const intersectedElements = useRef(new Set<HTMLDivElement>()).current;

  useEffect(() => {
    if (!viewportRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const rowNum = target.dataset.row;
            if (!intersectedElements.has(target)) {
              setViewRow(Number(rowNum));
            }
            intersectedElements.add(target);
          }
        });
      },
      {
        root: viewportRef.current,
        rootMargin: "50px",
      },
    );

    const rows = document.querySelectorAll(`[data-type="row"]`);
    rows.forEach((row) => {
      observer.observe(row);
    });
  }, []);
  console.log(viewRow);

  return (
    <div>
      <h1 className="text-red-400 text-3xl">Image lazy load</h1>
      <Viewport ref={viewportRef}>
        {Object.keys(table).map((row, idx) => (
          <ImageRow key={idx} rowNum={idx}>
            {table[row].map((src) => (
              <Image src={src} />
            ))}
          </ImageRow>
        ))}
      </Viewport>
    </div>
  );
};

export default App;

interface ImageRowProps {
  rowNum: number;
}

const ImageRow = ({ children, rowNum }: PropsWithChildren<ImageRowProps>) => {
  return (
    <div data-type="row" data-row={rowNum} className="grid grid-cols-3">
      {children}
    </div>
  );
};

const Image = ({ src }: { src: string }) => {
  if (!src) return <div className="w-[300px] h-[300px]" />;
  return <img src={src} alt="" className="w-[300px] h-[300px]" />;
};
