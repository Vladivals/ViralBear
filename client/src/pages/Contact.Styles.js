import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    paddingTopBottom:{
        padding: theme.spacing(2, 0)
    },
    flex: {
        display: 'flex'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    }
}));

export {useStyles}
