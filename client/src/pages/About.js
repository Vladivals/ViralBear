import React from "react";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import { Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { useStyles } from "./About.Styles";
import PARTNERS from "../consts/partnersAboutUs";
import TEAMABOUTUS from "../consts/teamAboutUs";
import TEAMEDITORSABOUTUS from "../consts/teamEditorsAboutUs";
import TEAMRESEARCHERSABOUTUS from "../consts/teamResearchersAboutUs";

const About = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Container
        className={classNames(
          classes.flex,
          classes.centeredContent,
          classes.imageBackground
        )}
      >
        <Grid item container direction="column" className={classes.whiteText}>
          <Grid item container className={classes.padding}>
            <Grid
              xs={12}
              lg={6}
              item
              container
              className={classNames(
                classes.whatIs,
                classes.padding,
                classes.darkedBackground
              )}
              direction="column"
            >
              <Grid item className={classes.centeredText}>
                <Typography variant="h4" className={classes.textUnderline}>
                  {t("whatViralbear")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  className={classNames(
                    classes.paddingTop,
                    classes.centeredText
                  )}
                >
                  {t("whatViralbearDescription")}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              xs={12}
              lg={6}
              item
              container
              className={classNames(
                classes.howWork,
                classes.padding,
                classes.darkedBackground
              )}
              direction="column"
            >
              <Grid item className={classes.centeredText}>
                <Typography variant="h4" className={classes.textUnderline}>
                  {t("howItWork")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  className={classNames(
                    classes.paddingTop,
                    classes.centeredText
                  )}
                >
                  {t("howItWorkDescription")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
          item
          className={classNames(
            classes.brands,
            classes.whiteText,
            classes.darkedBackground,
            classes.padding
          )}
          container
          direction="column"
        >
          <Grid item>
            <Typography variant="h4" className={classes.textUnderline}>
              {t("ourPartners")}
            </Typography>
          </Grid>
        </Grid>
        </Grid>

        <Grid container justify="center">
          {PARTNERS.map((partner) => (
            <Grid
              item
              xs={12}
              lg={4}
              className={classes.paddingBrands}
              key={partner.name}
            >
              <Paper
                className={classNames(
                  classes.padding,
                  classes.paper,
                  classes.darkedBackground
                )}
              >
                <a href={partner.link}>
                  <img src={partner.src} height={60} alt="" />
                </a>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid
          item
          className={classNames(
            classes.brands,
            classes.whiteText,
            classes.darkedBackground,
            classes.padding
          )}
          container
          direction="column"
        >
          <Grid item>
            <Typography variant="h4" className={classes.textUnderline}>
              {t("meetOurTeam")}
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="center">
          {TEAMABOUTUS.map((person) => (
            <Grid
              item
              xs={12}
              lg={4}
              className={classes.paddingBrands}
              key={person.name}
            >
              <Paper
                className={classNames(
                  classes.padding,
                  classes.paper,
                  classes.darkedBackground
                )}
              >
                <Typography variant="h4" className={classes.whiteTextAndTitle}>
                  {person.title}
                </Typography>

                <a href={person.link}>
                  <img
                    src={person.src}
                    height={80}
                    className={classes.imgRound}
                    alt=""
                  />
                </a>

                <Typography variant="h4" className={classes.whiteTextAndName}>
                  {person.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container justify="center">
          {TEAMEDITORSABOUTUS.map((person) => (
            <Grid
              item
              xs={12}
              lg={4}
              className={classes.paddingBrands}
              key={person.name}
            >
              <Paper
                className={classNames(
                  classes.padding,
                  classes.paper,
                  classes.darkedBackground
                )}
              >
                <Typography variant="h4" className={classes.whiteTextAndTitle}>
                  {person.title}
                </Typography>

                <a href={person.link}>
                  <img
                    src={person.src}
                    height={80}
                    className={classes.imgRound}
                    alt=""
                  />
                </a>

                <Typography variant="h4" className={classes.whiteTextAndName}>
                  {person.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container justify="center">
          {TEAMRESEARCHERSABOUTUS.map((person) => (
            <Grid
              item
              xs={12}
              lg={4}
              className={classes.paddingBrands}
              key={person.name}
            >
              <Paper
                className={classNames(
                  classes.padding,
                  classes.paper,
                  classes.darkedBackground
                )}
              >
                <Typography variant="h4" className={classes.whiteTextAndTitle}>
                  {person.title}
                </Typography>

                <a href={person.link}>
                  <img
                    src={person.src}
                    height={80}
                    className={classes.imgRound}
                    alt=""
                  />
                </a>

                <Typography variant="h4" className={classes.whiteTextAndName}>
                  {person.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid
          item
          className={classNames(
            classes.brands,
            classes.whiteText,
            classes.darkedBackground,
            classes.padding
          )}
          container
          direction="column"
        >
          <Grid item>
            <Typography variant="h4" className={classes.textUnderline} >
              <span >
                  {t("joinOurTeam")}
              </span>
              </Typography>
              </Grid>
              <Grid item>

              <Typography variant="h6" >

              <span >
                <a className={classes.whiteText} href="mailto:licensing@viralbear.media">
                  {t("CV")}
                </a>
              </span>
              </Typography>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withRouter(About);
