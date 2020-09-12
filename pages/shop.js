import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingComponent from "../components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import { Button } from "antd";
import { WechatOutlined } from "@ant-design/icons";

//import page --> start
import ShopMobile from "../components/pages/mobiles/shop";
import ShopPC from "../components/pages/computer/shopPC";
import router from "next/router";
//import page --> end

let productData = [];

function ShopPage() {
  const { TypeBland } = useSelector((state) => state.post);
  const [checkLogin, setCheckLogin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [product, setProduct] = useState();
  const [type, setType] = useState("");
  const [checkListShow, setCheckListShow] = useState("none");
  const [showNavbar, setShowNavbar] = useState(0);
  const matches = useMediaQuery("(min-width:600px)");
  const [bland, setBland] = useState();

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
      getBland();
    } else {
      router.push("/page.home");
    }
  }, []);

  const getBland = () => {
    axios
      .get("http://localhost:5000/showbland")
      .then((res) => {
        console.log(res);
        setBland(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    if (bland) {
      console.log(bland.length);
      getTodos();
    }
  }, [bland]);

  async function getTodos() {
    const promises = bland.map(async (name, index) =>
      console.log(
        `Recei todd ${index + 1}`,
        await getProduct(name.name_bland, type, index)
      )
    );
    await Promise.all(promises);
    console.log("Finished!", productData);
    setisLoading(true);
  }

  const getProduct = async (product, page, i) => {
    console.log(page);
    if (page === "Shop") {
      let body = { bland_product: product };
      await axios
        .post("https://tranquil-beach-43094.herokuapp.com/showproduct", body)
        .then((res) => {
          productData[i] = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (page === "Rent") {
      console.log("asdsfgdg");
      let body = { bland_product: product };
      await axios
        .post(
          "https://tranquil-beach-43094.herokuapp.com/showproductrent",
          body
        )
        .then((res) => {
          productData[i] = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const ChatbotShow = () => {
    return (
      <Button
        className="cb-fixed"
        onClick={() => alert("เข้าไป Chatbot (จำลอง)")}
      >
        <WechatOutlined style={{ fontSize: "30px" }} />
      </Button>
    );
  };

  if (!isLoading) {
    return <LoadingComponent />;
  } else {
    console.log(productData);
    if (matches) {
      return (
        <ShopPC
          checkListShow={checkListShow}
          userId={userId}
          setCheckListShow={setCheckListShow}
          type={type}
          checkLogin={checkLogin}
          setisLoading={setisLoading}
          TypeBland={TypeBland}
          product={product}
          user={user}
          setShowNavbar={setShowNavbar}
          ChatbotShow={ChatbotShow}
          productData={productData}
          bland={bland}
        />
      );
    } else {
      return (
        <ShopMobile
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          checkLogin={checkLogin}
          user={user}
          setCheckListShow={setCheckListShow}
          setisLoading={setisLoading}
          product={product}
          type={type}
          checkListShow={checkListShow}
          userId={userId}
          ChatbotShow={ChatbotShow}
          bland={bland}
          productData={productData}
        />
      );
    }
  }
}

export default ShopPage;
