import React from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  NativeSelect,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderAll,
  faHeart,
  faSearch,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import product from "../assets/product.png";
import { useStyles } from "./Results.styles";

const products = [
  {
    name: "Apple Watch Series 4 GPS",
    brand: "Apple",
    price: 399,
    rating: "3.4",
  },
  {
    name: "JBL Speaker",
    brand: "JBL",
    price: 199,
    rating: null,
  },
  {
    name: "Apple iPhone X 128GB",
    brand: "Apple",
    price: 899,
    rating: null,
  },
  {
    name: "Beats Headphones",
    brand: "Beats",
    price: 459,
    rating: null,
  },
  {
    name: "Apple Watch Series 4 GPS",
    brand: "Apple",
    price: 2499,
    rating: null,
  },
];

export default function Results() {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={9} className={classes.wrapper}>
      <div className={classes.topWrapper}>
        <Typography variant="body2" gutterBottom style={{ fontWeight: 500 }}>
          7,618 results found in 5ms
        </Typography>
        <div className={classes.topLeftWrapper}>
          <Paper className={classes.selectWrapper}>
            <NativeSelect
              defaultValue={"default"}
              disableUnderline
              inputProps={{ "aria-label": "control" }}
              name="filter"
              variant="standard"
            >
              <option value={"default"}>Default</option>
              <option value={"highest"}>Highest Price</option>
              <option value={"lowest"}>Lowest Price</option>
            </NativeSelect>
          </Paper>
          <Paper className={classes.iconWrapper}>
            <IconButton
              className={classes.iconColor}
              color="secondary"
              size="small"
            >
              <FontAwesomeIcon icon={faBorderAll} />
            </IconButton>
          </Paper>
          <Paper className={classes.iconWrapper}>
            <IconButton
              className={classes.iconColor}
              color="secondary"
              size="small"
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Paper>
        </div>
      </div>
      <Paper className={classes.inputWrapper}>
        <InputBase
          className={classes.input}
          placeholder="Search here"
          inputProps={{ "aria-label": "search here" }}
        />
        <IconButton
          aria-label="search"
          className={classes.iconButton}
          size="small"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </IconButton>
      </Paper>
      {products.map((p, key) => {
        return (
          <Paper className={classes.product} key={key}>
            <div className={classes.productInfo}>
              <img
                alt={p.name}
                src={product}
                className={classes.productImage}
              />
              <div>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="caption">
                  By <strong>{p.brand}</strong>
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.productDescription}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </div>
            </div>
            <Divider
              orientation={smallScreen ? "horizontal" : "vertical"}
              flexItem={!smallScreen}
            />
            <div className={classes.productBuy}>
              <Button
                color="inherit"
                className={classes.rating}
                disableElevation
                endIcon={<FontAwesomeIcon icon={faStar} size="xs" />}
                size="small"
                style={{ opacity: p.rating ? 1 : 0 }}
                variant="contained"
              >
                {p.rating}
              </Button>
              <Typography
                align="center"
                variant="body1"
                style={{ fontWeight: 500 }}
              >
                {`$${p.price}`}
              </Typography>
              <Typography align="center" variant="caption">
                <FontAwesomeIcon icon={faShoppingCart} size="sm" />
                {" Free Shipping"}
              </Typography>
              <Button
                className={classes.productWishlist}
                startIcon={<FontAwesomeIcon icon={faHeart} />}
                variant="contained"
              >
                Wishlist
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<FontAwesomeIcon icon={faShoppingCart} />}
              >
                Add to Cart
              </Button>
            </div>
          </Paper>
        );
      })}
    </Grid>
  );
}
