import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <BsFillCalendarFill color="red" size={40} />
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
