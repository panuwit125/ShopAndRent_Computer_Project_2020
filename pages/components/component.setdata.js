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
  import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from "react";
import { updateFirstName,updateLastName,updateSsid,updateBird,updatePost } from '../../store/actions/postAction'
import img1 from '../../public/5.png'
  
  const FormItem = Form.Item;
  
  function selectData() {
    const {FirstName,LastName,SSID,BirdDay,PostId} = useSelector(state=>state.post)
    const dispatch = useDispatch();
    useEffect(()=>{
      //dispatch(fetchposts("BAS"))
      console.log(FirstName)
      console.log(LastName)
      console.log(SSID)
      console.log(BirdDay)
      console.log(PostId)
    })
    const handleChange = date => {
      dispatch(updateBird(date));
    };
    return (
      <div style={{ marginTop: 0,width:"100%",maxWidth:"480px"}}>
        <FormItem>
          <div className="nu-font-covid">
            <div>
              <div style={{display:"flex",justifyContent:"center"}}><img src={img1} /></div>
              <form>
                <h3 style={{ color: "white",fontSize:"18px",margin:" 10px 0px 0px 20px " }}>ชื่อ สกุล</h3>
                <Input.Group compact>
                    <Input
                  style={{height:"62px",borderRadius:"31px 0px 0px 31px",borderRight:"2px solid #303030",fontSize:"22px",padding:"0px 25px",color:"white",width:"45%"}}
                  placeholder="ชื่อ"
                  type="text"
                  value={FirstName}
                  onChange={(e) => dispatch(updateFirstName(e.target.value))} />
                    <Input
                  style={{height:"62px",borderRadius:"0px 31px 31px 0px",fontSize:"22px",padding:"0px 25px",color:"white",width:"55%"}}
                  placeholder="สกุล"
                  type="text"
                  value={LastName}
                  onChange={(e) => dispatch(updateLastName(e.target.value))}
                />
                </Input.Group>
                <h3 style={{ color: "white",fontSize:"18px",margin:" 10px 0px 0px 20px " }}>หมายเลขประจำตัวประชาชน</h3>
                <Input
                style={{height:"62px",borderRadius:"31px",fontSize:"22px",padding:"0px 25px",color:"white"}}
                  placeholder="หมายเลขประจำตัวประชาชน"
                  type="text"
                  value={SSID}
                  onChange={(e) => dispatch(updateSsid(e.target.value))}
                  required
                />
                <h3 style={{ color: "white",fontSize:"18px",margin:" 10px 0px 0px 20px " }}>วัน เดือน ปีเกิด</h3>
                <DatePicker
                  style={{
                    width: "100%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    display: "flex",
                    height:"62px",
                    borderRadius:"31px",
                    padding:"0px 25px",
                    fontSize:"22px",color:"white"
                  }}
                  onChange={handleChange}
                  required
                />
                <h3 style={{ color: "white",fontSize:"18px",margin:" 10px 0px 0px 20px " }}>รหัสไปรษณีย์</h3>
                <Input
                style={{height:"62px",borderRadius:"31px",fontSize:"22px",padding:"0px 25px",color:"white"}}
                  placeholder="รหัสไปรษณีย์"
                  type="text"
                  value={PostId}
                  onChange={(e) => dispatch(updatePost(e.target.value))}
                  required
                />
              </form>
            </div>
          </div>
        </FormItem>
      </div>
    );
  }
  
  export default selectData;
  