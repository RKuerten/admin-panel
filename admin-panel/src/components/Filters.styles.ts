import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  },
  starsText: {
    paddingLeft: theme.spacing(1),
  },
}));
