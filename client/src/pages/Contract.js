import React, { useEffect } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { Divider, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

import { useStyles } from "./Contract.Styles";
import SignatureCanvas from "react-signature-canvas";

const Contract = ({ location: { pathname } }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const signaturePad = React.useRef();

  const { cost, date, email, last_name, name, signature, video_link } =
    JSON.parse(pathname.slice(10));

  useEffect(() => {
    signaturePad.current.fromData([...signature]);
  }, [signaturePad]);

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
            <Typography variant="h4">LICENSE AGREEMENT</Typography>
            
          </Grid>
          
          <br></br>
          <Grid container item xs={8} className={classes.marginAuto}>
            <Typography variant="body1" gutterBottom>
              {t("prelicense")}
            </Typography>

            <div></div>
            

            <Grid container item xs={12} className={classes.infoBlock}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Parties
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                {`Video copyright holder (licensor): ${name} ${last_name}`}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom>
                  {`${t("email")}: ${email}`}
                </Typography>
              </Grid>
              <Typography variant="body1" gutterBottom>
                Video exclusive user (licensee): LLC «VIRALBEAR»
              </Typography>
            </Grid>

            <Grid container item xs={12} className={classes.infoBlock}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Subject
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                {`Link: ${video_link}`}
                  
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                {`Date: ${new Date(date).toDateString()}`}
                </Typography>
              </Grid>
            </Grid>

            {cost == 0 ? (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
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

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("theRightsYouGrantUs")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("theRightsYouGrantUsText1")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("theRightsYouGrantUsText2")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("theRightsYouGrantUsText3")}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("responsibility")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("responsibilityText")}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
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

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("disputeResolution")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("disputeResolutionText")}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("confidentiality")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("confidentialityText")}
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
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

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
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

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("responsibility")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("responsibilityText")}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
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

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("disputeResolution")}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("disputeResolutionText")}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.uppercase}
                >
                  {t("confidentiality")}
                </Typography>

                <Typography variant="body1" gutterBottom>
                  {t("confidentialityText")}
                </Typography>



              </>
            )}

            <Grid container item xs={12} className={classes.infoBlock}>
              <Grid item xs={12}>

                <Divider />
                <Typography variant="caption" display="block" gutterBottom>
                  {t("subtext1")}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {t("subtext2")}
                </Typography>

                <br></br>

                <Typography variant="h6" gutterBottom>
                  AGREED AND ACCEPTED:
                </Typography>
              </Grid>
              <Grid container item xs={6} className={classes.infoBlock}>
                <Typography variant="h6" gutterBottom>
                  Licensor
                </Typography>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    By:
                  </Typography>
                  <SignatureCanvas
                    canvasProps={{ width: 500, height: 200 }}
                    ref={signaturePad}
                  />
                </Grid>

                <Typography variant="body1" gutterBottom>
                  {`${t("name")}: ${name} ${last_name}`}
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.infoBlock}>
                <Typography variant="h6" gutterBottom>
                  LLC «VIRALBEAR»
                </Typography>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>
                    By:
                  </Typography>
                  <div className={classes.signature}>
                    <img
                      alt=""
                      src={"/assets/images/signature.jpg"}
                      height={100}
                    />
                  </div>
                </Grid>
                <Typography variant="body1" gutterBottom>
                  {`${t("name")}: Tatsiana Dziaikun`}
                </Typography>
              </Grid>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withRouter(Contract);
