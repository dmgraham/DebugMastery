import { useState, useEffect } from "react";

function useScreenWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let currentTimeout: NodeJS.Timeout;

    function windowResizeHandler() {
      if (currentTimeout) clearTimeout(currentTimeout);

      currentTimeout = setTimeout(() => {
        setWidth(window.innerWidth);
      }, 125);
    }

    setWidth(window.innerWidth);
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);
  return width;
}

export default useScreenWidth;
