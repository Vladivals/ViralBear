import React from 'react';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';
import { chunk } from 'lodash';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import PARTNERS from '../../consts/partners';
import { useStyles } from './PartnersList.Styles';

const PartnersList = () => {
    const classes = useStyles();
    const Partners = chunk(PARTNERS, 5);

    return (
        <AwesomeSlider className={classes.heightCarousel}>
            {Partners.map((partner, key) =>
                <Grid key={key} className={classNames(classes.flex, classes.centeredBrands)}>
                    {partner.map(part =>
                        <Grid key={part.name} item xs={12} lg={3} className={classNames(classes.displayBrands)}>
                            <img src={part.src} height={60} alt=""/>
                        </Grid>)}
                </Grid>
            )}
        </AwesomeSlider>
    );
};

export default PartnersList;
