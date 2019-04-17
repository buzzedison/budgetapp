import React, { Component } from "react";
import Menu from "./components/menu";
import Budget from "./components/budgetEntry";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Budget />
      </div>
    );
  }
}

export default App;
