import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris", "Tokyo"];

  // This function is called "Event handler"
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {/* If the items array is empty, React conditionally renders the text “No item found”. */}
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
