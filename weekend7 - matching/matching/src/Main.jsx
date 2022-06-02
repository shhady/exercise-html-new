import React from "react";
import Header from "./header";
import Data from "./data";
import Footer from "./footer";
class Main extends React.Component {
  state = { like: 0, dislike: 0, players: [], id: 1, moreLikes: 0 };

  componentDidMount() {
    this.setState({ players: Data });
  }

  addlike = () => {
    this.setState({ like: this.state.like + 1, id: this.state.id + 1 });
  };
  addDislike = () => {
    this.setState({ dislike: this.state.dislike + 1, id: this.state.id + 1 });
  };
  paintOnScreen = () => {
    return <Header like={this.state.like} dislike={this.state.dislike} />;
  };
  paintOnScreenFooter = () => {
    return <Footer addlike={this.addlike} addDislike={this.addDislike} />;
  };

  goWatch = () => {
    if (this.state.id === 10 && this.state.like > this.state.dislike) {
      return <h1 className="result"> Nice, You understand football</h1>;
    } else if (this.state.id === 10 && this.state.like < this.state.dislike) {
      return <h1 className="result">Go watch football videos</h1>;
    }
  };

  reset = () => {
    this.setState({ id: 1, like: 0, dislike: 0 });
  };
  render() {
    return (
      <div>
        <div>{this.paintOnScreen()}</div>
        <div>
          {this.state.id !== 10 &&
            this.state.players
              .filter((person) => person.id === this.state.id)
              .map((filteredPerson) => (
                <div key={this.state.id}>
                  <div className="MainContainer">
                    <img
                      className="imageOfPlayer"
                      alt="#"
                      src={filteredPerson.img}
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }}>{filteredPerson.name}</h2>
                </div>
              ))}
        </div>
        <div>{this.goWatch()}</div>
        <div> {this.state.id !== 10 && this.paintOnScreenFooter()}</div>
        <div className="resetBTN">
          {this.state.id === 10 && <button onClick={this.reset}>Reset</button>}
        </div>
      </div>
    );
  }
}
export default Main;
