import Hoc from "./Hoc";

const HocChild = ({ hover }) => {
  return (
    <h1 style={{ backgroundColor: hover ? "lime" : "grey" }}>
      {" "}
      HOC That adds hover effect
    </h1>
  );
};

export default Hoc(HocChild);
