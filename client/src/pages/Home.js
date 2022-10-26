import React from "react";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import PartnersList from "../components/partners-list/PartnersList";
import LicenseBlock from "../components/license-block/LicenseBlock";
import AdvantagesBlock from "../components/advantages-block/AdvantagesBlock";
import VideoBlock from "../components/video-block/VideoBlock";
import useWindowDimensions from "../utils/windowDimensions";

import { useStyles } from "./Home.Styles";


const Home = () => {
  const { width } = useWindowDimensions();
  const classes = useStyles();

 
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container
          className={classNames(
            classes.videoBackground,
            classes.flex,
            classes.centeredContent,
            {
              [classes.columnDirection]: width < 1280,
            }
          )}
        >
          <Typography
            variant="h4"
            className={classNames(classes.whiteText, {
              [classes.textAlignCenter]: width < 1280,
            })}
          >
            {t("submitVideoDescription")}
          </Typography>
          <Link className={classes.paddedLeft} to="/submitVideo">
            <Button variant="contained" color="secondary">
              <Typography variant="h4">{t("submitVideo")}!</Typography>
            </Button>
          </Link>
        </Container>
      </Grid>
      <Grid item xs={false} lg={4} />
      <Grid
        container
        item
        xs={12}
        className={classNames(classes.flex, classes.centeredContent)}
      >
        <PartnersList />
      </Grid>

      <Grid container item xs={12} lg={12}>
        <LicenseBlock />
      </Grid>

      <Grid container item xs={12} lg={12}>
        <AdvantagesBlock />
      </Grid>

      <Grid container item xs={12} lg={12}>
        <VideoBlock />
      </Grid>
    </Grid>
  );
};

export default withRouter(Home);
