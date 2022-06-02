import React from "react";
import "./style.css";
class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="Footer">
          <button onClick={this.props.addlike}>Like</button>
          <button onClick={this.props.addDislike}>Dislike</button>
        </div>
      </>
    );
  }
}

export default Footer;
