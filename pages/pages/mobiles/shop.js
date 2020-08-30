import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../components/HeaderNavbar";
import NavbarSide from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
import CardProduct from "../../components/component.cardproduct";
import ShowListRentComponent from "../../components/component.listRentItem";

function Shop({
  showNavbar,
  setShowNavbar,
  checkLogin,
  user,
  setCheckListShow,
  setisLoading,
  product,
  type,
  userId,
  checkListShow,
}) {
  const [ispageLoading, setpageisLoading] = useState(false);
  useEffect(() => {
    setpageisLoading(true);
  }, []);

  if (!ispageLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        {type === "Rent" && checkLogin ? (
          <ShowListRentComponent
            check={checkListShow}
            user={userId}
            click={setCheckListShow}
          />
        ) : (
          null
        )}
        <NavbarSide
          show={showNavbar}
          setshow={setShowNavbar}
          status={checkLogin}
          user={user}
          type={type}
          click={setCheckListShow}
        />
        <div className="sp">
          <HeaderNavbar page={"Shop"} setshow={setShowNavbar} />
          <div className="br-body">
            <div className="sp-body-2">
              <div className="sp-body-2-header">
                {/*<h1 style={{ color: "black", fontSize: "40px" }}>
                    {TypeBland}
                </h1>*/}
                <Tabs loading={setisLoading} />
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

export default Shop;
