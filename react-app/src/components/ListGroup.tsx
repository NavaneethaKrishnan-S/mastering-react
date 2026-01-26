function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris", "Tokyo"];
  // items = [];

  return (
    <>
      <h1>List</h1>
      {/* If the items array is empty, React conditionally renders the text “No item found”. */}
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
