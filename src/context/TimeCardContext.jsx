import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TimeCardContext = createContext();

export const TimeCardProvider = ({ children }) => {
  const [clicked, setClicked] = useLocalStorage(false, "clicked");
  const [disabled, setDisabled] = useState(false);
  const [isActive, setIsActive] = useLocalStorage(false, "isActive");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds]);

  useEffect(() => {
    if (clicked) {
      seconds < 60 ? setDisabled(true) : setDisabled(false);
      if (seconds === 60) {
        resetTimer();
        setClicked(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, resetTimer, seconds]);

  const value = {
    activeTimer,
    resetTimer,
    seconds,
    clicked,
    setClicked,
    disabled,
  };

  return (
    <TimeCardContext.Provider value={value}>
      {children}
    </TimeCardContext.Provider>
  );
};
