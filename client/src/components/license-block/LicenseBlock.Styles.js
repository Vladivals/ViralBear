import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    display: "flex",
  },
  marginAuto: {
    margin: "auto",
    padding: "8px 16px",
  },
  textDecoration: {
    textDecoration: "none",
  },
  textUnderline: {
    borderBottom: "2px solid #3f51b5",
  },
  video: {
    width: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    maxHeight: "100%",
  },
  link: {
    textDecoration: "none",
  },
  paddingTextWelcome: {
    padding: theme.spacing(2, 2, 2, 0),
  },
  welcomeLicenseText: {
    alignItems: "center",
  },
  marginTop: {
    marginTop: 50,
  },
  uppercase: {
    textTransform: "uppercase",
  },
  centeredText: {
    textAlign: "center",
  },
}));

export { useStyles };
