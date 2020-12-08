// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
// import

function App() {
  return (
    <div className="App">
      victory hwan
      <button
        onClick={() => {
          alert("zz");
        }}
      >
        Submit
      </button>
      <Badge color="primary">primary</Badge>
    </div>
  );
}

export default App;
