import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    centeredBox: {
        left: '50%',
        top: '50%',
        margin: '-200px 0 0 -200px'
    },
    fontSizeProgress: {
        fontSize: '100px'
    }
}));

export {useStyles}
