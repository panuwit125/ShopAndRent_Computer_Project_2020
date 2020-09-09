import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../HeaderNavbar";
import NavbarSide from "../../Navbar";
import Tabs from "../../Tabs";
import { Form } from "antd";
const FormItem = Form.Item;
import CardProduct from "../../component.cardproduct";
import ShowListRentComponent from "../../component.listRentItem";

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
                <Tabs loading={setisLoading} />
              </div>
              <div className="sp-body-2-body">
                {product.map((data, index) => {
                  return <CardProduct key={index} data={data} page={type} />;
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
