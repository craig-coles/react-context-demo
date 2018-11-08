import * as React from "react";
import { SceneContext } from "./SceneContext";
import "./QuestionBlock.css";
function QuestionBlock() {
  return (
    <SceneContext.Consumer>
      {({ changePlayer }) => {
        return (
          <div className="QuestionBlock" onClick={changePlayer}>
            <div className="QuestionCorner" />
            <div className="QuestionCorner" />
            <div className="QuestionCorner" />
            <div className="QuestionCorner" />
            <div className="QuestionMarkTop" />
            <div className="QuestionMarkTopLeft" />
            <div className="QuestionMarkTopRight" />
            <div className="QuestionMarkTopBottom" />
            <div className="QuestionMarkSquare-1" />
            <div className="QuestionMarkSquare-2" />
          </div>
        );
      }}
    </SceneContext.Consumer>
  );
}

export default QuestionBlock;
