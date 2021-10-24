import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grayScale?.dark,
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 290,
    marginTop: theme.spacing(2),
    maxHeight: 800,
    padding: theme.spacing(4),
    width: 580,

    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },
  balanceAndAmount: {
    justifyContent: "space-between",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    minHeight: 250,
    padding: theme.spacing(2),

    [theme.breakpoints.down("md")]: {
      minHeight: 320,
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: 300,
    },
  },
}));

export default useStyles;
