const { useState } = require("react");

const Hoc = (Component) => {
  const WithHover = (props) => {
    const [hover, setHover] = useState(false);
    return (
      <div
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <Component hover={hover} {...props} />
      </div>
    );
  };
  return WithHover;
};

export default Hoc;
