import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// spread operators
const citrus = ["Lime", "Lemon", "orange"];
const fruits = ["apple", ...citrus, "banana", "coconut"];
console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};

console.log(user);
