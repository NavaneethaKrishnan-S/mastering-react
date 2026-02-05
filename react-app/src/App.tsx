import { useState } from "react";
import "./App.css";

function App() {
  /*
  
  Best Practices:

  1. Avoid redundant state variables.
  2. Group related variables inside an object.
  3. Avoid deeply nested structures.

  */

  const [person, setPerson] = useState({
    firstName: "Naveen",
    lastName: "krishnan",
  });

  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <h3>Person Details</h3>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
    </div>
  );
}

export default App;
