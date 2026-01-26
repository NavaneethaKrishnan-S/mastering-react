import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
