import * as React from "react";
import { SceneContext } from "./SceneContext";
import CustomName from "./CustomName";
import Character from "./Character";
function Main() {
  return (
    <SceneContext.Consumer>
      {({ name }) => {
        return (
          <div>
            <Character />
            <p>{name}</p>
            <CustomName />
          </div>
        );
      }}
    </SceneContext.Consumer>
  );
}

export default Main;
