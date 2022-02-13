import { useState } from "react";

const Animations = () => {
  const [mouseOver, setMouseOver] = useState({ bubble: false, rotate: false });

  const STYLES = {
    bubble: {
      width: "100px",
      height: "100px",
      backgroundColor: "red",
      transition: "all 0.3s ease",
      transform: mouseOver.bubble && "scale(1.1)"
    },
    rotate: {
      width: "100px",
      height: "100px",
      backgroundColor: "orange",
      transition: "all 0.3s ease",
      transform: mouseOver.rotate && "rotate(360deg)"
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div
        onMouseOver={() => setMouseOver({ ...mouseOver, bubble: true })}
        onMouseOut={() => setMouseOver({ ...mouseOver, bubble: false })}
        className="bubble"
        style={STYLES.bubble}
      >
        Round
      </div>
      <div
        className="rotate"
        onMouseOver={() => setMouseOver({ ...mouseOver, rotate: true })}
        onMouseOut={() => setMouseOver({ ...mouseOver, rotate: false })}
        style={STYLES.rotate}
      >
        Rotate
      </div>
    </div>
  );
};

export default Animations;
