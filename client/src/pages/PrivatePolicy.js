import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

import { useStyles } from "./PrivatePolicy.Styles";

const PrivatePolicy = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container className={classes.paddingTopBottom}>
      <Grid
        item
        container
        xs={10}
        direction="column"
        className={classNames(classes.marginAuto, classes.paddingTopBottom)}
      >
        <Paper className={classes.paddingTopBottom}>
          <Grid
            item
            xs={8}
            className={classNames(
              classes.flex,
              classes.centeredContent,
              classes.marginAuto
            )}
          >
            <Typography variant="h4">{t("privacyStatement")}</Typography>
          </Grid>
          <Grid item xs={8} className={classes.marginAuto}>
            <Typography variant="h5" gutterBottom className={classes.uppercase}>
              {t("privacyPolicy")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("privacyPolicyText1")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("privacyPolicyText2")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("privacyPolicyText3")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("privacyPolicyText4")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("privacyPolicyText5")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("privacyPolicyText6")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withRouter(PrivatePolicy);
