import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        display: 'flex'
    },
    heightCarousel: {
        height: '200px'
    },
    displayBrands: {
        display: 'contents'
    },
    centeredBrands: {
        width: '80%',
        justifyContent: 'space-around'
    }
}));

export { useStyles }
