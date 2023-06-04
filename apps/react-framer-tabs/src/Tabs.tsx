import { FC, useEffect, useRef } from "react";

const tabs = ["home", "exchange", "store"];

interface TabsProps {
  index: number;
  onTab: (idx: number) => void;
}

const Tabs: FC<TabsProps> = ({ index, onTab }) => {
  const markerRef = useRef<HTMLDivElement | null>(null);
  const xValue = index * 200;

  useEffect(() => {
    const tab = document.querySelector('[data-role="tab"]') as HTMLLIElement;
    const { width, height } = tab.getBoundingClientRect();
    if (markerRef.current) {
      markerRef.current.style.width = `${width}px`;
      markerRef.current.style.height = `${height}px`;
    }
  }, []);

  return (
    <div className="color:white">
      <ul className="flex rel">
        <div
          ref={markerRef}
          className={`outline:1px|solid|white abs transform-origin:bottom|left transition:0.5s|all transform:translateX(${xValue}) r:12px`}
        />
        {tabs.map((t, idx) => (
          <li
            data-role="tab"
            data-index={idx}
            data-tabIndex={0}
            onClick={() => {
              onTab(idx);
            }}
            className="flex justify-content:center align-items:center w:200px h:100px"
            key={t}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
