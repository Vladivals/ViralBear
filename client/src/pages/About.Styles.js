import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  darkedBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  centeredText: {
    textAlign: "center",
  },
  flex: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  imageBackground: {
    backgroundImage: "url(/assets/images/boat-at-autumn-lake.jpg)",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    width: "100%",
    maxWidth: "1920px",
    height: "100%",
    backgroundRepeat: "no-repeat",
  },
  paddingBrands: {
    padding: theme.spacing(2),
  },
  whiteText: {
    color: "#fff",
  },
  whiteTextAndTitle: {
    color: "#fff",
    fontSize: "20px",
    padding: "10px",
    fontWeight: "bold"
  },
  whiteTextAndName: {
    color: "#fff",
    fontSize: "20px",
    padding: "10px",
  },
  padding: {
    padding: "32px 0px",
  },
  whatIs: {
    float: "left",
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  textUnderline: {
    borderBottom: "2px solid #3f51b5",
  },
  howWork: {
    float: "right",
    width: "50%",
    display: "flex",
    alignItems: "center",
  },

  brands: {
    alignItems: "center",
  },
  paddingTop: {
    paddingTop: theme.spacing(4),
  },
  paddingTopBottom: {
    padding: theme.spacing(4, 0),
  },

  imgRound: {
    borderRadius: 150 / 4,
  }
}));

export { useStyles };
