import React from 'react'
import HeaderNavbar from "../../HeaderNavbar";
import { Form, Button } from "antd";
import img1 from '../../../public/BUY.gif'
import img2 from '../../../public/RENT.jpg'
const FormItem = Form.Item;

function HomeMobile({nextpage}) {
    return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <HeaderNavbar page={"Home"} />
            <div className="br-body-res">
              <div className="card-res-home">
                <img src={img1} style={{width:"100%"}} />
                <Button
                  className="btn-res-home"
                  onClick={() => nextpage("Shop")}
                >
                  <h4 className="btn-res-home-text">FOR BUY</h4>
                </Button>
              </div>
              <div className="card-res-home">
                <img src={img2} style={{width:"100%"}} />
                <Button
                  className="btn-res-home"
                  onClick={() => nextpage("Rent")}
                >
                  <h4 className="btn-res-home-text">FOR RENT</h4>
                </Button>
              </div>
            </div>
          </div>
        </FormItem>
    )
}

export default HomeMobile