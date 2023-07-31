import { Component } from "react";

export default class MainComponent extends Component {
  render() {
    return (
      <div className="main-content-container">
        <div className="top-main-content">MAIN CONTENT</div>
        <div className="grid-container">
          <div className="main-content">MAIN CONTENT</div>
          <div className="main-content">IMAGE</div>
          <div className="main-content">IMAGE</div>
          <div className="main-content">MAIN CONTENT</div>
        </div>
        <div className="bottom-main-content">MAIN CONTENT</div>
        <button className="main-button">BUTTON</button>
      </div>
    );
  }
}
