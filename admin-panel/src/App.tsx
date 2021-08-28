import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faHome } from "@fortawesome/free-solid-svg-icons";

import AppDrawer from "./components/Drawer";
import ContentBar from "./components/ContentBar";
import TopBar from "./components/TopBar";
import { useStyles } from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("all");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <ContentBar />
        <Container className={classes.container} maxWidth={false}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item xs={3}>
                <Typography variant="body2" gutterBottom>
                  Filters
                </Typography>
                <Paper className={classes.paper}>
                  <FormControl component="fieldset" margin="dense" size="small">
                    <FormLabel component="legend">Multi Range</FormLabel>
                    <RadioGroup
                      aria-label="price"
                      name="price1"
                      value={value}
                      onChange={handleChange}
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
                  <Divider />
                </Paper>
              </Grid>
              <Grid item xs={9}>
                <Paper className={classes.paper} />
              </Grid>
            </Grid>
          </Grid>
          <Box pt={4} className={classes.pagination}>
            <Pagination
              boundaryCount={smallScreen ? 1 : 3}
              color="primary"
              count={10}
              defaultPage={6}
              siblingCount={smallScreen ? 0 : 1}
            />
          </Box>
        </Container>
      </main>
    </div>
  );
}
