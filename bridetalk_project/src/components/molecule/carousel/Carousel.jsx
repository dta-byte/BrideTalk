import "./carousel.css";
import React, { useState, useEffect } from "react";
import { Button } from "../../atoms";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
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
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <Button
          handleClick={() => {
            updateIndex(activeIndex - 1);
          }}
          text={"<"}
        ></Button>

        <Button
          handleClick={() => {
            updateIndex(activeIndex + 1);
            <HiOutlineUserGroup className="chat-icon" size={15} />;
          }}
          text={">"}
        ></Button>
      </div>
    </div>
  );
};
