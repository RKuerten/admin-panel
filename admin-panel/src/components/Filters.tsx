import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  useTheme,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./Filters.styles";
import { brands, categories } from "./Filters.items";

export default function Filters() {
  const classes = useStyles();
  const theme = useTheme();
  const [radioValue, setRadioValue] = React.useState("all");
  const [sliderValue, setSliderValue] = React.useState<number[]>([1.99, 4098]);
  const [accordion, setAccordion] = React.useState(true);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setSliderValue(newValue as number[]);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleAccordionChange = (
    event: React.ChangeEvent<{}>,
    expanded: boolean
  ) => {
    setAccordion(expanded);
  };

  return (
    <Grid item xs={3} className={classes.wrapper}>
      <Accordion
        defaultExpanded
        expanded={accordion}
        onChange={handleAccordionChange}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body2" gutterBottom style={{ fontWeight: 600 }}>
            Filters
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.paper}>
          <Divider style={{ opacity: 0 }} />
          <FormControl component="fieldset" margin="dense" size="small">
            <FormLabel
              component="legend"
              color="secondary"
              className={classes.filterTitle}
            >
              Multi Range
            </FormLabel>
            <RadioGroup
              aria-label="price"
              name="price1"
              value={radioValue}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="10"
                control={<Radio size="small" />}
                label="$10"
              />
              <FormControlLabel
                value="10-100"
                control={<Radio size="small" />}
                label="$10-100"
              />
              <FormControlLabel
                value="100-500"
                control={<Radio size="small" />}
                label="$100-$500"
              />
              <FormControlLabel
                value="500"
                control={<Radio size="small" />}
                label="$500"
              />
              <FormControlLabel
                value="all"
                control={<Radio size="small" />}
                label="All"
              />
            </RadioGroup>
          </FormControl>
          <Divider className={classes.divider} />
          <FormControl margin="dense" size="small">
            <div className={classes.sliderTitles}>
              <FormLabel color="secondary" className={classes.filterTitle}>
                Slider
              </FormLabel>
              <FormLabel color="secondary" className={classes.filterTitle}>
                {`${sliderValue[0]} – ${sliderValue[1]}`}
              </FormLabel>
            </div>
            <Slider
              aria-labelledby="range-slider"
              className={classes.slider}
              color="secondary"
              onChange={handleSliderChange}
              min={1.99}
              max={5000}
              value={sliderValue}
              valueLabelDisplay="off"
            />
          </FormControl>
          <Divider className={classes.divider} />
          <FormControl margin="dense" size="small">
            <FormLabel color="secondary" className={classes.filterTitle}>
              Category
            </FormLabel>
            {categories.map((e, key) => {
              return (
                <div className={classes.checkBoxWrapper} key={key}>
                  <FormControlLabel
                    control={<Checkbox name={e.name} />}
                    label={e.first}
                  />
                  <Typography variant="body2">{e.second}</Typography>
                </div>
              );
            })}
          </FormControl>
          <Divider className={classes.divider} />
          <FormControl margin="dense" size="small">
            <FormLabel color="secondary" className={classes.filterTitle}>
              Brand
            </FormLabel>
            {brands.map((e, key) => {
              return (
                <div className={classes.checkBoxWrapper} key={key}>
                  <FormControlLabel
                    control={<Checkbox name={e.first} />}
                    label={e.first}
                  />
                  <Typography variant="body2">{e.second}</Typography>
                </div>
              );
            })}
          </FormControl>
          <Divider className={classes.divider} />
          <FormControl margin="dense" size="small">
            <FormLabel color="secondary" className={classes.filterTitle}>
              Rating
            </FormLabel>
            <div className={classes.ratingWrapper}>
              <div className={classes.starsWrapper}>
                <div className={classes.starsIconsWrapper}>
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                </div>
                <Typography variant="body1" className={classes.starsText}>
                  {"& Up"}
                </Typography>
              </div>
              <Typography variant="body2">8500</Typography>
            </div>
            <div className={classes.ratingWrapper}>
              <div className={classes.starsWrapper}>
                <div className={classes.starsIconsWrapper}>
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarBorderIcon
                    style={{ color: theme.palette.rating.main }}
                  />
                </div>
                <Typography variant="body1" className={classes.starsText}>
                  {"& Up"}
                </Typography>
              </div>
              <Typography variant="body2">3250</Typography>
            </div>
            <div className={classes.ratingWrapper}>
              <div className={classes.starsWrapper}>
                <div className={classes.starsIconsWrapper}>
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarIcon style={{ color: theme.palette.rating.main }} />
                  <StarBorderIcon
                    style={{ color: theme.palette.rating.main }}
                  />
                  <StarBorderIcon
                    style={{ color: theme.palette.rating.main }}
                  />
                </div>
                <Typography variant="body1" className={classes.starsText}>
                  {"& Up"}
                </Typography>
              </div>
              <Typography variant="body2">1120</Typography>
            </div>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Button
        color="primary"
        fullWidth
        style={{ marginTop: !accordion ? 16 : 0 }}
        variant="contained"
      >
        Clear All Filters
      </Button>
    </Grid>
  );
}
