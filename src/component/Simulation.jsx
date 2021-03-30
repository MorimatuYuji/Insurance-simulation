import React, { useState } from "react";
import Question from "./Question";
import { createMuiTheme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ThemeProvider } from "@material-ui/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Result from "./Result";

let questionsInput = {};

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#007bff"
    }
  }
});

function LinearProgressWithLabel(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress
            borderRadius="50%"
            color="secondary"
            variant="determinate"
            {...props}
          />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

let progressNum = 13;

function Simulation() {
  let [currentQuestion, setQuestion] = useState(0);

  const [progress, setProgress] = React.useState(0);
  const [selected, setSelected] = useState();

  function Click(event) {
    let clickedId;
    let clickedName;
    if (currentQuestion === 2) {
      clickedId = JSON.stringify(selected);
      clickedName = 2;
    } else {
      clickedId = event.currentTarget.id;
      clickedName = event.currentTarget.name;
    }

    questionsInput[clickedName] = clickedId;
    console.log(questionsInput);
    setQuestion((prevNum) => {
      return prevNum + 1;
    });

    if (event.currentTarget.value === "end") {
      setProgress((prevValue) => {
        return 100;
      });
    } else {
      setProgress((prevValue) => {
        return (prevValue += progressNum);
      });
    }
  }

  function GetData(data) {
    questionsInput[2] = data;
    console.log(questionsInput);
  }

  function Return(event) {
    setQuestion((prevNum) => {
      if (currentQuestion <= 0) {
        return 0;
      } else if (currentQuestion === 7) {
        delete questionsInput[6];
        return prevNum - 1;
      } else {
        return prevNum - 1;
      }
    });

    if (progress > 0) {
      setProgress((prevValue) => {
        return (prevValue -= progressNum);
      });
    } else {
      setProgress((prevValue) => {
        return 0;
      });
    }
  }

  return (
    <div>
      <div className="topmg">
        <LinearProgressWithLabel value={progress} />
      </div>
      {currentQuestion <= 7 ? (
        <Question
          cQ={currentQuestion}
          qI={questionsInput}
          click={Click}
          return={Return}
          setChange={(selectedItems) => setSelected(selectedItems)}
        />
      ) : (
        <Result qI={questionsInput} />
      )}
    </div>
  );
}

export default Simulation;
