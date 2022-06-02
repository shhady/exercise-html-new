import React from "react";
import "./style.css";
class MainContainer extends React.Component {
  render() {
    return (
      <>
        <div className="Middle">
          <div>{this.props.name}</div>
          <div>{this.props.img}</div>
        </div>
      </>
    );
  }
}

export default MainContainer;
