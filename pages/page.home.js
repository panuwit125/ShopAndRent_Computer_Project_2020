import { Form, Button } from "antd";
const FormItem = Form.Item;
import React from 'react'

function home() {
    return (
      <FormItem style={{margin:"0px"}}>
        <div className="br">
            <div className="br-header">
                <h1>Header</h1>                
            </div>
            <div className="br-body">
                <div className="br-body-1">
                    <div className="br-circle" />
                    <Button className="br-btn">RENT</Button>
                    <h2 style={{color:"black"}}>เช่าโน๊ตบุคราคาเริ่มต้น 200 บาท/วัน</h2>
                </div>
                <div className="br-body-1 br-body-2">
                    <div className="br-circle" />
                    <Button className="br-btn">SHOP</Button>
                    <h2 style={{color:"black"}}>ซื้อคอมพิวเตอร์ราคาถูก คุณภาพดี</h2>
                </div>
            </div>
        </div>
      </FormItem>
    )
}

export default home

