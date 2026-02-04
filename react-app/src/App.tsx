import "./App.css";
import LikeButton from "./components/Button/LikeButton";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <LikeButton onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
