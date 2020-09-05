import DehazeIcon from "@material-ui/icons/Dehaze";

const HeaderManage = ({setShow}) => {
  return (
    <div className="br-header">
      <div>
        <DehazeIcon
          style={{ color: "white", opacity: "1" }}
          onClick={() => setShow(200)}
        />
      </div>
      <div>
        <h1 className="br-header-font">JIB ITSHOP</h1>
        <h1 className="br-header-font">MANAGE</h1>
      </div>
      <div>
        <DehazeIcon style={{ opacity: "0" }} />
      </div>
    </div>
  );
};

export default HeaderManage;
