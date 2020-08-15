import React, { useState, useMemo } from "react";
import ReactPlayer from "react-player";
import Axios from "axios";
import { Form, Button } from "antd";
import Duration from "./component.duration";
import { useDispatch, useSelector } from "react-redux";
//import { CounterContext } from "../../store/CouterProvider";
import { updateTime } from "../../store/actions/postAction";
import img1 from "../../public/9.png";

function Player(props) {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.post);
  const [url, seturl] = useState(null);
  //const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [duration, setduration] = useState(0);
  const [playing, setplaying] = useState(false);
  const [pip, setpip] = useState(false);
  const [loaded, setloaded] = useState(0);

  useMemo(() => {
    setpip(false);
    seturl(props.url);
    setplaying(true);
    setpip(true);
    //update();
  }, [props.url]);

  const handleDuration = (duration) => {
    //setduration(duration);
    //dispatch(updateTime(duration));
  };
  const handlePlayPause = () => {
    a();
    console.log("test audio");
  };

  const a = async () => {
    const b = () => {
      return new Promise((resolve) => resolve(setplaying(false)));
    };
    const c = () => {
      return new Promise((resolve) => resolve(setplaying(true)));
    };
    await b();
    await c();
    await console.log("Audio Again!");
  };

  const ButtonShow = () => {
    return (
      <Button
        onClick={handlePlayPause}
        shape="circle"
        size="middle"
        className="nu-btn-reset-covidqt"
      >
        <img src={img1} className="img-rotate-audio" />
      </Button>
    );
  };

  if (pip) {
    console.log("Audio Ready!");
    return (
      <div style={{ color: "white" }}>
        <ReactPlayer
            controls={true}
            light={false}
            playing={playing}
            width="0%"
            height="0%"
            url={url}
            onDuration={handleDuration}
          />

        {playing ? <ButtonShow /> : null}
      </div>
    );
  } else {
    return null;
  }
}
export default Player;
