import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    backgroundColor: "#2f2f2f",
    color: "#fff",
  },
  flex: {
    display: "flex",
  },
  spacedBetween: {
    justifyContent: "space-between",
  },
  centeredContent: {
    justifyContent: "center",
  },
  endedContent: {
    justifyContent: "end",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  marginAuto: {
    margin: "auto",
  },
  contactsColumn: {
    alignItems: "baseline",
  },
  directionColumn: {
    flexDirection: "column",
  },
  topBlock: {
    padding: "30px 0 5px 0",
    borderBottom: "3px solid white",
  },
  underLineTwo: {
    borderBottom: "2px solid white",
  },
  paddingTopBottom: {
    padding: theme.spacing(1, 0),
  },
  paddingRightLeft: {
    padding: theme.spacing(0, 1),
  },
  padding: {
    padding: theme.spacing(1, 1),
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  divider: {
    background: "white",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  alignText: {
    textAlign: "start",
    alignItems: "center",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  centeredVertical: {
    margin: "auto 0",
  },
  endAlignedContent: {
    justifyContent: "flex-end",
  },
  textAlignRight: {
    textAlign: "right",
  },
  textAlignCenter: {
    textAlign: "center",
  },
}));

export { useStyles };
