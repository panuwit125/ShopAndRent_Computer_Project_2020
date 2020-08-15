import React, { useMemo, useState } from "react";
import { Button } from "antd";

function ButtonQuestion(props) {
  const [check, setCheck] = useState(false);

  useMemo(() => {
    const ShowBTN = () => {
      return new Promise(async (resolve) => {
        await setCheck(false);
        await setCheck(true);
      });
    };
    ShowBTN();
  }, [props.question]);

  const Showbuttonno = () => {
    if (props.check === undefined) {
      return (
        <Button
          className="nu-btn-question"
          onClick={() => {
            props.click(false, "...");
          }}
        >
          ไม่ใช่
        </Button>
      );
    } else {
      if (props.check.answer === true) {
        return (
          <Button
            className="nu-btn-question"
            onClick={() => {
              props.click(false, "...");
            }}
          >
            ไม่ใช่
          </Button>
        );
      } else {
        return (
          <Button
            className="nu-btn-question"
            style={{ background: "red" }}
            onClick={() => {
              props.click(false, "...");
            }}
          >
            ไม่ใช่
          </Button>
        );
      }
    }
  };
  const Showbuttonyes = () => {
    if (props.check === undefined) {
      return (
        <Button
          className="nu-btn-question"
          type="primary"
          onClick={() => {
            props.click(true, "...");
          }}
        >
          ใช่
        </Button>
      );
    } else {
      if (props.check.answer === true) {
        return (
          <Button
            className="nu-btn-question"
            type="primary"
            style={{ background: "red" }}
            onClick={() => {
              props.click(true, "...");
            }}
          >
            ใช่
          </Button>
        );
      } else {
        return (
          <Button
            className="nu-btn-question"
            type="primary"
            onClick={() => {
              props.click(true, "...");
            }}
          >
            ใช่
          </Button>
        );
      }
    }
  };

  if (check) {
    return (
      <div className="nu-btn-showbtn">
        <div
          style={{
            width: "100%",
            flexBasis: "auto",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <Showbuttonno />
        </div>
        <div
          style={{
            width: "100%",
            flexBasis: "auto",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <Showbuttonyes />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ButtonQuestion;
