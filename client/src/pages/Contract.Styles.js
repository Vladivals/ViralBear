import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        display: 'flex'
    },
    paddingTopBottom:{
        padding: theme.spacing(2, 0)
    },
    marginAuto: {
        margin: 'auto'
    },
    link: {
        textDecoration: 'none'
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    infoBlock: {
        margin: theme.spacing(4, 0)
    },
    signature: {
        paddingTop: 50,
        paddingBottom: 50
    }
}));

export {useStyles}
