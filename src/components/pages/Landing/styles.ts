import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.grayScale?.darkest,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
}));

export default useStyles;
