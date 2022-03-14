import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TimeCardContext = createContext();

export const TimeCardProvider = ({ children }) => {
  // const [isActive, setIsActive] = useState(false);
  const [isActive, setIsActive] = useLocalStorage(false, "isActive");

  // const [seconds, setSeconds] = useState(0);
  const [seconds, setSeconds] = useLocalStorage(0, "secondsTimer");

  const activeTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const value = {
    activeTimer,
    resetTimer,
    seconds,
  };

  return (
    <TimeCardContext.Provider value={value}>
      {children}
    </TimeCardContext.Provider>
  );
};
