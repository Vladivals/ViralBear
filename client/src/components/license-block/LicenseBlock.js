import React from "react";
import classNames from "classnames";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useStyles } from "./LicenseBlock.Styles";

const LicenseBlock = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <Grid container className={classNames(classes.marginTop)}>
      <Grid
        container
        item
        xs={10}
        className={classNames(classes.marginAuto, classes.centeredContent)}
      >
        <Grid xs={12} lg={5} item className={classes.marginAuto}>
          <img
            src="/assets/images/welcome.jpg"
            className={classes.img}
            alt=""
          />
        </Grid>
        <Grid
          container
          xs={12}
          lg={7}
          item
          className={classNames(
            classes.welcomeLicenseText,
            classes.marginAuto,
            classes.centeredText
          )}
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h5"
              className={classNames(classes.textUnderline, classes.uppercase)}
            >
              {t("welcome")}
            </Typography>
          </Grid>
          <Grid item className={classes.paddingTextWelcome}>
            <Typography variant="subtitle1">
              {t("welcomeDescription")}
              <Link className={classes.link} to="/aboutUs">
                {" "}
                {t("welcomeDescriptionLink")}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={10}
        className={classNames(
          classes.marginAuto,
          classes.centeredContent,
          classes.centeredText
        )}
      >
        <Grid
          container
          xs={12}
          lg={7}
          item
          className={classNames(classes.welcomeLicenseText, classes.marginAuto)}
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h5"
              className={classNames(classes.textUnderline, classes.uppercase)}
            >
              {t("licensing")}
            </Typography>
          </Grid>
          <Grid item className={classes.paddingTextWelcome}>
            <Typography variant="subtitle1">
              {t("licensingDescription")}
            </Typography>
          </Grid>
          <Grid>
            <Link to="/contactUs" className={classes.textDecoration}>
              <Button variant="contained" color="primary">
                <Typography variant="h5">{t("contactUs")}</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid xs={12} lg={5} item className={classes.marginAuto}>
          <video
            controls
            className={classes.video}
            src="/assets/videos/licensing.mp4"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LicenseBlock;
