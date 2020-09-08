import DehazeIcon from "@material-ui/icons/Dehaze";
import { useEffect, useState } from "react";

const HeaderManage = ({ setShow, user }) => {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    if (user) {
      setisLoading(true);
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    return (
      <div className="br-header">
        <div>
          <DehazeIcon
            style={{ color: "white", opacity: "1" }}
            onClick={() => setShow(200)}
          />
        </div>
        <div>
          <h1 className="br-header-font">{user.user_name}</h1>
          <h1 className="br-header-font">MANAGE</h1>
        </div>
        <div>
          <DehazeIcon style={{ opacity: "0" }} />
        </div>
      </div>
    );
  }
};

export default HeaderManage;
