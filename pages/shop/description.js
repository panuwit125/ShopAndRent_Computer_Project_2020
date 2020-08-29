import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import LoadingComponent from "../components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import page -> start
import DescriptionMobile from "../pages/mobiles/description";
import DescriptionPC from "../pages/computer/descriptionPC";
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
          setisLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let data = { id: "" + id + "" };
      Axios.post("http://localhost:5000/productrentbyid", data)
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

  const checkStatus = () => {
    if (product.status_product) {
      localStorage.removeItem("itemforrent");
      localStorage.setItem("itemforrent", JSON.stringify(product));
      router.push("/page.payment");
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
            router.push("/page.payment");
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
          router.push("/page.payment");
        } else {
          console.log("เก็บสินค้าในตระกร้าเรียบร้อยแล้ว");
          router.push("/page.shop");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
    if (matches) {
      return (
        <DescriptionPC
          fetchLoading={fetchLoading}
          type={type}
          checkLogin={checkLogin}
          user={user}
          product={product}
          checkProductByid={checkProductByid}
          checkStatus={checkStatus}
        />
      );
    } else {
      return (
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
        />
      );
    }
  }
}

export default DescriptionPage;
