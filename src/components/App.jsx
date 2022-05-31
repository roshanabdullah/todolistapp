import React, { useState } from "react";

function App() {
  const [items, setItems] = useState("");

  const [myItems, setMyItems] = useState([]);

  function handleChange(e) {
    const myValue = e.target.value;
    setItems(myValue);
  }

  function handleClick(e) {
    setMyItems((prevValue) => {
      return [...prevValue, items];
    });
    setItems("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={items} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {myItems.map((todoItems) => {
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
