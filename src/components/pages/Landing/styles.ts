import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.accent1,
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
