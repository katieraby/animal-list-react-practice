import React from "react";
import Header from "./components/Header";
import "./App.css";
import Puppies from "./components/Puppies";

class App extends React.Component {
  state = {
    currentUser: "Katie"
  };

  render() {
    return (
      <main>
        <Header currentUser={this.state.currentUser} />
        <Puppies />
      </main>
    );
  }
}

export default App;
