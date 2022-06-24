import React, { useState } from "react";
import grimer from "../public/team_grimer.png";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(prev => prev + 1);
  }
  return (
    <>
      <div>Welcome! boimjs</div>
      <img src={grimer} alt="grimer_logo" />
      <p>{count}</p>
      <button onClick={handleButtonClick}>Click Me!</button>
    </>
  )
}
