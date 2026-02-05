import { useState } from "react";
import "./App.css";

function App() {
  /*
    1. React updates state asynchronously.
    2. State is stored outside of components.
    3. Use hooks at the top level of your component.
  */
  const [isVisible, setVisibility] = useState(false);
  const [counter, setCounter] = useState(0);
  let count = 0;

  // A component re-renders only when its state value changes.
  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
    console.log(count);
  };

  // Here, the counter state changes every time, so the component re-renders and the count variable is reset to 0.
  const handleCounter = () => {
    setCounter(counter + 1);
    count++;
    console.log(counter);
    console.log(count);
  };

  const getStateValue = () => {
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
      <button onClick={getStateValue}>getStateValue</button>
      <button onClick={handleCounter}>Count</button>
    </div>
  );
}

export default App;
