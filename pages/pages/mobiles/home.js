import React from 'react'
import HeaderNavbar from "../../components/HeaderNavbar";
import { Form, Button } from "antd";
const FormItem = Form.Item;

function HomeMobile({nextpage}) {
    return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <HeaderNavbar page={"Home"} />
            <div className="br-body-res">
              <div className="card-res-home">
                <Button
                  className="btn-res-home"
                  onClick={() => nextpage("Shop")}
                >
                  FOR BUY
                </Button>
              </div>
              <div className="card-res-home">
                <Button
                  className="btn-res-home"
                  onClick={() => nextpage("Rent")}
                >
                  FOR RENT
                </Button>
              </div>
            </div>
          </div>
        </FormItem>
    )
}

export default HomeMobile