import "./styles.css";
import { useState } from "react";
import Dropdown from "./DropDows";

export default function App() {
  const fruites = ["Mango", "Apple", "Orange"];
  // const [selectedFruit, setSelectedFruit] = useState(0)
  const [fruit, setFruit] = useState("");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="">Select</option>
        {fruites.map((fruit, index) => {
          return (
            <option key={index} value={fruit}>
              {fruit}
            </option>
          );
        })}
      </select>
      {fruit}
      <Dropdown />
    </div>
  );
}
