import React from 'react';
import classNames from 'classnames';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useStyles } from './AdvantagesBlock.Styles';

const AdvantagesBlock = () => {
    const classes = useStyles();

    const { t } = useTranslation();

    return (
        <Grid container item className={classNames(classes.flex, classes.advantages)}>
            <Grid container className={classNames(classes.flex, classes.advantagesInner, classes.whiteText)}>
                <Grid xs={10} lg={2} item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/trustworthy.png" className={classes.img} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classNames(classes.borderTopBottom, classes.uppercase)}>
                            {t("trustworthy")}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{t("trustworthyDescription")}</Typography>
                    </Grid>
                </Grid>

                <Grid xs={10} lg={2} item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/universal.png" className={classes.img} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classNames(classes.borderTopBottom, classes.uppercase)}>
                            {t("universal")}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{t("universalDescription")}</Typography>
                    </Grid>
                </Grid>

                <Grid xs={10} lg={2} item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/trending.png" className={classes.img} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classNames(classes.borderTopBottom, classes.uppercase)}>
                            {t("trending")}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{t("trendingDescription")}</Typography>
                    </Grid>
                </Grid>

                <Grid xs={10} lg={2} item container direction="column" className={classes.advantagesElement}>
                    <Grid item>
                        <img src="/assets/images/efficiency.png" className={classes.img} alt="" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classNames(classes.borderTopBottom, classes.uppercase)}>
                            {t("efficiency")}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{t("efficiencyDescription")}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdvantagesBlock;
