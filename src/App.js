import React, { Component } from "react";
import HotelData from "./components/HotelData";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HotelData />
      </div>
    );
  }
}

export default App;
