import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Divider, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

import { useStyles } from "./TermsOfUsePayment.Styles";

const TermsOfUsePayment = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { cost } = props;

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
            <Typography variant="h4">{t("termsOfUse")}</Typography>
          </Grid>
          <Grid item xs={8} className={classes.marginAuto}>
            <Typography variant="body1" gutterBottom>
              {t("prelicense")}
            </Typography>

            <Typography variant="h6" gutterBottom className={classes.uppercase}>
              {t("guarantees")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("firstGuarantee")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("secondGuarantee")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("thridGuarantee")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("fourthGuarantee")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("fifthGuarantee")}
            </Typography>

            <Typography variant="h6" gutterBottom className={classes.uppercase}>
              {t("theRightsYouGrantUs")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("theRightsYouGrantUsText1")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("theRightsYouGrantUsText2")}
            </Typography>

            <Typography variant="body1" gutterBottom>
              {t("theRightsYouGrantUsPaymentText1")}
              {cost}
              {t("theRightsYouGrantUsPaymentText2")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("theRightsYouGrantUsPaymentText3")}
            </Typography>

            <Typography variant="body1" gutterBottom>
              {t("theRightsYouGrantUsText3")}
            </Typography>

            <Typography variant="h6" gutterBottom className={classes.uppercase}>
              {t("responsibility")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("responsibilityText")}
            </Typography>

            <Typography variant="h6" gutterBottom className={classes.uppercase}>
              {t("terminationOfTheAgreement")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("terminationOfTheAgreementText1")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("terminationOfTheAgreementText2")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("terminationOfTheAgreementText3")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("terminationOfTheAgreementText4")}
            </Typography>

            <Typography variant="h6" gutterBottom className={classes.uppercase}>
              {t("disputeResolution")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("disputeResolutionText")}
            </Typography>

            <Typography variant="h6" gutterBottom className={classes.uppercase}>
              {t("confidentiality")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("confidentialityText")}
            </Typography>

            <Divider />

            <Typography variant="caption" display="block" gutterBottom>
              {t("subtext1")}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {t("subtext2")}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

TermsOfUsePayment.propTypes = {
  cost: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cost: state.videoSubmitting.cost,
});

export default connect(mapStateToProps)(withRouter(TermsOfUsePayment));
