import React from "react";
import HeaderNavbar from "../../components/HeaderNavbar";
import NavbarSide from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
import CardProduct from "../../components/component.cardproduct";

function Shop({
    showNavbar,
    setShowNavbar,
    checkLogin,
    user,
    setCheckListShow,
    setisLoading,
    product,
    type
  }) {
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

export default Shop;
