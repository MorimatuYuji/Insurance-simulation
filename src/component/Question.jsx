import React from "react";
import questions from "../questions";
import Prefectures from "./Prefectures";
import BuildingType from "./BuildingType";
import { Button } from "react-bootstrap";
import Facility from "./Facility";
import Residence from "./Residence";
import Insurance from "./Insurance";
import House from "./House";
import Aircon from "./Aircon";

// images
import Arrow from "../images/arrow.svg";

function Question(props) {
  if (props.cQ === 0) {
    return (
      <Prefectures cQ={props.cQ} click={props.click} return={props.return} />
    );
  }

  if (props.cQ === 1) {
    return (
      <BuildingType cQ={props.cQ} click={props.click} return={props.return} />
    );
  }

  if (props.cQ === 2) {
    return (
      <Facility
        cQ={props.cQ}
        click={props.click}
        return={props.return}
        setChange={props.setChange}
      />
    );
  }

  if (props.cQ === 3) {
    return (
      <Residence cQ={props.cQ} click={props.click} return={props.return} />
    );
  }

  if (props.cQ === 5) {
    return (
      <Insurance cQ={props.cQ} click={props.click} return={props.return} />
    );
  }

  if (props.cQ === 6) {
    return <House cQ={props.cQ} click={props.click} return={props.return} />;
  }

  if (props.cQ === 7) {
    return <Aircon cQ={props.cQ} click={props.click} return={props.return} />;
  }

  return (
    <div>
      <div className="ArrowProgress">
        <img src={Arrow} onClick={props.return} alt="Arrow" />
        <p className="question">{questions.question[props.cQ]}</p>
      </div>

      <div className="topmg">
        <Button
          variant="outline-primary"
          className="topmg button"
          onClick={props.click}
          name={props.cQ}
          id={questions.options[props.cQ][0]["title"]}
        >
          {questions.options[props.cQ][0]["title"]}
        </Button>
      </div>
      <div className="topmg">
        <Button
          variant="outline-primary"
          className="topmg button"
          onClick={props.click}
          name={props.cQ}
          id={questions.options[props.cQ][1]["title"]}
        >
          {questions.options[props.cQ][1]["title"]}
        </Button>
      </div>
    </div>
  );
}

export default Question;
