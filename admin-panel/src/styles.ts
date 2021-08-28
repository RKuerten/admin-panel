import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  topIcon: {
    paddingRight: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectIcon: {
    color: "#606060",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  },
  appBarProfileFirst: {
    fontSize: "0.75rem",
  },
  appBarProfileSecond: {
    fontSize: "0.6rem",
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down("xs")]: {
      marginRight: 24,
    },
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(6) + 4,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  pagination: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));
