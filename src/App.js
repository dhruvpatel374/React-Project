import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Whole app layout
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
// getting root element from element
const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering root element
root.render(<Applayout />);
