import React, { useEffect } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ReCAPTCHA from 'react-google-recaptcha';
import publicIP from 'react-native-public-ip';
import { connect } from 'react-redux'
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { validateEmail } from '../utils/validations';
import { useStyles } from './Contact.Styles.js';
import { sendContacts } from '../redux/actions/sendingContacts';
import classNames from "classnames";


const Contact = (props) => {
    const { status, message, enqueueSnackbar } = props;

    const { t } = useTranslation();

    const messageTranslate = t(message);

    const recaptchaRef = React.useRef();
    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [messageField, setMessageField] = React.useState('');
    const [subject, setSubject] = React.useState('');

    useEffect(() => {
        if (messageTranslate != null && status != null)
            enqueueSnackbar(messageTranslate, {
                variant: status
            });
    }, [status, messageTranslate, enqueueSnackbar]);

    const onSubmit = () => {
        publicIP()
            .then(ip => {
                if (name !== '' && subject !== '' && messageField !== '' && validateEmail(email)) {
                    props.postContacts({
                        mainInfo: {
                            name,
                            email,
                            subject,
                            message: messageField,
                            ip
                        }
                    });

                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessageField('');
                } else {
                    props.enqueueSnackbar(t("dataEnteredIncorrectly"), {
                        variant: 'error'
                    });
                }
            })
    };
    return (
        <Grid container className={classes.paddingTopBottom}>
            <Grid item xs={1} lg={3} />
            <Grid container item xs={10} lg={6} spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2" className={classNames(classes.justifyContentCenter, classes.flex)}>
                        {t("contactUs")}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        label={t("yourName")}
                        variant="outlined"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type="email"
                        label={t("yourEmail")}
                        variant="outlined"
                        value={email}
                        error={!validateEmail(email)}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>{t("subject")}</InputLabel>
                        <Select
                            value={subject}
                            onChange={event => setSubject(event.target.value)}
                            label="Subject"
                        >
                            <MenuItem value="">
                                <em>{t("subject")}</em>
                            </MenuItem>
                            <MenuItem value="License a video & questions">{t("subject0")}</MenuItem>
                            <MenuItem value="Business inquiries">{t("subject1")}</MenuItem>
                            <MenuItem value="Video owner questions">{t("subject2")}</MenuItem>
                            <MenuItem value="Press inquiries">{t("subject3")}</MenuItem>
                            <MenuItem value="General information and other">{t("subject4")}</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lc7T1ghAAAAADnYLGHgR83nJOqx7ePafScz1pQO"
                />

                <Grid item xs={12}>
                    <TextField
                        required
                        label={t("your") + " " + t("message")}
                        fullWidth
                        multiline
                        rows={4}
                        value={messageField}
                        variant="outlined"
                        onChange={event => setMessageField(event.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary" endIcon={<Icon>send</Icon>}
                        onClick={() => onSubmit()}>
                        {t("send") + " " + t("message")}
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={1} lg={3} />
        </Grid>
    );
};

Contact.propTypes = {
    message: PropTypes.string,
    status: PropTypes.string
};

const mapStateToProps = state => ({
    error: state.contactsSending.error,
    message: state.notificationsSetting.message,
    status: state.notificationsSetting.status,
});

const mapDispatchToProps = {
    postContacts: sendContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Contact));
