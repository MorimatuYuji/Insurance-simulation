import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import line from "../images/linebtn2.png";
import Grid from "@material-ui/core/Grid";
import pushbutton from "../images/push-button.png";

// Electrical-images

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}));

function Result(props) {
  //できないUI
  if (
    props.qI["FireInsuranceJoin"] === "いいえ" ||
    (props.qI["FireInsuranceJoin"] === "いいえ" &&
      props.qI["8"] === "オーナー（管理会社）") ||
    (props.qI[6] === "はい" && props.qI["8"] === "オーナー（管理会社）")
  ) {
    return (
      <div className="Result-box">
        <div className="topDiv">
          <h1 className="title">シミュレーション結果</h1>
          <div className="result">
            <h3 className="money-result">火災保険(家財)の申請対象外です</h3>
          </div>
        </div>
        <div className="bottomDiv">
          <Paper elevation={3}>
            <h3 className="result-font">
              ご相談により
              <br />
              保険料を受け取れる可能性があります。
            </h3>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={2}></Grid>
            </Grid>

            <div className="line-button">
              <a href="https://lin.ee/xs4rLVz">
                <img src={line} alt="line" width="55%" />
              </a>
            </div>
            <h1 className="cta">友達追加で今すぐ相談する</h1>
            <p className="YourInformation">
              あなたの情報をLINE@で送信し
              <br />
              お悩みを解決しましょう。
            </p>
          </Paper>
        </div>
      </div>
    );
  }

  // 火災保険(建物OK)
  let type = "家財";
  if (props.qI["FireInsuranceJoin"] === "はい") {
    type = "建物";
  }

  return (
    <div className="Result-box">
      <div className="topDiv">
        <h1 className="title">シミュレーション結果</h1>
        <div className="result">
          <h3 className="money-result">火災保険({type})の申請が</h3>
          <h3 id="price">可能です</h3>
        </div>
      </div>
      <div className="bottomDiv">
        <Paper elevation={3}>
          <h3 className="result-font">
            火災保険申請サポートを利用して
            <br />
            簡単に保険料を受け取りましょう。
          </h3>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <div className="line-button">
            <a href="https://lin.ee/xs4rLVz">
              <img src={line} alt="line" width="55%" />
            </a>
          </div>
          <h1 className="cta">友達追加で今すぐお問い合わせ</h1>
          <p className="YourInformation">
            あなたの情報をLINE@で送信し
            <br />
            火災保険の受給申請をしましょう。
          </p>
        </Paper>
      </div>
    </div>
  );
}

export default Result;
