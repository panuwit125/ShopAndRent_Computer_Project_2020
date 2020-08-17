import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
const { Meta } = Card;
import React, { useState, useEffect } from "react";
import Navbar from "./components/component.navbar";
import CardProduct from "./components/component.cardproduct";
import Header from "./components/component.header";
import { useSelector, useDispatch } from "react-redux";
import { updateTypeBland } from "../store/actions/postAction";
import axios from "axios";

function ShopPage() {
  const dispatch = useDispatch();
  const { TypeBland } = useSelector((state) => state.post);
  const [checkLogin, setCheckLogin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [loadingTypebland , setloadingTypebland] = useState(false);
  const [user,setUser] = useState('');
  const [product,setProduct] = useState();
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("token", token,user);
    if (token) {
      setUser(user.user_name)
      setCheckLogin(true);
    }
    getProduct(TypeBland);
  }, []);

  const getProduct = (product) => {
    let body = { bland_product:product }
    axios.post("http://localhost:5000/showproduct",body).then(res=>{
      console.log(res)
      setProduct(res.data)
      setisLoading(true);
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    if(loadingTypebland){
      getProduct(TypeBland)
    } else {
      setloadingTypebland(true)
    }
  },[TypeBland])



  if (!isLoading) {
    return null;
  } else {
    console.log(product)
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="sp">
          <div className="br-header">
            <Header page={"Shop"} />
          </div>
          <div className="br-body">
            <div className="sp-body-1">
              <Navbar page={"Shop"} status={checkLogin} user={user} />
            </div>
            <div className="sp-body-2">
              <div className="sp-body-2-header">
                <h1 style={{ color: "black", fontSize: "40px" }}>
                  {TypeBland}
                </h1>
              </div>
              <div className="sp-body-2-body">
                {product.map((data,index)=>{
                  console.log(data,index)
                  return <CardProduct data={data} />    
                })}
              </div>
            </div>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default ShopPage;
