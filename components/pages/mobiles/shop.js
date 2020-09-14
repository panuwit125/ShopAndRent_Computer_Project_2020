import React, { useEffect, useState } from "react";
import HeaderNavbar from "../../HeaderNavbar";
import NavbarSide from "../../Navbar";
import Tabs from "../../Tabs";
import { Form } from "antd";
const FormItem = Form.Item;
import CardProduct from "../../component.cardproduct";
import ShowListRentComponent from "../../component.listRentItem";
import { useSelector, useDispatch } from "react-redux";
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
  ChatbotShow,
  bland,
  productData,
  setCheckShowRate,
  setIdRate,
  setIdProduct
}) {
  const [ispageLoading, setpageisLoading] = useState(false);
  const { TypeBland, Navbarres } = useSelector((state) => state.post);
  useEffect(() => {
    setpageisLoading(true);
  }, []);

  

  if (!ispageLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <ChatbotShow />
        {checkLogin ? (
          <ShowListRentComponent
            check={checkListShow}
            user={userId}
            click={setCheckListShow}
            type={type}
            setCheckShowRate={setCheckShowRate}
            setIdRate={setIdRate}
            setIdProduct={setIdProduct}
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
          shop={"shop"}
        />
        <div className="sp">
          <HeaderNavbar page={"Shop"} setshow={setShowNavbar} />
          <div className="br-body">
            <div className="sp-body-2" style={{paddingTop:"20px"}}>
              <div className="sp-body-2-header">
                <Tabs loading={setisLoading} bland={bland} page={"Mobile"} />
              </div>
              <div className="sp-body-2-body">
                {productData[Navbarres].map((data, index) => {
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
