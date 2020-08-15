import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Input,
} from "antd";
import Link from "next/link";
import Speechtotext from "./component.speechtotext";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";

const FormItem = Form.Item;
var user
var image
function ShowProfile() {
  const [isLoading , setisLoading] = useState(false);
  const { FirstName, LastName, SSID, PostId, BirdDay } = useSelector(
    (state) => state.post
  );
  useEffect(()=>{
    user = JSON.parse(localStorage.getItem("user"));
    image = localStorage.getItem('image')
    console.log("User",user)
    setisLoading(true);
  },[])
  const keyword = ["ใช่"];
  
  if (isLoading) {
    console.log('TEST',image)
    return (
      <div className="nu-dpprofile-covid4">
        <div className="nu-dpimg-covid4">
          <div className="nu-img-covid4" >
          <img src={image} style={{width:"100%",height:"100%", borderRadius:"68px"}} /></div>
        </div>
        <div className="nu-dpdescript-covid4" >
          <Speechtotext
            speech={"/page.covidtemperature"}
            keyword={keyword}
            page={"covid4"}
            time={13000}
          />
          <h3 style={{ fontSize: "18px", margin: " 10px 0px 0px 20px " }}>
            ชื่อ สกุล
          </h3>
          <div className="nu-box-covid4">{user.fisrt_name + " " +user.last_name}</div>
        </div>
      </div>
  );
  } else {
    return null;
  }
}
export default ShowProfile;
