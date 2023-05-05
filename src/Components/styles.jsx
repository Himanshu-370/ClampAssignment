import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#000 !important",
    textTransform: "none !important",
    fontWeight: "600 !important",
    fontSize: "15px !important",
  },
  fonts: {
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    backgroundColor: "#fff !important",
    border: "none !important",
    boxShadow: "none !important",
    textTransform: "none !important",
  },
  flexDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buyNowBtn: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
    width: "100%",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    padding: "8px 15px !important",
    borderRadius: "5px !important",
    textTransform: "none !important",
    fontSize: "16px !important",
  },
  tabs: {
    fontFamily: "Roboto",
    fontWeight: "600 !important",
  },
  CardContentflexDisplay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  buttonStyle: {
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    color: "#000 !important",
    backgroundColor: "#fff !important",
    border: "none !important",
    boxShadow: "none !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#ccc !important",
    },
  },
  BuyModalflexDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 600px)": { flexWrap: "wrap" },
  },
  boxSize: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "20px",
    "@media (max-width: 600px)": {
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "auto",
    },
  },
  boxStyle: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    "@media (min-width:1000px)": {
      width: "auto",
    },
  },
  btn1: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    flex: 1,
    margin: "0 5px",
  },
  btn2: {
    backgroundColor: "#fff !important",
    color: "#000 !important",
    fontFamily: "Roboto",
    fontWeight: "600 !important",
    flex: 1,
    margin: "0 5px",
    border: "1px solid #ccc !important",
  },
}));

export default useStyles;
