import { useRef, useState } from "react";
import { Axios, debounce } from "../utils";

const request = new Axios();

const AutoComplete = () => {
  const [data, setData] = useState<{ name: string }[]>([]);
  const [isListVisible, setListVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  let listOver = useRef(false).current;

  const dispatchEvent = debounce((value: string) => {
    request.get("", value).then((result) => {
      console.log(result);
      setData(result as { name: string }[]);
      setListVisible(true);
    });
  }, 500);

  return (
    <div className="relative w-[500px]">
      <input
        ref={inputRef}
        type="text"
        className="rounded border-solid border-black border-2 p-1 w-full"
        onKeyUp={(e) => {
          dispatchEvent((e.target as HTMLInputElement).value);
        }}
        onFocus={() => {
          setListVisible(true);
        }}
        onBlur={() => {
          if (listOver) return;
          setListVisible(false);
        }}
      />
      {isListVisible ? (
        <div
          className="absolute left-0 w-full border-solid border-2 border-black"
          style={{
            top: `${+inputRef.current?.getBoundingClientRect().height! + 10}px`,
          }}
          onMouseOver={() => {
            listOver = true;
          }}
          onClick={(e) => {
            if (!inputRef.current) return;
            const element = e.target as HTMLDivElement;
            inputRef.current.value = element.textContent!.trim();
            setListVisible(false);
          }}
        >
          {data.map((item) => {
            return (
              <div className="hover:underline hover:font-bold" key={item.name}>
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default AutoComplete;
