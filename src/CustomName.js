import * as React from "react";
import { SceneContext } from "./SceneContext";
class CustomName extends React.Component {
  state = {
    customName: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ customName: e.target.value });
  };

  handleSetCustomName = e => {
    e.preventDefault();
    this.showCustomName(this.state.customName);
  };

  render() {
    return (
      <SceneContext.Consumer>
        {({ showCustomName }) => {
          this.showCustomName = showCustomName;
          return (
            <React.Fragment>
              <input
                type="text"
                name="customName"
                id="customName"
                value={this.state.customName}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSetCustomName}>Set your name</button>
            </React.Fragment>
          );
        }}
      </SceneContext.Consumer>
    );
  }
}

export default CustomName;
