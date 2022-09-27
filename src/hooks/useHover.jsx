import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  return [hovered, ref];
}

export default useHover;
