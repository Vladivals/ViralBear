import React, { useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Icon from "@material-ui/core/Icon";
import ReCAPTCHA from "react-google-recaptcha";
import classNames from "classnames";
import publicIP from "react-native-public-ip";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import { submitVideo } from "../redux/actions/submittingVideo";
import { validateEmail, validateLink } from "../utils/validations";
import { useStyles } from "./SubmitVideoPageAsia.Styles";
import CircularProgressWithLabel from "../components/progress/Progress";

import i18next from "i18next";

const SubmitVideoPage = (props) => {
  const { status, message, enqueueSnackbar } = props;

  const t = i18next.getFixedT('cn');
  //const { t } = useTranslation();

  const messageTranslate = t(message);

  const signaturePad = React.useRef();
  const recaptchaRef = React.useRef();
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [link, setLink] = React.useState("");
  const [signature, setSignature] = React.useState("");
  const [age, setAge] = React.useState(false);
  const [accept, setAccept] = React.useState(false);
  const [agreeRecord, setAgreeRecord] = React.useState(true);
  const [operator, setOperator] = React.useState("");

  useEffect(() => {
    if (messageTranslate != null && status != null)
      enqueueSnackbar(messageTranslate, {
        variant: status,
      });
  }, [status, messageTranslate, enqueueSnackbar]);

  const onSubmit = () =>
    publicIP().then((ip) => {
      if (
        name !== "" &&
        lastName !== "" &&
        signature !== "" &&
        validateEmail(email) &&
        !(!link || !validateLink(link)) &&
        ((!agreeRecord && operator !== "") || agreeRecord) &&
        age &&
        accept
      ) {
        props.postVideo({
          mainInfo: {
            last_name: lastName,
            video_link: link,
            video_owner: agreeRecord ? "Yes" : operator,
            name,
            ip,
            email,
            date: new Date().toISOString(),
            cost: "0",
            signature,
          },
        });

        signaturePad.current && signaturePad.current.clear();
        setName("");
        setLastName("");
        setEmail("");
        setLink("");
        setOperator("");
        setSignature("");
        setAge(false);
        setAccept(false);
        setAgreeRecord(true);
      } else {
        props.enqueueSnackbar(t("dataEnteredIncorrectly"), {
          variant: "error",
        });
      }
    });

  return (
    <Grid container className={classes.paddingTopBottom}>
      {props.loading && props.percent !== 100 ? (
        <Grid className={classes.sizeGridProgress}>
          <CircularProgressWithLabel value={props.percent} />
        </Grid>
      ) : (
        <>
          <Grid item xs={1} lg={3} />
          <Grid container item xs={10} lg={6} spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                className={classNames(
                  classes.justifyContentCenter,
                  classes.flex
                )}
              >
                {t("submitVideo")}
              </Typography>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                required
                fullWidth
                label={t("name")}
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                required
                fullWidth
                label={t("lastName")}
                variant="outlined"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                label={t("email")}
                variant="outlined"
                value={email}
                error={!validateEmail(email)}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label={t("your") + " " + t("linkUrl")}
                variant="outlined"
                error={!validateLink(link)}
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                className={classes.marginAuto}
                control={
                  <Grid
                    component="label"
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>{t("no")}</Grid>
                    <Grid item>
                      <Switch
                        onChange={(event) =>
                          setAgreeRecord(event.target.checked)
                        }
                        checked={agreeRecord}
                        name="switchRecord"
                        color="primary"
                      />
                    </Grid>
                    <Grid item>{t("yes")}</Grid>
                  </Grid>
                }
                label={t("youRecordVideo")}
                labelPlacement="top"
              />
            </Grid>

            {!agreeRecord ? (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label={t("whoRecordVideo")}
                  variant="outlined"
                  value={operator}
                  onChange={(event) => setOperator(event.target.value)}
                />
              </Grid>
            ) : null}
            <Grid container xs={10}>
              <Grid item xs={12}>
                <FormControlLabel
                  className={classes.centeredVertical}
                  control={
                    <Checkbox
                      required
                      checked={age}
                      onChange={(event) => setAge(event.target.checked)}
                      name="checkedAge"
                      color="primary"
                    />
                  }
                  label={t("iConfirm")}
                />
              </Grid>

              <Grid
                item
                xs={12}
                className={classNames(classes.centeredContent, classes.flex)}
              >
                <FormControlLabel
                  className={classes.centeredVertical}
                  control={
                    <Checkbox
                      required
                      checked={accept}
                      onChange={(event) => setAccept(event.target.checked)}
                      name="checkedAccept"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body1">
                      {t("iAccept")}
                      <Link className={classes.link} to="/termsOfUse">
                        {t("submissionTerms")}{" "}
                      </Link>
                      and
                      <Link className={classes.link} to="/privatePolicy">
                        {t("privacyPolicy")}
                      </Link>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom variant="body1">
                {t("yourSignature")}
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <SignatureCanvas
                    canvasProps={{ width: 500, height: 200 }}
                    ref={signaturePad}
                    onEnd={() => setSignature(signaturePad.current.toData())}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => signaturePad.current.clear()}
                  >
                    {t("clear")}
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6Lc7T1ghAAAAADnYLGHgR83nJOqx7ePafScz1pQO"
            />

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                onClick={() => onSubmit()}
              >
                {t("send") + " " + t("video")}
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={1} lg={3} />
        </>
      )}
    </Grid>
  );
};

SubmitVideoPage.propTypes = {
  loading: PropTypes.bool,
  percent: PropTypes.number,
  message: PropTypes.string,
  status: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.videoSubmitting.loading,
  percent: state.videoSubmitting.percent,
  error: state.videoSubmitting.error,
  message: state.notificationsSetting.message,
  status: state.notificationsSetting.status,
});

const mapDispatchToProps = {
  postVideo: submitVideo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(SubmitVideoPage));
