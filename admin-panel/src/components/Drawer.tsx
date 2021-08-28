import React from "react";
import clsx from "clsx";
import {
  Divider,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  NativeSelect,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { useStyles } from "../styles";
import { MainListItems, SecondaryListItems, ThirdListItems } from "./ListItems";

interface Props {
  open: boolean;
  handleDrawerClose: () => void;
}

export default function AppDrawer({ open, handleDrawerClose }: Props) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Logo style={{ maxWidth: 200 }} />
        <IconButton onClick={handleDrawerClose} className={classes.topIcon}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          defaultValue={"dashboard"}
          disableUnderline
          inputProps={{ "aria-label": "control", style: { marginLeft: 3 } }}
          name="control"
          variant="outlined"
          startAdornment={
            <InputAdornment position="start">
              <FontAwesomeIcon
                icon={faHome}
                className={classes.selectIcon}
                style={{ width: 24 }}
              />
            </InputAdornment>
          }
        >
          <option value={"dashboard"}>Dashboard</option>
          <option value={"account"}>Account</option>
        </NativeSelect>
        <ListItem disableGutters button>
          <ListItemIcon style={{ minWidth: 36 }}>
            <FontAwesomeIcon icon={faCircle} style={{ width: 24 }} />
          </ListItemIcon>
          <ListItemText primary="eCommerce" />
        </ListItem>
      </FormControl>
      <Divider />
      <List>
        <MainListItems open={open} />
      </List>
      <Divider />
      <List>
        <SecondaryListItems open={open} />
      </List>
      <Divider />
      <List>
        <ThirdListItems open={open} />
      </List>
    </Drawer>
  );
}
