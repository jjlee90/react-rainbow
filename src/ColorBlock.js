import React from "react";

export default function ColorBlock(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}
