import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inherit",
    },
  },
  appBarIconList: {
    paddingTop: 4,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBarProfileItems: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: 0,
    },
  },
  appBarIcon: {
    marginRight: 12,
  },
  appBarWrapper: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  appBarInput: {
    alignSelf: "center",
    maxWidth: 120,
  },
  appBarInputOption: {
    color: theme.palette.primary.dark,
  },
  appBarAvatar: {
    marginTop: 0,
    minWidth: 40,
  },
  appBarProfileFirst: {
    fontSize: "0.75rem",
  },
  appBarProfileSecond: {
    fontSize: "0.6rem",
  },
  menuButton: {
    marginRight: 16,
  },
  menuButtonHidden: {
    display: "none",
  },
}));
