import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& input:error + fieldset": {
      borderColor: theme.palette.error,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },

    [theme.breakpoints.down("md")]: {
      marginTop: `${theme.spacing(1)} !important`,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: `${theme.spacing(1)} !important`,
    },
  },
}));

export default useStyles;
