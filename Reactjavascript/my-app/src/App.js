import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import nameList from "./Components/Counter";
import EnhancedUser from "./Components/User";

function NameList() {
  const names = [
    "Neeta",
    "Elisha",
    "Kirtika",
    "Srijana",
    "Bishika",
    "Kirtee",
    "Trija",
    "Rachana",
    "Anisha",
  ];

  return (
    <div className="main">
      <div>
        <h1>First Assignment</h1>
      </div>

      {names.map((name, index) => {
        return <Counter key={name.concat(index)} name={name} />;
      })}
    </div>
  );
}
function ForEnhancednameList() {
  const forEnhanceNames = ["Puza", "Kusum", "sami", "neha", "sindhu"];
  return (
    <div className="main">
      <div>
        <h1>Second Assignment</h1>
      </div>
      {forEnhanceNames.map((name, index) => {
        return <EnhancedUser key={name.concat(index)} name={name} />;
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Counter name={"eee"} /> */}
      <NameList />
      <ForEnhancednameList />
    </div>
  );
}

export default App;
