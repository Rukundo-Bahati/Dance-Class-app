import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ endValue }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          const newValue = prevValue + 1;
          return newValue >= endValue ? endValue : newValue;
        });
      }, 20); // Decrease interval duration for faster animation
      return () => clearInterval(interval);
    }
  }, [inView, endValue]);

  const displayValue = currentValue >= endValue ? `${endValue}+` : currentValue;

  return (
    <div ref={ref}>
      <h1>{displayValue}</h1>
    </div>
  );
};

export default Counter;
