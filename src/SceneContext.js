import * as React from "react";

export const SceneContext = React.createContext({
  name: "game over",
  image: "",
  changePlayer: () => {},
  showCustomName: () => {}
});
