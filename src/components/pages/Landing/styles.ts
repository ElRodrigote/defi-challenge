import { makeStyles } from "@mui/styles";
import { colors } from "theme";

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    backgroundColor: colors.purple,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
  connectedText: {
    color: "white",
  },
}));

export default useStyles;
