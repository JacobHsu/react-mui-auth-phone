import { useState, useEffect, useRef } from 'react';

export default function useCountDown(initCount = 30) {
  const [count, setCount] = useState(() => initCount);
  const timerId = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      clearInterval(timerId.current);
      setCount(60);
    }
  }, [count]);

  function run() {
    timerId.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  }
  return { count, run };
}
