import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
import React, { useState,useEffect } from "react";
import router from "next/router";
import Header from "./components/component.header";
import axios from 'axios'


function InsertProduct() {
    const [nameProduct , setNameProduct] = useState('')
    const [descriptionProduct , setDescriptionProduct] = useState('')
    const [priceProduct , setPriceProduct] = useState('')
    const [blandProduct , setBlandProduct] = useState('')
    const [imageProduct , setIamgeProduct] = useState('')
    const [url,setUrl] = useState('')

    useEffect(()=>{
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM4NDRjZmY2ODRhYjM4NWM3NWQ2MjUiLCJpYXQiOjE1OTc1Njg4ODJ9.SCIPCckygYNBm2PhUOltmCS33rCUaExuatHjwGisjds"
        if(url){
            fetch('http://localhost:5000/insertproduct',{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+ token
                },
                body: JSON.stringify({
                    name_product:nameProduct,
                    description_product:descriptionProduct,
                    price_product:priceProduct,
                    bland_product:blandProduct,
                    image_product:url
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.err) {
                    console.log(data.err)
                } else {
                    console.log('create succussfull')
                }
            })
            .catch(err=>console.log(err))
        }
    },[url])

    const postproduct = () => {
        /*axios({
            method: 'get',
            url: 'http://localhost:5000/asd'
        })
        .then(res=>{
            console.log('sd',res)
        }).catch(err => {
            console.log(err)
        })*/
        const data = new FormData()
        data.append('file',imageProduct)
        data.append('upload_preset','shopandrent')
        data.append('cloud_name','panuwitdev')
        fetch('https://api.cloudinary.com/v1_1/panuwitdev/image/upload',{
            method:'post',
            body:data
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <div className="br-header">
          <Header />
        </div>
        <h2 style={{ color: "black" }}>ชื่อสินค้า</h2>
        <Input value={nameProduct} onChange={(e)=>setNameProduct(e.target.value)} />
        <h2 style={{ color: "black" }}>รายละเอียดสินค้า</h2>
        <Input value={descriptionProduct} onChange={(e)=>setDescriptionProduct(e.target.value)} />
        <h2 style={{ color: "black" }}>ราคาสินค้า</h2>
        <Input value={priceProduct} onChange={(e)=>setPriceProduct(e.target.value)} />
        <h2 style={{ color: "black" }}>แบรน์สินค้า</h2>
        <Input value={blandProduct} onChange={(e)=>setBlandProduct(e.target.value)} />
        <h2 style={{ color: "black" }}>รูปสินค้า</h2>
        <input type="file" onChange={(e)=>setIamgeProduct(e.target.files[0])}  />
        <Button onClick={()=>postproduct()}>เพิ่มสินค้า</Button>
      </div>
    </FormItem>
  );
}

export default InsertProduct;
