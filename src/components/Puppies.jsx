import React, { Component } from "react";
import PuppyList from "./PuppyList";
import PuppyForm from "./PuppyForm";

class Puppies extends Component {
  state = {
    puppies: [
      {
        name: "rusty",
        url:
          "https://images.unsplash.com/photo-1566903451935-7e8835ed3e97?ixlib=rb-1.2.1&w=1000&q=80",
        cuteness: 5
      },
      {
        name: "daisy",
        url:
          "https://cdn3-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg",
        cuteness: 10
      }
    ],
    puppiesDisplayed: false,
    selectedPuppy: "rusty"
  };

  render() {
    return (
      <>
        <button onClick={this.togglePuppies}>show dem pups!</button>
        <button
          onClick={() => {
            this.sortPuppies(this.state.puppies);
          }}
        >
          sort by CUTENESS
        </button>
        <PuppyForm />
        <PuppyList
          changeSelectedPuppy={this.changeSelectedPuppy}
          deleteSelectedPupper={this.deleteSelectedPupper}
          selectedPuppy={this.state.selectedPuppy}
          puppies={this.state.puppies}
          puppiesDisplayed={this.state.puppiesDisplayed}
          addCuteness={this.addCuteness}
        />
      </>
    );
  }

  sortPuppies = puppies => {
    const sortedPups = puppies.sort((a, b) => b.cuteness - a.cuteness);
    this.setState({ puppies: sortedPups });
  };

  togglePuppies = () => {
    this.setState(currentState => {
      return { puppiesDisplayed: !currentState.puppiesDisplayed };
    });
  };

  changeSelectedPuppy = puppy => {
    this.setState({ selectedPuppy: puppy });
  };

  deleteSelectedPupper = puppy => {
    this.setState(currentState => {
      const newPupperArray = currentState.puppies.filter(
        pup => pup.name !== puppy
      );
      return { puppies: newPupperArray };
    });
  };

  addCuteness = puppy => {
    this.setState(currentState => {
      const upvotedPups = currentState.puppies.map(pup => {
        if (puppy === pup.name) {
          pup.cuteness++;
        }
        return pup;
      });
      return { puppies: upvotedPups };
    });
  };
}

export default Puppies;
