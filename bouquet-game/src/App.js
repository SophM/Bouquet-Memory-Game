import React, { Component } from "react";
import Navbar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import FlowerCards from "./components/FlowerCards";
import flowers from "./flowers.json";

class App extends Component {

  state = {
    flowers,
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
              name={flower.name}
              image={flower.image}
            />
          ))}
        </div>  
      </div>
    );
  }

}

export default App;
