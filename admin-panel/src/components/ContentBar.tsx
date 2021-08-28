import React from "react";
import {
  AppBar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faHome } from "@fortawesome/free-solid-svg-icons";

import { useStyles } from "./ContentBar.styles";

export default function ContentBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appBar}
      color="transparent"
      position="relative"
      elevation={0}
    >
      <div className={classes.barLeftItems}>
        <Typography variant="h5">Card Actions</Typography>
        <Typography className={classes.barDivider} variant="h5">
          {" | "}
        </Typography>
        <Typography variant="body2">
          <FontAwesomeIcon icon={faHome} />
          {` >> eCommerce >> Electronics`}
        </Typography>
      </div>
      <div>
        <IconButton
          className={classes.barConfigButton}
          color="inherit"
          size="small"
        >
          <FontAwesomeIcon icon={faCog} />
        </IconButton>
      </div>
    </AppBar>
  );
}
