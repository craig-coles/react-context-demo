import React, { Component } from "react";
import { SceneContext } from "./SceneContext";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);
    const characters = ["bowser.png", "link.png", "metroid.png"];
    this.changePlayer = () => {
      console.log("called");
      this.setState(state => ({
        name: this.state.name === "Luigi" ? "Mario" : "Luigi",
        image:
          this.state.name === "Luigi"
            ? "8-Bit_Mario.png"
            : "File_8-Bit_Luigi.png"
      }));

      this.playAudio(process.env.PUBLIC_URL + "/smb_powerup.wav");
    };

    this.showCustomName = name => {
      const randomIndex = Math.floor(Math.random() * Math.floor(3));
      this.setState(state => ({
        name,
        image: characters[randomIndex]
      }));
      this.playAudio(process.env.PUBLIC_URL + "/smb_stage_clear.wav");
    };

    this.state = {
      name: "Mario",
      image: "8-Bit_Mario.png",
      changePlayer: this.changePlayer,
      showCustomName: this.showCustomName
    };
  }

  playAudio(file) {
    if (this.audio) this.audio.pause();

    this.audio = new Audio(file);
    this.audio.play();
  }

  render() {
    return (
      <SceneContext.Provider value={this.state}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </SceneContext.Provider>
    );
  }
}

export default App;
