import * as React from "react";
import { SceneContext } from "./SceneContext";
function Character() {
  return (
    <SceneContext.Consumer>
      {({ image, name }) => {
        return (
          <div>
            <img src={process.env.PUBLIC_URL + "/images/" + image} alt={name} />
          </div>
        );
      }}
    </SceneContext.Consumer>
  );
}

export default Character;
