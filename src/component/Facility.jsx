import { React, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { Button } from "react-bootstrap";
import $ from "jquery";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup
} from "@material-ui/core";

// images
import Arrow from "../images/arrow.svg";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Radio color="default" {...props} />);

function Facility(props) {
  let selectedItems = {};
  let jsonToString;

  const [changingNum, setNum] = useState();

  $(function () {
    $(".clickAirCon").click(function () {
      $("#Refrigerator").fadeIn(900);
    });
  });

  $(function () {
    $(".clickRefrigerator").click(function () {
      $("#Boiler").fadeIn(900);
    });
  });

  $(function () {
    $(".clickBoiler").click(function () {
      $("#Other").fadeIn(900);
    });
  });

  $(function () {
    $(".clickOther").click(function () {
      $(".Facility-btn").fadeIn(900);
    });
  });

  function handleChange(event) {
    let clickedValue = event.currentTarget.value;
    let clickedName = event.currentTarget.name;
    selectedItems[clickedName] = clickedValue;
    jsonToString = JSON.stringify(selectedItems);
  }

  return (
    <div>
      <div className="ArrowProgress">
        <img src={Arrow} onClick={props.return} alt="Arrow" />
        <p className="question">
          建物内に下記の設備は
          <br />
          &nbsp;&nbsp;&nbsp;いくつ設置されていますか？
        </p>
      </div>

      <div className="center">
        <div className="buttons" id="AirCon">
          <FormControl>
            <FormLabel>
              <span className="Radio-font">業務用エアコン</span>
            </FormLabel>
            <RadioGroup
              onChange={handleChange}
              row
              aria-label="position"
              name="AirCon"
              defaultValue="top"
            >
              <FormControlLabel
                value="0台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">0台</span>}
                labelPlacement="bottom"
                className="clickAirCon"
              />
              <FormControlLabel
                value="1台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">1台</span>}
                labelPlacement="bottom"
                className="clickAirCon"
              />
              <FormControlLabel
                value="2台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">2台</span>}
                labelPlacement="bottom"
                className="clickAirCon"
              />
              <FormControlLabel
                value="3台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">3台以上</span>}
                labelPlacement="bottom"
                className="clickAirCon"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="buttons" id="Refrigerator">
          <FormControl>
            <FormLabel>
              <span className="Radio-font">業務用冷蔵庫</span>
            </FormLabel>
            <RadioGroup
              onChange={handleChange}
              row
              aria-label="position"
              name="Refrigerator"
              defaultValue="top"
            >
              <FormControlLabel
                value="0台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">0台</span>}
                labelPlacement="bottom"
                className="clickRefrigerator"
              />
              <FormControlLabel
                value="1台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">1台</span>}
                labelPlacement="bottom"
                className="clickRefrigerator"
              />
              <FormControlLabel
                value="2台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">2台</span>}
                labelPlacement="bottom"
                className="clickRefrigerator"
              />
              <FormControlLabel
                value="3台以上"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">3台以上</span>}
                labelPlacement="bottom"
                className="clickRefrigerator"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="buttons" id="Boiler">
          <FormControl>
            <FormLabel>
              <span className="Radio-font">給湯器</span>
            </FormLabel>
            <RadioGroup
              onChange={handleChange}
              row
              aria-label="position"
              name="Boiler"
              defaultValue="top"
            >
              <FormControlLabel
                value="0台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">0台</span>}
                labelPlacement="bottom"
                className="clickBoiler"
              />
              <FormControlLabel
                value="1台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">1台</span>}
                labelPlacement="bottom"
                className="clickBoiler"
              />
              <FormControlLabel
                value="2台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">2台</span>}
                labelPlacement="bottom"
                className="clickBoiler"
              />
              <FormControlLabel
                value="3台以上"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">3台以上</span>}
                labelPlacement="bottom"
                className="clickBoiler"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="buttons" id="Other">
          <FormControl>
            <FormLabel>
              <span className="Radio-font">その他電気機器</span>
            </FormLabel>
            <RadioGroup
              onClick={() => props.setChange(selectedItems)}
              onChange={handleChange}
              row
              aria-label="position"
              name="Other"
              defaultValue="top"
            >
              <FormControlLabel
                value="0台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">0台</span>}
                labelPlacement="bottom"
                className="clickOther"
              />
              <FormControlLabel
                value="1台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">1台</span>}
                labelPlacement="bottom"
                className="clickOther"
              />
              <FormControlLabel
                value="2台"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">2台</span>}
                labelPlacement="bottom"
                className="clickOther"
              />
              <FormControlLabel
                value="3台以上"
                control={<Radio color="primary" />}
                label={<span className="Radio-font">3台以上</span>}
                labelPlacement="bottom"
                className="clickOther"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Facility-btn bottommg">
        <Button onClick={props.click} name={"2"} variant="outline-primary">
          次へ
        </Button>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Facility;
