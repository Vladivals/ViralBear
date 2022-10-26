import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YoutubeIcon from "@material-ui/icons/YouTube";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";

import useWindowDimensions from "../../utils/windowDimensions";

import { useStyles } from "./Footer.Styles.js";

const Footer = () => {
  const { width } = useWindowDimensions();
  const classes = useStyles();

  const { t } = useTranslation();

  return width < 1280 ? (
    <Grid className={classes.mainGrid}>
      <Grid
        xs={10}
        className={classNames(
          classes.marginAuto,
          classes.topBlock,
          classes.textAlignCenter
        )}
      >
        <Grid xs={12} item container direction="column">
          <Grid
            item
            className={classNames(classes.flex, classes.centeredContent)}
          >
            <Typography
              variant="h5"
              className={classNames(classes.underLineTwo, classes.uppercase)}
            >
              {t("contactUs")}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.paddingTopBottom}
          >
            <Grid
              item
              className={classNames(
                classes.flex,
                classes.paddingTopBottom,
                classes.centeredContent
              )}
            >
              <MailIcon className={classes.paddingRightLeft} fontSize="large" />
              <Typography
                variant="subtitle1"
                className={classes.centeredVertical}
              >
                Licensing@viralbear.media
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12} item container className={classes.centeredContent}>
          <Grid
            item
            className={classNames(classes.flex, classes.centeredContent)}
          >
            <Typography
              variant="h5"
              className={classNames(classes.underLineTwo, classes.uppercase)}
            >
              {t("otherItems")}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            className={classNames(
              classes.paddingTopBottom,
              classes.flex,
              classes.directionColumn,
              classes.centeredContent
            )}
          >
            <Typography variant="subtitle1" className={classes.underLineOne}>
              <Link className={classes.link} to="/privatePolicy">
                {t("privacyPolicy")}
              </Link>
            </Typography>

            <Typography variant="subtitle1" className={classes.underLineOne}>
              <Link className={classes.link} to="/termsOfUse">
                {t("termsOfUse")}
              </Link>
            </Typography>

            <Typography variant="subtitle1" className={classes.underLineOne}>
              <Link className={classes.link} to="/contactUs">
                {t("contactUs")}
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
          classes.paddingTopBottom,
          classes.textAlignCenter
        )}
      >
        <Typography className={classes.marginAuto} variant="subtitle1">
          © {t("rights")}
        </Typography>
        <Grid
          xs={12}
          item
          className={classNames(classes.centeredContent, classes.flex)}
        >
          <IconButton className={classes.link}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton className={classes.link}>
            <YoutubeIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid container className={classes.mainGrid}>
      <Grid
        container
        item
        xs={10}
        className={classNames(classes.marginAuto, classes.topBlock)}
      >
        <Grid xs={7} item container direction="column">
          <Grid item className={classNames(classes.flex)}>
            <Typography
              variant="h5"
              className={classNames(classes.underLineTwo, classes.uppercase)}
            >
              {t("contactUs")}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.paddingTopBottom}
          >
            <Grid
              item
              className={classNames(classes.flex, classes.paddingTopBottom)}
            >
              <MailIcon className={classes.paddingRightLeft} fontSize="large" />
              <Typography
                variant="subtitle1"
                className={classes.centeredVertical}
              >
                Licensing@viralbear.media
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={5} container className={classes.endAlignedContent}>
          <Grid item className={classNames(classes.flex)}>
            <Typography
              variant="h5"
              className={classNames(classes.underLineTwo, classes.uppercase)}
            >
              {t("otherItems")}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className={classNames(
              classes.paddingTopBottom,
              classes.textAlignRight
            )}
          >
            <Typography variant="subtitle1" className={classes.underLineOne}>
              <Link className={classes.link} to="/privatePolicy">
                {t("privacyPolicy")}
              </Link>
            </Typography>

            <Typography variant="subtitle1" className={classes.underLineOne}>
              <Link className={classes.link} to="/termsOfUse">
                {t("termsOfUse")}
              </Link>
            </Typography>

            <Typography variant="subtitle1" className={classes.underLineOne}>
              <Link className={classes.link} to="/contactUs">
                {t("contactUs")}
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
          classes.paddingTopBottom,
          classes.centeredContent
        )}
      >
        <Grid xs={5} item>
          <Typography variant="subtitle1">© {t("rights")}</Typography>
        </Grid>
        <Grid xs={3} item className={classes.marginAuto}>
          <img src="" className={classes.img} alt="" />
        </Grid>
        <Grid
          xs={4}
          item
          className={classNames(classes.endAlignedContent, classes.flex)}
        >
          <IconButton href={'https://www.instagram.com/viralbearu'} className={classes.link}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton href={'https://youtube.com/viralbearrr'} className={classes.link}>
            <YoutubeIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
