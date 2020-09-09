import React, { useEffect, useState } from "react";
import ComparePC from "../components/pages/computer/comparePC";
import CompareMobile from "../components/pages/mobiles/compare";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";

function ComparePage() {
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
      setisLoading(true);
    } else {
      router.push("/page.home");
    }
  }, []);

  const ShowTableCompare = () => {
    return <h1>asdsad</h1>;
  };

  if (!isLoading) {
    return null;
  } else {
    if (matches) {
      return <ComparePC />;
    } else {
      return (
        <CompareMobile
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
          ShowTableCompare={ShowTableCompare}
        />
      );
    }
  }
}

export default ComparePage;
