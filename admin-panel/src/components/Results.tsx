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

export default function Results() {
  const classes = useStyles();

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
              <option value={"relevance"}>Relevance</option>
              <option value={"lowest"}>Lowest Price</option>
            </NativeSelect>
          </Paper>
          <Paper className={classes.iconWrapper}>
            <IconButton color="secondary" size="small">
              <FontAwesomeIcon icon={faBorderAll} />
            </IconButton>
          </Paper>
          <Paper className={classes.iconWrapper}>
            <IconButton color="secondary" size="small">
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
      <Paper className={classes.product}>
        <div className={classes.productInfo}>
          <img
            alt="Apple Watch"
            src={product}
            className={classes.productImage}
          />
          <div>
            <Typography variant="h6">Apple Watch Series 4 GPS</Typography>
            <Typography variant="caption">
              By <strong>Apple</strong>
            </Typography>
            <Typography variant="body2" className={classes.productDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={classes.productBuy}>
          <Button
            className={classes.rating}
            color="default"
            disableElevation
            endIcon={<FontAwesomeIcon icon={faStar} size="xs" />}
            size="small"
            variant="contained"
          >
            3.4
          </Button>
          <Typography
            align="center"
            variant="body1"
            style={{ fontWeight: 500 }}
          >
            $399
          </Typography>
          <Typography align="center" variant="caption">
            Free Shipping
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon={faHeart} />}
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
    </Grid>
  );
}
