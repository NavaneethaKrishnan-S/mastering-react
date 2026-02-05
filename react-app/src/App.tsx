import { useState } from "react";
import "./App.css";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = {
    //   title: drink.title,
    //   price: 6,
    // };
    // setDrink(newDrink);

    // const newDrink = {
    //   ...drink,
    //   price: 6,
    // };
    // setDrink(newDrink);

    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
