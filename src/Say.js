import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hello!");
  const onClickLeave = () => setMessage("Goodbye!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Blue
      </button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Say;
