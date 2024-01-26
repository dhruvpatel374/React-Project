import React from "react";
import ReactDOM from "react-dom/client";

// JSX => HTMLlike or XML like syntax not a  HTML

const Title = () => <h1 className="heading">Namaste React From </h1>;
const heading = () => (
  <h1 className="heading1">Namaste React From javascript function</h1>
);
// React functional component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {heading}
    {heading()}
    <h1>This is React functional component🚀</h1>
  </div>
);
// getting root element from element
const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering root element
root.render(<HeadingComponent />);
