import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import { colors } from "theme";
const useStyles = makeStyles((theme: Theme) => ({
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
