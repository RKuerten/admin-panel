import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  NativeSelect,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import MenuIcon from "@material-ui/icons/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCheckSquare,
  faCommentAlt,
  faEnvelope,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Chart from "./components/Chart";
import Deposits from "./components/Deposits";
import Orders from "./components/Orders";
import AppDrawer from "./components/Drawer";
import { useStyles } from "./styles";
import profile from "./assets/profile.png";

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
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
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
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
            <div style={{ display: "flex" }}>
              <FormControl className={classes.appBarInput}>
                <NativeSelect
                  //className={classes.selectEmpty}
                  defaultValue={"dashboard"}
                  disableUnderline
                  inputProps={{
                    "aria-label": "control",
                    style: { marginLeft: 3, color: "white" },
                  }}
                  IconComponent={React.Fragment}
                  name="control"
                  variant="outlined"
                >
                  <option
                    className={classes.appBarInputOption}
                    value={"dashboard"}
                  >
                    English
                  </option>
                  <option
                    className={classes.appBarInputOption}
                    value={"account"}
                  >
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
          </div>
        </Toolbar>
      </AppBar>
      <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4} className={classes.pagination}>
            <Pagination
              boundaryCount={3}
              count={10}
              defaultPage={6}
              color="primary"
            />
          </Box>
        </Container>
      </main>
    </div>
  );
}
