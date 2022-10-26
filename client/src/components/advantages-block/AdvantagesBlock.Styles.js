import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    whiteText: {
        color: 'white'
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        display: 'flex'
    },
    img: {
        margin: 'auto',
        padding: 24,
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    advantages: {
        background: 'url(/assets/images/advantages.jpg)',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        width: '100%',
        maxWidth: 1920,
        backgroundRepeat: 'no-repeat',
        margin: 'auto'
    },
    advantagesInner: {
        color: 'white',
        margin: '100px 0',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    advantagesElement: {
        textAlign: 'center',
        width: '20%',
        marginBottom: 'auto'
    },
    borderTopBottom: {
        borderTop: '2px solid',
        borderBottom: '2px solid'
    },
    uppercase: {
        textTransform: 'uppercase'
    }
}));

export {useStyles}
