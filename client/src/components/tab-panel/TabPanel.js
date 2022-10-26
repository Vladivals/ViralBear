import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';


const TabPanel = ({ children, value, index }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
);

TabPanel.propTypes = {
    children: PropTypes.any,
    value: PropTypes.number,
    index: PropTypes.number
};

export default TabPanel;