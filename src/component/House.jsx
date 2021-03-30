import React from "react";
import questions from "../questions";
import { Button } from "react-bootstrap";
import $ from "jquery";

// images
import Arrow from "../images/arrow.svg";

function House(props) {
  $(function () {
    $(".openBtn").click(function () {
      $(".House-hidden").fadeIn(800);
    });
  });

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
          className="topmg button openBtn"
          // onClick={props.click}
          name={props.cQ}
          id={questions.options[props.cQ][1]["title"]}
        >
          {questions.options[props.cQ][1]["title"]}
        </Button>
      </div>

      <div className="House-hidden">
        <div className="House-top">
          <p className="question">火災保険の風災に加入していますか？</p>
        </div>
        <div className="topmg">
          <Button
            variant="outline-primary"
            className="topmg button"
            onClick={props.click}
            name="FireInsuranceJoin"
            id="はい"
          >
            はい
          </Button>
        </div>
        <div className="topmg">
          <Button
            variant="outline-primary"
            className="topmg button"
            onClick={props.click}
            name="FireInsuranceJoin"
            id="いいえ"
          >
            いいえ
          </Button>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default House;
