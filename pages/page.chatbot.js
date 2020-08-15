import { Form, Button,Input } from "antd";
const FormItem = Form.Item;
import React from 'react'

function ChatbotPage() {
    return (
      <FormItem style={{margin:"0px"}}>
        <div className="br">
            <div className="br-header">
                <h1>CHATBOT FOR YOU</h1>                
            </div>
            <div className="br-body">
                <div className="cb-body">
                    <h3 style={{color:"black"}}>เงือนไข</h3>
                    <h3 style={{color:"black"}}>1. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
                    <h3 style={{color:"black"}}>2. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
                    <h3 style={{color:"black"}}>3. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
                    <h3 style={{color:"black"}}>4. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
                    <h3 style={{color:"black"}}>5. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
                    <h3 style={{color:"black"}}>6. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
                    <h3 style={{color:"black"}}>ชื่อ - นามสกุล</h3>
                    <Input className="cb-input" placeholder="ชื่อ-นามสกุล" />
                    <h3 style={{color:"black"}}>เบอร์โทรศัพท์</h3>
                    <Input className="cb-input" placeholder="เบอร์โทรศัพท์" />
                    <br />
                    <div className="cb-body-1">
                        <Button className="cb-btn">ตกลง</Button>
                    </div>
                </div>
            </div>
        </div>
      </FormItem>
    )
}

export default ChatbotPage

