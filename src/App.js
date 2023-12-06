import React from "react";
import Navbar from "./components/Navbar";
import data from "./data/data";
import "./style.css";
import DisplayCards from "./components/DisplayCards";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const cards = data.map((item) => {
    return <DisplayCards key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
};

export default App;
