import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";
import "./style.css"

const App = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
};

export default App;
