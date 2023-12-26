import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.css";

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "expo.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div className="container">
      <div ref={cursor}>
        <div className="cursor"></div>
      </div>
    </div>
  );
};

export default Cursor;
