import React, { Component } from "react";
import Navbar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import FlowerCards from "./components/FlowerCards";
import flowers from "./flowers.json";
import Shuffle from "shuffle-array";

class App extends Component {

  state = {
    flowers,
  }

  handleClickImage = () => {
    console.log("test");
    this.setState(Shuffle(this.state.flowers));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar />
        <div className="container mt-5 mb-5 text-center">
          {this.state.flowers.map(flower => (
            <FlowerCards
              id={flower.id}
              key={flower.id} 
              name={flower.name}
              image={flower.image}
              handleClickImage={this.handleClickImage}
            />
          ))}
        </div>  
      </div>
    );
  }

}

export default App;
