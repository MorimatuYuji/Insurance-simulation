import React from "react";
import questions from "../questions";
import { Button } from "react-bootstrap";
import $ from "jquery";

// images
import Arrow from "../images/arrow.svg";

function Aircon(props) {
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
          value={"end"}
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
          <p className="question">エアコンの修理義務はどちらにありますか？</p>
        </div>
        <div className="topmg">
          <Button
            variant="outline-primary"
            className="topmg button"
            onClick={props.click}
            name={"8"}
            id="ご自身"
            value={"end"}
          >
            ご自身
          </Button>
        </div>
        <div className="topmg">
          <Button
            variant="outline-primary"
            className="topmg button"
            onClick={props.click}
            name={"8"}
            id="オーナー（管理会社）"
            value={"end"}
          >
            オーナー（管理会社）
          </Button>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default Aircon;
