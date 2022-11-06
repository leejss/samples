import type { PropsWithChildren } from "react";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { SwiperContainer, SwiperItem, SwiperWrapper } from "./swiper.style";

const Swiper = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  let positionX = useRef(0).current;
  let deltaX = useRef(0).current;
  let translateXValue = useRef(0).current;
  let currentSlide = useRef(0).current;

  useEffect(() => {
    if (!wrapperRef.current || !containerRef.current) return;
    const wrapperNode = wrapperRef.current;
    const containerNode = containerRef.current;
    const initialLeft = wrapperNode.clientWidth * 0.15; // 30% / 2
    wrapperNode.style.transform = `translateX(${initialLeft}px)`;

    // Touch handler
    const touchMoveHandler = (event: any) => {
      const e = event as React.TouchEvent<HTMLDivElement>;
      const touch = e.touches[0];
      deltaX = touch.clientX - positionX;
      // animate
      wrapperNode.style.transform = `translateX(${translateXValue + deltaX}px)`;
    };
    const touchEndHandler = () => {
      const factor = initialLeft - (0.7 * wrapperNode.clientWidth + 16) * currentSlide;
      translateXValue = factor;
      // move to updated current slide
      wrapperNode.style.transform = `translateX(${translateXValue}px)`;
      // unsubscribe touch events
      wrapperNode.removeEventListener("touchmove", touchMoveHandler);
      wrapperNode.removeEventListener("touchend", touchEndHandler);
      wrapperNode.removeEventListener("touchcancel", touchEndHandler);
    };
    const touchStartHandler = (event: any) => {
      const e = event as React.TouchEvent<HTMLDivElement>;
      const touch = e.touches[0];
      positionX = touch.clientX; // mark current X position
      wrapperNode.style.userSelect = "none"; // Prevent selection
      // subscribe events
      wrapperNode.addEventListener("touchmove", touchMoveHandler);
      wrapperNode.addEventListener("touchend", touchEndHandler);
      wrapperNode.addEventListener("touchcancel", touchEndHandler);
    };

    // Mouse handler
    const mouseMoveHandler = (event: any) => {
      const e = event as React.MouseEvent<HTMLDivElement>;
      deltaX = e.clientX - positionX;
      // animate
      wrapperNode.style.transform = `translateX(${translateXValue + deltaX}px)`;
    };
    const mouseUpHandler = () => {
      const factor = initialLeft - (0.7 * wrapperNode.clientWidth + 16) * currentSlide;
      translateXValue = factor;
      // move to updated current slide
      wrapperNode.style.transform = `translateX(${translateXValue}px)`;
      // unsubscribe touch events
      wrapperNode.removeEventListener("mousemove", mouseMoveHandler);
      wrapperNode.removeEventListener("mouseup", mouseUpHandler);
      wrapperNode.removeEventListener("mouseleave", mouseUpHandler);
    };
    const mouseDownHandler = (event: any) => {
      const e = event as React.MouseEvent<HTMLDivElement>;
      positionX = e.clientX; // mark current X position
      wrapperNode.style.userSelect = "none"; // Prevent selection
      // subscribe events
      wrapperNode.addEventListener("mousemove", mouseMoveHandler);
      wrapperNode.addEventListener("mouseup", mouseUpHandler);
      wrapperNode.addEventListener("mouseleave", mouseUpHandler);
    };
    wrapperNode.addEventListener("touchstart", touchStartHandler);
    wrapperNode.addEventListener("mousedown", mouseDownHandler);

    return () => {
      wrapperNode.removeEventListener("touchstart", touchStartHandler);
      wrapperNode.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  useEffect(() => {
    // oberve slide item
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dataset = (entry.target as HTMLDivElement).dataset as {
            index: string;
          };
          if (entry.isIntersecting) {
            currentSlide = parseInt(dataset.index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.4,
      },
    );
    const items = document.querySelectorAll(`[data-type="item"]`);
    items.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <SwiperContainer ref={containerRef}>
      <SwiperWrapper ref={wrapperRef}>
        {React.Children.map(children, (child, index) => (
          <SwiperItem data-type="item" data-index={index}>
            {child}
          </SwiperItem>
        ))}
      </SwiperWrapper>
    </SwiperContainer>
  );
};

export default Swiper;
