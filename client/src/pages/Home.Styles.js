import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  whiteText: {
    color: "white",
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    display: "flex",
  },
  videoBackground: {
    backgroundImage: "url(/assets/images/mainpage.gif)",
    backgroundSize: "cover",
    width: "100%",
    maxWidth: 1920,
    height: "calc(9 * 100vw / 16)",
  },
  paddedLeft: {
    paddingLeft: theme.spacing(1),
  },
  columnDirection: {
    flexDirection: "column",
  },
  textAlignCenter: {
    textAlign: "center",
  },
}));

export { useStyles };
