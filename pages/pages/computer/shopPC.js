import React from "react";
import ShowListRentComponent from "../../components/component.listRentItem";
import Header from "../../components/component.header";
import Navbar from "../../components/component.navbar";
import CardProduct from "../../components/component.cardproduct";
import { Form } from "antd";
const FormItem = Form.Item;

function ShopPC({
  checkListShow,
  userId,
  setCheckListShow,
  type,
  checkLogin,
  setisLoading,
  TypeBland,
  product,
  user
}) {
  return (
    <FormItem style={{ margin: "0px" }}>
      <ShowListRentComponent
        check={checkListShow}
        user={userId}
        click={setCheckListShow}
      />
      <div className="sp">
        <div className="br-header">
          <Header page={type} />
        </div>
        <div className="br-body">
          <div className="sp-body-1">
            <Navbar
              page={type}
              status={checkLogin}
              user={user}
              loading={setisLoading}
              click={setCheckListShow}
            />
          </div>
          <div className="sp-body-2">
            <div className="sp-body-2-header">
              <h1 style={{ color: "black", fontSize: "40px" }}>{TypeBland}</h1>
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

export default ShopPC;
