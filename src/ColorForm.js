import React, { useState } from "react";

export default function ColorForm(props) {
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // We still want to eliminate the default behavior of our form submittal
    e.preventDefault();
    // addColor, the function we just built, should be available within props.
    props.addColor(input);

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />

        <input type="button" value="Submit!" />
      </form>
    </div>
  );
}
