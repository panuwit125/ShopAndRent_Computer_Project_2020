import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { updateNavbarres, updateTypeBland } from "../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs({ loading, bland, page }) {
  const classes = useStyles();
  const [isLoading, setisLoading] = useState(false);
  const { TypeBland, Navbarres } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  if (page === "Mobile") {
    return (
      <Paper className={classes.root} style={{ borderRadius: "20px" }}>
        <Tabs
          value={Navbarres}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{ borderRadius: "20px" }}
        >
          {bland.map((data, index) => {
            return (
              <Tab
                key={index}
                label={data.name_bland}
                onClick={() => {
                  //dispatch(updateTypeBland("ACER"));
                  dispatch(updateNavbarres(index));
                }}
              />
            );
          })}

          {/*<Tab
            label="DELL"
            onClick={() => {
              //dispatch(updateTypeBland("DELL"));
              dispatch(updateNavbarres(1));
            }}
          />
          <Tab
            label="LENOVO"
            onClick={() => {
              //dispatch(updateTypeBland("LENOVO"));
              dispatch(updateNavbarres(2));
            }}
          />*/}
          </Tabs>
      </Paper>
    );
  } else {
    return (
      <Paper className={classes.root} style={{ borderRadius: "20px" }}>
        <Tabs
          value={Navbarres}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{ borderRadius: "20px" }}
        >
          {bland.map((data, index) => {
            return (
              <Tab
                key={index}
                label={data.name_bland}
                onClick={() => {
                  //dispatch(updateTypeBland("ACER"));
                  dispatch(updateNavbarres(index));
                }}
              />
            );
          })}
        </Tabs>
      </Paper>
    );
  }
}
