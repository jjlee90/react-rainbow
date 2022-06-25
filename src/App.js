import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";
import "./App.css";

export default function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);
  const colorMap = colors.map((color, i) => {
    return <ColorBlock key={i} color={color} />;
  });
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}
