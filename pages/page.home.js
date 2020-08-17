import { Form, Button } from "antd";
const FormItem = Form.Item;
import React , { useEffect } from 'react'
import router from 'next/router'
import Header from './components/component.header'
import axios from 'axios'


function home() {
    
    const nexthandle = (type) => {
        localStorage.setItem('type',type)
        router.push("/page.shop")
        return null;
    }

    useEffect(() => {
        localStorage.clear();
        axios.get("https://tranquil-beach-43094.herokuapp.com/").then((res)=>{
          console.log("Success",res)  
        }).catch((err)=>{
            console.log("Error",err)
        })
    }, [])

    return (
      <FormItem style={{margin:"0px"}}>
        <div className="br">
            <div className="br-header">
            <Header />        
            </div>
            <div className="br-body">
                <div className="br-body-1">
                    <div className="br-circle" />
                    <Button className="br-btn" onClick={()=>nexthandle('Rent')} >RENT</Button>
                    <h2 style={{color:"black"}}>เช่าโน๊ตบุคราคาเริ่มต้น 200 บาท/วัน</h2>
                </div>
                <div className="br-body-1 br-body-2">
                    <div className="br-circle" />
                    <Button className="br-btn" onClick={()=>nexthandle("Shop")}>SHOP</Button>
                    <h2 style={{color:"black"}}>ซื้อคอมพิวเตอร์ราคาถูก คุณภาพดี</h2>
                </div>
            </div>
        </div>
      </FormItem>
    )
}

export default home

