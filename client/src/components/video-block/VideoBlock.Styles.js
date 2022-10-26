import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  whiteText: {
    color: "white",
  },
  centeredContent: {
    justifyContent: "center",
  },
  flex: {
    display: "flex",
  },
  marginAuto: {
    margin: "auto",
  },
  videoBlockPage: {
    backgroundImage: "url(/assets/images/videosBg.jpg)",
    backgroundBlendMode: "overlay",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    width: "100%",
    maxWidth: 1920,
    backgroundRepeat: "no-repeat",
    margin: "auto",
  },
  videoInner: {
    color: "white",
    padding: "50px 0",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  video: {
    margin: 16,
    width: 400,
    maxWidth: "85%",
    float: "left",
  },
  paddedBlock: {
    padding: 8,
  },
  infoVideo: {
    width: 250,
    float: "right",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  darkedBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heading: {
    color: "black",
    paddingBottom: 48,
  },
  centeredText: {
    textAlign: "center",
  },
}));

export { useStyles };
