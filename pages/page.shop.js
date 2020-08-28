import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingComponent from "./components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";

//import page --> start
import ShopMobile from "./pages/mobiles/shop";
import ShopPC from './pages/computer/shopPC'
//import page --> end

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
        .post(
          "https://tranquil-beach-43094.herokuapp.com/showproductrent",
          body
        )
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
        />
      );
    }
  }
}

export default ShopPage;
