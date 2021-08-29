import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "calc(100vw - 145px)",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "calc(100vw - 45px)",
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
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
  iconColor: {
    "&:hover": {
      color: "white",
    },
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
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
    alignSelf: "flex-end",
    backgroundColor: theme.palette.rating.main,
    color: theme.palette.primary.dark,
    margin: theme.spacing(0, 1, 3),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.rating.main,
    },
  },
  productWishlist: {
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
}));
