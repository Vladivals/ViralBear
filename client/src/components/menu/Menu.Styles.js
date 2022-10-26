import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  flex: {
    display: "flex",
  },
  spacedBetween: {
    justifyContent: "space-between",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  centeredVertical: {
    alignItems: "center",
  },
  navToTop: {
    marginTop: -60,
    width: "max-content",
  },
  centeredMenu: {
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };
