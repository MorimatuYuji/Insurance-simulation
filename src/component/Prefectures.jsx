import React, { useState } from "react";
import questions from "../questions";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

// images
import Arrow from "../images/arrow.svg";

function Prefectures(props) {
  const [selectedItem, setSelectedItem] = useState("都道府県");

  function Click(event) {
    console.log(selectedItem);
    setSelectedItem(() => {
      return event.currentTarget.innerHTML;
    });
  }

  $(function () {
    $("#dropdown-basic-button").click(function () {
      $(".Prefectures-hidden").fadeIn(2000);
    });
  });

  return (
    <div>
      <div className="ArrowProgress">
        <img src={Arrow} onClick={props.return} alt="Arrow" />
        <p className="question">{questions.question[props.cQ]}</p>
      </div>

      <DropdownButton id="dropdown-basic-button" title={selectedItem}>
        {questions.options[props.cQ].map((question, index) => (
          <Dropdown.Item
            id={props.cQ}
            value={question["title"]}
            key={index}
            onClick={Click}
          >
            {question["title"]}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      <div className="Prefectures-hidden">
        <Button
          variant="outline-primary"
          className="next"
          onClick={props.click}
          name={props.cQ}
          id={selectedItem}
        >
          次へ
        </Button>
      </div>
    </div>
  );
}

export default Prefectures;
