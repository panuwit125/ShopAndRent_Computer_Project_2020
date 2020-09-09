import React, { useState, useEffect } from "react";
import ShowListRentComponent from "../../component.listRentItem";
import Navbar from "../../componentspc/NavbarPc";
import CardProduct from "../../component.cardproduct";
import Tabs from "../../Tabs";
import { Form } from "antd";
const FormItem = Form.Item;

function ShopPC({
  setShowNavbar,
  checkListShow,
  userId,
  setCheckListShow,
  type,
  checkLogin,
  setisLoading,
  TypeBland,
  product,
  user,
  ChatbotShow
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
        <ChatbotShow />
        {type === "Rent" && checkLogin ? (
          <ShowListRentComponent
            check={checkListShow}
            user={userId}
            click={setCheckListShow}
          />
        ) : (
          null
        )}
        <div className="shop-res-container">
          <Navbar
            status={checkLogin}
            user={user}
            type={type}
            click={setCheckListShow}
            setshow={setShowNavbar}
            status={checkLogin}
          />
          <div className="shop-res-body">
            <div className="shop-res-body-header">
              <div className="shop-res-card-type">{type}</div>
              <div className="shop-res-changetype">
                <Tabs loading={setisLoading} page={"PC"} />
              </div>
            </div>
            <div className="shop-res-body-body">
              {product.map((data, index) => {
                return <CardProduct key={index} data={data} page={type} />;
              })}
            </div>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default ShopPC;
