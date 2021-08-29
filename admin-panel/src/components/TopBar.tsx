import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  NativeSelect,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCheckSquare,
  faCommentAlt,
  faEnvelope,
  faLanguage,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@material-ui/icons/Menu";

import profile from "../assets/profile.png";
import { useStyles } from "./TopBar.styles";

interface Props {
  open: boolean;
  handleDrawerOpen: () => void;
}

export default function TopBar({ open, handleDrawerOpen }: Props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorSec, setAnchorSec] = React.useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorSec(event.currentTarget);
  };
  const handleAvatarClose = () => {
    setAnchorSec(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.appBarWrapper}>
          <div className={classes.appBarMenu}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              Activities
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCheckSquare} />
                </ListItemIcon>
                <ListItemText primary="To-do" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCommentAlt} />
                </ListItemIcon>
                <ListItemText primary="Chats" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Badge badgeContent={2} color="secondary">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Emails" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faCalendar} />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faStar} />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </MenuItem>
            </Menu>
          </div>
          <div className={classes.appBarIconList}>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
            >
              <FontAwesomeIcon icon={faCheckSquare} />
            </IconButton>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
            >
              <FontAwesomeIcon icon={faCommentAlt} />
            </IconButton>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
            >
              <Badge badgeContent={2} color="secondary">
                <FontAwesomeIcon icon={faEnvelope} />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
            >
              <FontAwesomeIcon icon={faCalendar} />
            </IconButton>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
            >
              <FontAwesomeIcon icon={faStar} />
            </IconButton>
          </div>
          <div className={classes.appBarProfileItems}>
            <FormControl className={classes.appBarInput}>
              <NativeSelect
                defaultValue={"dashboard"}
                disableUnderline
                inputProps={{
                  "aria-label": "control",
                  style: { marginLeft: 3, color: "white" },
                }}
                IconComponent={"div"}
                name="control"
                variant="outlined"
              >
                <option
                  className={classes.appBarInputOption}
                  value={"dashboard"}
                >
                  English
                </option>
                <option className={classes.appBarInputOption} value={"account"}>
                  Português
                </option>
              </NativeSelect>
            </FormControl>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
              style={{ paddingTop: 4, paddingLeft: 8 }}
            >
              <Badge badgeContent={4} color="secondary">
                <FontAwesomeIcon icon={faBell} />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.appBarIcon}
              color="inherit"
              size="small"
              style={{ paddingTop: 4, paddingLeft: 8 }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </IconButton>
            <List>
              <ListItem alignItems="flex-start" dense dir="rtl">
                <ListItemAvatar className={classes.appBarAvatar}>
                  <Avatar alt="Your picture" src={profile} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      className={classes.appBarProfileFirst}
                      color="inherit"
                      variant="caption"
                    >
                      John Doe
                    </Typography>
                  }
                  secondary={
                    <Typography
                      className={classes.appBarProfileSecond}
                      component="p"
                      color="inherit"
                      variant="caption"
                    >
                      Available
                    </Typography>
                  }
                  style={{ margin: 0 }}
                />
              </ListItem>
            </List>
          </div>
          <div className={classes.appBarMenu}>
            <ListItem button={true} onClick={handleAvatarClick}>
              <ListItemAvatar className={classes.appBarAvatar}>
                <Avatar alt="Your picture" src={profile} />
              </ListItemAvatar>
            </ListItem>
            <Menu
              id="avatar-menu"
              anchorEl={anchorSec}
              keepMounted
              open={Boolean(anchorSec)}
              onClose={handleAvatarClose}
            >
              <MenuItem onClick={handleAvatarClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faLanguage} />
                </ListItemIcon>
                <ListItemText primary="Language" />
              </MenuItem>
              <MenuItem onClick={handleAvatarClose}>
                <ListItemIcon>
                  <Badge badgeContent={4} color="secondary">
                    <FontAwesomeIcon icon={faBell} />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </MenuItem>
              <MenuItem onClick={handleAvatarClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faSearch} />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
