import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
const { Meta } = Card;
import React, { useState, useEffect } from "react";
import Navbar from "./components/component.navbar";
import CardProduct from "./components/component.cardproduct";
import Header from "./components/component.header";
import { useSelector, useDispatch, useStore } from "react-redux";
import { updateTypeBland } from "../store/actions/postAction";
import LoadingComponent from "./components/component.loading";
import ShowListRentComponent from "./components/component.listRentItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import HeaderNavbar from "./components/HeaderNavbar";
import NavbarSide from "./components/Navbar";
import Tabs from "./components/Tabs";

function ShopPage() {
  const dispatch = useDispatch();
  const { TypeBland } = useSelector((state) => state.post);
  const [checkLogin, setCheckLogin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [loadingTypebland, setloadingTypebland] = useState(false);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [product, setProduct] = useState();
  const [type, setType] = useState("");
  const [checkListShow, setCheckListShow] = useState("none");
  const [showNavbar, setShowNavbar] = useState(0);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));
    let typePage = localStorage.getItem("type");
    setType(typePage);
    console.log("token", token, user, typePage);
    if (typePage) {
      if (token) {
        setUser(user.user_name);
        setUserId(user._id);
        setCheckLogin(true);
      }
      console.log("dasds");
      getProduct(TypeBland, typePage);
    }
  }, []);

  const getProduct = (product, page) => {
    if (page === "Shop") {
      let body = { bland_product: product };
      axios
        .post("https://tranquil-beach-43094.herokuapp.com/showproduct", body)
        .then((res) => {
          console.log(res);
          setProduct(res.data);
          setisLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let body = { bland_product: product };
      axios
        .post("https://tranquil-beach-43094.herokuapp.com/showproductrent", body)
        .then((res) => {
          console.log(res);
          setProduct(res.data);
          setisLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (loadingTypebland) {
      getProduct(TypeBland, type);
    } else {
      setloadingTypebland(true);
    }
  }, [TypeBland]);

  if (!isLoading) {
    return <LoadingComponent />;
  } else {
    console.log(product);
    if (matches) {
      return (
        <FormItem style={{ margin: "0px" }}>
          <ShowListRentComponent
            check={checkListShow}
            user={userId}
            click={setCheckListShow}
          />
          <div className="sp">
            <div className="br-header">
              <Header page={type} />
            </div>
            <div className="br-body">
              <div className="sp-body-1">
                <Navbar
                  page={type}
                  status={checkLogin}
                  user={user}
                  loading={setisLoading}
                  click={setCheckListShow}
                />
              </div>
              <div className="sp-body-2">
                <div className="sp-body-2-header">
                  <h1 style={{ color: "black", fontSize: "40px" }}>
                    {TypeBland}
                  </h1>
                </div>
                <div className="sp-body-2-body">
                  {product.map((data, index) => {
                    return <CardProduct data={data} page={type} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </FormItem>
      );
    } else {
      return (
        <FormItem style={{ margin: "0px" }}>
          <NavbarSide
            show={showNavbar}
            setshow={setShowNavbar}
            status={checkLogin}
            user={user}
          />
          <div className="sp">
            <HeaderNavbar page={"Shop"} setshow={setShowNavbar} />
            <div className="br-body">
              <div className="sp-body-2">
                <div className="sp-body-2-header">
                  {/*<h1 style={{ color: "black", fontSize: "40px" }}>
                    {TypeBland}
                </h1>*/}
                  <Tabs click={setCheckListShow} loading={setisLoading} />
                </div>
                <div className="sp-body-2-body">
                  {product.map((data, index) => {
                    return <CardProduct data={data} page={type} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </FormItem>
      );
    }
  }
}

export default ShopPage;
