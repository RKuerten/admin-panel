import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "calc(100vw - 65px)",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "calc(100vw - 45px)",
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
  },
  filterTitle: {
    color: theme.palette.primary.main,
    fontSize: "1.1rem",
    fontWeight: 600,
    paddingBottom: theme.spacing(1),
  },
  divider: {
    marginBlock: theme.spacing(2),
  },
  sliderTitles: {
    display: "flex",
    justifyContent: "space-between",
    marginBlock: theme.spacing(1),
  },
  slider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    width: "95%",
  },
  checkBoxWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
  },
  starsWrapper: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  starsIconsWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: theme.spacing(1),
  },
  starsText: {
    paddingRight: theme.spacing(1),
  },
}));
