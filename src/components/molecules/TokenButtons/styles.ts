import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      height: 100,
    },

    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
}));

export default useStyles;
