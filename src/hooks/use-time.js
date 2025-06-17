import { useEffect, useState } from "react";

export function useTime() {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  const [time, setTime] = useState(`${hh}:${mm}:${ss}`);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hh = date.getHours();
      const mm = date.getMinutes();
      const ss = date.getSeconds();

      setTime(`${hh}:${mm}:${ss}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
}
