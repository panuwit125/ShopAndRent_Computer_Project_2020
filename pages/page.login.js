import { Form, Button,Input } from "antd";
const FormItem = Form.Item;
import React from 'react'
import router from 'next/router'


function home() {
    return (
      <FormItem style={{margin:"0px"}}>
        <div className="lg">
            <div className="lg-card">
                <div>
                    <h2>สมัครสมาชิก</h2>
                    <h3>ชื่อผู้ใช้งาน</h3>
                    <Input className="lg-input" placeholder="ชื่อผู้ใช้งาน" />
                    <h3>รหัสผ่าน</h3>
                    <Input className="lg-input" type="password" placeholder="รหัสผ่าน" />
                    <h3>ชื่อ-สกุล</h3>
                    <Input className="lg-input" placeholder="ชื่อ สกุล" />
                    <Button className="lg-btn" onClick={()=>router.push('/page.login')} >สมัครสมาชิก</Button>
                </div>
                <div>
                <h2>เข้าสู่ระบบ</h2>
                    <h3>ชื่อผู้ใช้งาน</h3>
                    <Input className="lg-input" placeholder="ชื่อผู้ใช้งาน" />
                    <h3>รหัสผ่าน</h3>
                    <Input className="lg-input" type="password" placeholder="รหัสผ่าน" />
                    <Button className="lg-btn" onClick={()=>router.push('/page.shop')} >เข้าสู่ระบบ</Button>
                </div>
            </div>
        </div>
      </FormItem>
    )
}

export default home

