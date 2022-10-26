import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

import { useStyles } from "./PermissionNonExclusiveRus.Styles";

const PermissionNonExclusiveRus = () => {
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
            <Typography variant="h4" gutterBottom>
              {t("viralBearContentAgreementRus")}
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.marginAuto} >
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus1")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus2")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus3")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus4")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus5")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus6")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus7")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus8")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("nonExclusiveAgreementRus9")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withRouter(PermissionNonExclusiveRus);
