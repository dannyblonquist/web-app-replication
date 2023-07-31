import { Component } from "react";

import SideBar from "./sideBar";
import MainComponent from "./main.component";
import Footer from "./footer";
import Header from "./header";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Header />
        <MainComponent />
        <Footer />
      </div>
    );
  }
}
