import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { updateNavbarres, updateTypeBland } from "../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";
import AppBar from '@material-ui/core/AppBar';

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
                  dispatch(updateNavbarres(index));
                }}
              />
            );
          })}
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
