import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  disabled: {
    backgroundColor: `${theme.palette.accent2} !important`,
  },
}));

export default useStyles;
