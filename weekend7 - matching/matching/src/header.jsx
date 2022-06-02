import React from "react";
import "./style.css"
class Header extends React.Component {
  //   console.log(props);
  render() {
    return (
      <>
        <div className="header">
          <h1>Likes: {this.props.like}</h1>
          <h1>Dislikes: {this.props.dislike}</h1>
        </div>
      </>
    );
  }
}

export default Header;
