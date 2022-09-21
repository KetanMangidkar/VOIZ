import { useState } from "react";
import "./App.css";
import SelectBar from "./Components/SelectBar";

const options = [
  { label: "pen", value: "pen" },
  { label: "pencil", value: "pencil" },
  { label: "book", value: "book" },
  { label: "notebook", value: "notebook" },
  { label: "eraser", value: "eraser" },
  { label: "sharpener", value: "sharpener" },
  { label: "ink", value: "ink" },
];
function onChangeip(value) {
  console.log(value);
}

function App() {
  const [toggel, setToggel] = useState(true);
  const [data, setData] = useState(options);
  console.log(data);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      let add = {
        label: e.target.value,
        value: e.target.value,
      };
      setData([...data, add]);
    }
  };
  return (
    <div className="App">
      {toggel ? (
        <SelectBar
          options={data}
          onChange={onChangeip}
          multiSelect={true}
        ></SelectBar>
      ) : (
        <input type="text" onKeyPress={handleKeyPress} />
      )}

      <button onClick={() => setToggel(!toggel)}>
        {toggel ? "ADD" : "Back"}
      </button>
    </div>
  );
}

export default App;
