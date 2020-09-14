import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingComponent from "../components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";
import { Button, Rate } from "antd";
import { WechatOutlined } from "@ant-design/icons";
import TitleHeader from "../components/component.titleheader";

//import page --> start
import ShopMobile from "../components/pages/mobiles/shop";
import ShopPC from "../components/pages/computer/shopPC";
import router from "next/router";
import Axios from "axios";
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
  const [rateValue, setRateValue] = useState(2.5);
  const [checkShowRate, setCheckShowRate] = useState("none");
  const [idRate, setIdRate] = useState();
  const [idproduct, setIdProduct] = useState();

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
      .get("https://tranquil-beach-43094.herokuapp.com/showbland")
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

  const RateShow = () => {
    console.log(idRate, idproduct);
    return (
      <div style={{ display: checkShowRate }} className="modal md-bg">
        <div className="modal-content">
          <div className="mg-update-track-card">
            <div>
              <h2 style={{ color: "black", textAlign: "center" }}>
                ให้คะแนนร้านค้า
              </h2>
            </div>
            <div className="lri-body" style={{ textAlign: "center" }}>
              <Rate
                allowHalf
                value={rateValue}
                onChange={(e) => {
                  setRateValue(e);
                  console.log(e);
                }}
                style={{ marginBottom: 15 }}
              />
              <Button
                type="primary"
                className="mg-btn-update"
                onClick={() => updateRate()}
              >
                ยืนยัน
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const updateRate = () => {
    setisLoading(false);
    console.log("1");
    let data = {
      id_seller: idRate,
      on_number: rateValue,
      under_number: 1,
      id_solditem: idproduct,
    };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/showrate",
      data,
    })
      .then((res) => {
        console.log(res);
        let data = {
          id_seller: idRate,
          on_number: res.data.data[0].on_number+rateValue,
          under_number: res.data.data[0].under_number+1,
          id_solditem: idproduct,
        };
        if (type === "Shop") {
          console.log("11");
          Axios({
            method: "put",
            url: "http://localhost:5000/updateratesolditem",
            data,
          })
            .then((response) => {
              console.log(response);
              setCheckShowRate("none");
              setisLoading(true);
            })
            .catch((error) => {
              console.log(error.response);
            });
        } else if (type === "Rent") {
          console.log("22");
          Axios({
            method: "put",
            url: "http://localhost:5000/updateraterentitem",
            data,
          })
            .then((response) => {
              console.log(response);
              setCheckShowRate("none");
              setisLoading(true);
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  if (!isLoading) {
    return <LoadingComponent />;
  } else {
    console.log(productData);
    if (matches) {
      return (
        <>
          <RateShow />
          <TitleHeader name={"Shop"} />
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
            setCheckShowRate={setCheckShowRate}
            setIdRate={setIdRate}
            setIdProduct={setIdProduct}
          />
        </>
      );
    } else {
      return (
        <>
          <RateShow />
          <TitleHeader name={"Shop"} />
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
            setCheckShowRate={setCheckShowRate}
            setIdRate={setIdRate}
            setIdProduct={setIdProduct}
          />
        </>
      );
    }
  }
}

export default ShopPage;
