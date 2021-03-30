import React from "react";
import questions from "../questions";
import { Button } from "react-bootstrap";

// images
import Arrow from "../images/arrow.svg";

function BuildingType(props) {
  return (
    <div>
      <div className="ArrowProgress">
        <img src={Arrow} onClick={props.return} alt="Arrow" />
        <p className="question">{questions.question[props.cQ]}</p>
      </div>

      <div>
        {questions.options[props.cQ].map((question, index) => (
          <div>
            <Button
              variant="outline-primary"
              className="topmg button"
              onClick={props.click}
              name={props.cQ}
              id={question["title"]}
            >
              {question["title"]}
            </Button>
          </div>
        ))}
      </div>
      <div className="space"></div>
    </div>
  );
}

export default BuildingType;
