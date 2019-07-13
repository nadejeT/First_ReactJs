import React from "react";

const Child = ({ test = "valdef", x, test2 }) => (
  <div style={{ fontSize: `${test2}px` }}>
    <h1 style={x % 2 === 0 ? { color: "red" } : { color: "black" }}>
      {" "}
      {test}{" "}
    </h1>
  </div>
);

//const Child = (props) => <h1>  {props.test} </h1>;
export default Child;
