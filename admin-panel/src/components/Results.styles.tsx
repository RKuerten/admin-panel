import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      minWidth: 400,
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: `calc(100vw - 45px)`,
    },
  },
  topWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(1),
  },
  topLeftWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  selectWrapper: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  iconWrapper: {
    marginLeft: theme.spacing(2),
    padding: 2,
  },
  inputWrapper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  product: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  productInfo: {
    flex: 0.8,
    display: "flex",
    padding: theme.spacing(2),
  },
  productImage: {
    maxHeight: 210,
    maxWidth: 210,
    marginRight: theme.spacing(2),
  },
  productDescription: {
    paddingBlock: theme.spacing(2),
  },
  productBuy: {
    flex: 0.2,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  rating: {
    margin: theme.spacing(0, 1, 3),
    alignSelf: "flex-end",
  },
}));
