import React, { useEffect, useState } from "react";
import ComparePC from "../components/pages/computer/comparePC";
import CompareMobile from "../components/pages/mobiles/compare";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import router from "next/router";
import TitleHeader from "../components/component.titleheader";
import NumberFormat from "react-number-format";

function ComparePage() {
  const { TypeBland } = useSelector((state) => state.post);
  const [checkLogin, setCheckLogin] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [loadingTypebland, setloadingTypebland] = useState(false);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [productAll, setProductAll] = useState();
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();
  const [type, setType] = useState("");
  const [checkListShow, setCheckListShow] = useState("none");
  const [showNavbar, setShowNavbar] = useState(0);
  const matches = useMediaQuery("(min-width:600px)");
  const [compareSelectShow, setCompareSelectShow] = useState("none");
  const [selectCompare, setSelectCompare] = useState("");

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
      postProduct(typePage);
    } else {
      router.push("/");
    }
  }, []);

  const SelectProduct = (product) => {
    if (selectCompare === "ProductOne") {
      setProduct1(product);
    } else if (selectCompare === "ProductTwo") {
      setProduct2(product);
    }
  };

  const ShowTableCompare = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            padding: "0px 20px 20px 20px",
          }}
        >
          {matches ? (
            <>
              {product1 ? (
                <img
                  src={product1.image_product}
                  style={{
                    width: 300,
                    height: 225,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductOne");
                    setCompareSelectShow("block");
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 300,
                    height: 225,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductOne");
                    setCompareSelectShow("block");
                  }}
                >
                  <h4>คลิกที่นี้/เพิ่มข้อมูล</h4>
                </div>
              )}

              {product2 ? (
                <img
                  src={product2.image_product}
                  style={{
                    width: 300,
                    height: 225,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductTwo");
                    setCompareSelectShow("block");
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 300,
                    height: 225,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductTwo");
                    setCompareSelectShow("block");
                  }}
                >
                  <h4>คลิกที่นี้/เพิ่มข้อมูล</h4>
                </div>
              )}
            </>
          ) : (
            <>
              {product1 ? (
                <img
                  src={product1.image_product}
                  style={{
                    width: 150,
                    height: 113,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductOne");
                    setCompareSelectShow("block");
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 150,
                    height: 113,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductOne");
                    setCompareSelectShow("block");
                  }}
                >
                  <h4>คลิกที่นี้/เพิ่มข้อมูล</h4>
                </div>
              )}

              {product2 ? (
                <img
                  src={product2.image_product}
                  style={{
                    width: 150,
                    height: 113,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductTwo");
                    setCompareSelectShow("block");
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 150,
                    height: 113,
                    border: "1px solid black",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setSelectCompare("ProductTwo");
                    setCompareSelectShow("block");
                  }}
                >
                  <h4>คลิกที่นี้/เพิ่มข้อมูล</h4>
                </div>
              )}
            </>
          )}
        </div>
        <table id="customers">
          <thead>
            <tr>
              <th>Spec</th>
              <th>ProductOne</th>
              <th>ProductTwo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              {product1 ? (
                <td>{product1.name_product}</td>
              ) : (
                <td>กรุณาเพิ่มข้อมูล</td>
              )}
              {product2 ? (
                <td>{product2.name_product}</td>
              ) : (
                <td>กรุณาเพิ่มข้อมูล</td>
              )}
            </tr>
            <tr>
              <td>CPU</td>
              {product1 ? <td>{product1.cpu_product}</td> : <td></td>}
              {product2 ? <td>{product2.cpu_product}</td> : <td></td>}
            </tr>
            <tr>
              <td>RAM</td>
              {product1 ? <td>{product1.ram_product}</td> : <td></td>}
              {product2 ? <td>{product2.ram_product}</td> : <td></td>}
            </tr>
            <tr>
              <td>VGACard</td>
              {product1 ? <td>{product1.vgacard_product}</td> : <td></td>}
              {product2 ? <td>{product2.vgacard_product}</td> : <td></td>}
            </tr>
            <tr>
              <td>Mainboard</td>
              {product1 ? <td>{product1.mainboard_product}</td> : <td></td>}
              {product2 ? <td>{product2.mainboard_product}</td> : <td></td>}
            </tr>
            <tr>
              <td>Harddisk</td>
              {product1 ? <td>{product1.harddisk_product}</td> : <td></td>}
              {product2 ? <td>{product2.harddisk_product}</td> : <td></td>}
            </tr>
            <tr>
              <td>SSD</td>
              {product1 ? (
                <td>
                  {product1.ssd_product ? product1.ssd_product : "ไม่มีข้อมูล"}
                </td>
              ) : (
                <td></td>
              )}
              {product2 ? (
                <td>
                  {product2.ssd_product ? product2.ssd_product : "ไม่มีข้อมูล"}
                </td>
              ) : (
                <td></td>
              )}
            </tr>
            <tr>
              <td>Monitor</td>
              {product1 ? <td>{product1.monitor_product}</td> : <td></td>}
              {product2 ? <td>{product2.monitor_product}</td> : <td></td>}
            </tr>
            <tr>
              {type === "Shop" ? <td>Price</td> : <td>PricePerDay</td>}

              {product1 ? (
                <NumberFormat
                  value={product1.price_product}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <td style={{ color: "red" }}>{value + " THB"}</td>
                  )}
                />
              ) : (
                <td></td>
              )}
              {product2 ? (
                <NumberFormat
                  value={product2.price_product}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <td style={{ color: "red" }}>{value + " THB"}</td>
                  )}
                />
              ) : (
                <td></td>
              )}
            </tr>
            <tr>
              <td>Link</td>
              {product1 ? (
                <td>
                  <a href={`/description?id=${product1._id}`}>ไปที่ดูสินค้า</a>
                </td>
              ) : (
                <td></td>
              )}
              {product2 ? (
                <td>
                  <a href={`/description?id=${product2._id}`}>ไปที่ดูสินค้า</a>
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  useEffect(() => {
    console.log(product1, product2);
  }, [product1, product2]);

  const postProduct = (typePage) => {
    if (typePage === "Shop") {
      Axios.get("https://tranquil-beach-43094.herokuapp.com/showproductall")
        .then((response) => {
          console.log(response);
          setProductAll(response.data);
          setisLoading(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (typePage === "Rent") {
      Axios.get("https://tranquil-beach-43094.herokuapp.com/showproductallrent")
        .then((response) => {
          console.log(response);
          setProductAll(response.data);
          setisLoading(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      router.push("/");
    }
  };

  if (!isLoading) {
    return null;
  } else {
    if (matches) {
      return (
        <>
          <TitleHeader name={"Compare"} />
          <ComparePC
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            checkLogin={checkLogin}
            user={user}
            setCheckListShow={setCheckListShow}
            setisLoading={setisLoading}
            product1={product1}
            type={type}
            checkListShow={checkListShow}
            userId={userId}
            ShowTableCompare={ShowTableCompare}
            compareSelectShow={compareSelectShow}
            setCompareSelectShow={setCompareSelectShow}
            productAll={productAll}
            selectCompare={selectCompare}
            setSelectCompare={setSelectCompare}
            SelectProduct={SelectProduct}
          />
        </>
      );
    } else {
      return (
        <>
          <TitleHeader name={"Compare"} />
          <CompareMobile
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            checkLogin={checkLogin}
            user={user}
            setCheckListShow={setCheckListShow}
            setisLoading={setisLoading}
            product1={product1}
            type={type}
            checkListShow={checkListShow}
            userId={userId}
            ShowTableCompare={ShowTableCompare}
            compareSelectShow={compareSelectShow}
            setCompareSelectShow={setCompareSelectShow}
            productAll={productAll}
            selectCompare={selectCompare}
            setSelectCompare={setSelectCompare}
            SelectProduct={SelectProduct}
          />
        </>
      );
    }
  }
}

export default ComparePage;
