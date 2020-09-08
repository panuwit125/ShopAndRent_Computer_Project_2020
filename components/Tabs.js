import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  updateNavbarres,
  updateTypeBland,
} from "../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isLoading, setisLoading] = useState(false);
  const { TypeBland, Navbarres } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (props.page === "Mobile") {
    return (
      <Paper className={classes.root} style={{ borderRadius: "20px" }}>
        <Tabs
          value={Navbarres}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{ borderRadius: "20px" }}
        >
          <Tab
            label="ACER"
            onClick={() => {
              dispatch(updateTypeBland("ACER"));
              dispatch(updateNavbarres(0));
              props.loading(false);
            }}
          />
          <Tab
            label="DELL"
            onClick={() => {
              dispatch(updateTypeBland("DELL"));
              dispatch(updateNavbarres(1));
              props.loading(false);
            }}
          />
          <Tab
            label="LENOVO"
            onClick={() => {
              dispatch(updateTypeBland("LENOVO"));
              dispatch(updateNavbarres(2));
              props.loading(false);
            }}
          />
        </Tabs>
      </Paper>
    );
  } else {
    return (
      <Paper className={classes.root} style={{ borderRadius: "20px" }}>
        <Tabs
          value={Navbarres}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{ borderRadius: "20px" }}
        >
          <Tab
            label="ACER"
            onClick={() => {
              dispatch(updateTypeBland("ACER"));
              dispatch(updateNavbarres(0));
              props.loading(false);
            }}
          />
          <Tab
            label="DELL"
            onClick={() => {
              dispatch(updateTypeBland("DELL"));
              dispatch(updateNavbarres(1));
              props.loading(false);
            }}
          />
          <Tab
            label="LENOVO"
            onClick={() => {
              dispatch(updateTypeBland("LENOVO"));
              dispatch(updateNavbarres(2));
              props.loading(false);
            }}
          />
        </Tabs>
      </Paper>
    );
  }
}
