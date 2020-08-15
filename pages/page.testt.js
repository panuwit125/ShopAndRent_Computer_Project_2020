import { Component, useState } from "react";
import { Form, Button } from "antd";
import Speechtotext from "./components/component.speechtotext";
import ReactPlayer from 'react-player'
import AudioAsk from '../public/SoundSuggestAsk.mp3'
const FormItem = Form.Item;

function Test() {
  const keyword = ["เริ่มประเมิน"];
  const [check,setCheck] = useState(false)
  return (
    <FormItem>
      <div>
        <h1>AAA</h1>
        <ReactPlayer url={AudioAsk} playing={check} />
        <button onClick={()=>setCheck(true)}>Check</button>
      </div>
    </FormItem>
  );
}

export default Test;
