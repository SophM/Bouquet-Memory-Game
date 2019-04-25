// import all the dependencies
import React, { Component } from "react";
import Navbar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import FlowerCards from "./components/FlowerCards";
import flowers from "./flowers.json";
import Shuffle from "shuffle-array";
import FinalMessage from "./components/FinalMessage";

// create a class "App" to define a component
class App extends Component {

  // define an object "state" to be able to update some elements on the page
  state = {
    flowers,
    idFlowersClicked: [],
    message: "Click a flower to begin!",
    finalMessage: "",
    score : 0,
    topScore: 0
  }

  // define the handleClickImage function
  handleClickImage = event => {
    // console.log("test");
    // grab the id of the flower that has been clicked
    const flowerClicked = event.target.attributes.getNamedItem("data-id").value;
    // console.log(flowerClicked);
    // console.log(this.state.idFlowersClicked.includes(flowerClicked))

    // clone this.state to a new object that will be modified
    const newState = {...this.state};

    // if the flower hasn't already been clicked
    if (!newState.idFlowersClicked.includes(flowerClicked)) {
      // push the id of the flower clicked into the array idFlowersClicked
      newState.idFlowersClicked.push(flowerClicked);
      // increment the score
      newState.score = newState.score + 1;
      // increment the topScore if it is equal to score
      newState.topScore = ((newState.topScore + 1) === newState.score) ? (newState.topScore + 1) : newState.topScore;
      // modify the message the message displayed
      newState.message = "Great! New flower added!"

      // if the player wins the game
      if (newState.score === 12) {
        newState.finalMessage = "Congrats, You won! Click me to start over."
      }

    // if the flower has already been clicked
    } else {
      // modify the message the message displayed
      newState.message = "Oh no! This one was already in there...!"
      // reset the score to 0
      newState.score = 0;
      // empty the array idFlowersClicked
      newState.idFlowersClicked = [];
    }
    
    // replace the state object with the newState one
    this.setState(newState);
    // shuffle the flower pictures on the page
    this.setState(Shuffle(this.state.flowers));
     
  }

  // render the components on the page
  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <FinalMessage 
          finalMessage={this.state.finalMessage}
        />
        <div className="container mt-2 mb-5 text-center">
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
