import React from "react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import AppDrawer from "./components/Drawer";
import ContentBar from "./components/ContentBar";
import Filters from "./components/Filters";
import TopBar from "./components/TopBar";
import { useStyles } from "./styles";
import Results from "./components/Results";

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

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
              <Filters />
              <Results />
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
