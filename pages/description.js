import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import LoadingComponent from "../components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CloseOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import TitleHeader from "../components/component.titleheader";

// import page -> start
import DescriptionMobile from "../components/pages/mobiles/description";
import DescriptionPC from "../components/pages/computer/descriptionPC";
// import page -> end

function DescriptionPage() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  //const [Id,setID] = useState('')
  const [user, setUser] = useState("");
  const [product, setProduct] = useState();
  const [fetchLoading, setfetchLoading] = useState(false);
  const [type, setType] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const Id = id;
  const matches = useMediaQuery("(min-width:600px)");
  const [showNavbar, setShowNavbar] = useState(0);
  const [imageExpand, setImageExpand] = useState("none");
  const [imageForExpand, setImageForExpand] = useState();
  const [rate,setRate] = useState();

  useEffect(() => {
    if (Id) {
      console.log("id", Id);
      let token = localStorage.getItem("token");
      let user = JSON.parse(localStorage.getItem("user"));
      let typePage = localStorage.getItem("type");
      setType(typePage);
      console.log("token", token, user, typePage);
      if (typePage) {
        if (token) {
          setUser(user);
          setCheckLogin(true);
        }
        getProductByid(typePage);
      }
    }
  }, [Id]);

  const getProductByid = (page) => {
    if (page === "Shop") {
      let data = { id: "" + id + "" };
      Axios.post("https://tranquil-beach-43094.herokuapp.com/productbyid", data)
        .then((res) => {
          console.log(res);
          setProduct(res.data);
          getRateData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let data = { id: "" + id + "" };
      Axios.post(
        "https://tranquil-beach-43094.herokuapp.com/productrentbyid",
        data
      )
        .then((res) => {
          console.log(res);
          setProduct(res.data);
          getRateData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const checkStatus = () => {
    if (product.status_product) {
      localStorage.removeItem("itemforrent");
      localStorage.setItem("itemforrent", JSON.stringify(product));
      router.push("/payment");
    } else {
      alert("สินค้าไม่พร้อมให้เช่า");
    }
  };

  const checkProductByid = (check) => {
    let data = {
      id_user: user._id,
      id_product: Id,
    };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/checkproductbyid",
      data,
    })
      .then((value) => {
        if (value.data.code === 100) {
          if (check === "buy") {
            console.log("ตอนนี้มีสินค้าอยู่ในตระกร้าแล้วครับ");
            router.push("/payment");
          } else {
            alert("มีสินค้าอยู่ในตระกร้าแล้วครับ");
          }
        } else {
          console.log(value);
          if (check === "buy") {
            console.log("buy");
            saveDataInventory("buy");
          } else {
            console.log("push");
            saveDataInventory("push");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRateData = (id) => {
    let data = {id_seller:id.owner_product}
    Axios({
      method:"post",
      url:"https://tranquil-beach-43094.herokuapp.com/showrate",
      data
    }).then(data=>{
      console.log(data);
      if(data.data.data[0].under_number === 0) {
        setRate(0)
      } else {
        console.log("asd")
        let number = (data.data.data[0].on_number/data.data.data[0].under_number)
        number = number.toFixed(1)
        setRate(number)
      }
      setisLoading(true);
    }).catch(err=>{
      console.log(err.response)
    })
  }

  const saveDataInventory = (check) => {
    setfetchLoading(true);
    let data = {
      id_user: user._id,
      id_product: product._id,
    };
    console.log(data);
    Axios.post("https://tranquil-beach-43094.herokuapp.com/inventory", data)
      .then((data) => {
        console.log(data);
        setfetchLoading(false);
        if (check === "buy") {
          router.push("/payment");
        } else {
          console.log("เก็บสินค้าในตระกร้าเรียบร้อยแล้ว");
          router.push("/shop");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ImageExpandShow = () => {
    return (
      <div style={{ display: imageExpand }} className="modal">
        <span
          className="close"
          onClick={() => {
            setImageExpand("none");
            setImageForExpand();
          }}
        >
          <CloseOutlined />
        </span>
        <div className="modal-content cl-modal">
          <img src={imageForExpand} className="modal-contentimage" />
        </div>
      </div>
    );
  };

  const RateShow = () => {
    console.log(rate)
    return (
      <span>
        <Rate allowHalf disabled defaultValue={rate} />
        <span className="ant-rate-text">({rate})</span>
      </span>
    );
  };

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
    if (matches) {
      return (
        <>
          <TitleHeader name={"Description"} />
          <DescriptionPC
            fetchLoading={fetchLoading}
            type={type}
            checkLogin={checkLogin}
            user={user}
            product={product}
            checkProductByid={checkProductByid}
            checkStatus={checkStatus}
            imageExpand={imageExpand}
            setImageExpand={setImageExpand}
            ImageExpandShow={ImageExpandShow}
            setImageForExpand={setImageForExpand}
            RateShow={RateShow}
          />
        </>
      );
    } else {
      return (
        <>
          <TitleHeader name={"Description"} />
          <DescriptionMobile
            fetchLoading={fetchLoading}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            checkLogin={checkLogin}
            user={user}
            product={product}
            type={type}
            checkProductByid={checkProductByid}
            checkStatus={checkStatus}
            imageExpand={imageExpand}
            setImageExpand={setImageExpand}
            ImageExpandShow={ImageExpandShow}
            setImageForExpand={setImageForExpand}
            RateShow={RateShow}
          />
        </>
      );
    }
  }
}

export default DescriptionPage;
