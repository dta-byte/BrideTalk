import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import "./carousel.css";

export const Carousel = (props) => {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2500);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner-carousel"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators-arrows">
        <IoIosArrowRoundBack
          size={37}
          color={"var(--global-secondary-1)"}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />

        <IoIosArrowRoundForward
          size={37}
          color={"var(--global-secondary-1)"}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
    </div>
  );
};
