import { useRef, useState, useEffect, useCallback } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef();

  const handleMouseOut = useCallback(() => setValue(true), []);
  const handleMouseOver = useCallback(() => setValue(false), []);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [handleMouseOver, handleMouseOut]);

  return [ref, value];
};

const CustomHookComponent = () => {
  const [ref, hovered] = useHover();
  return (
    <>
      <h1>Custom Hook for Hover Effect</h1>
      <div ref={ref} style={{ backgroundColor: hovered ? "red" : "yellow" }}>
        <h1>Child</h1>
      </div>
    </>
  );
};

export default CustomHookComponent;
