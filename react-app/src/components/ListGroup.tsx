import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris", "Tokyo"];

  // useState is used to manage state in functional components, enabling dynamic data updates in the UI.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* If the items array is empty, React conditionally renders the text “No item found”. */}
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
