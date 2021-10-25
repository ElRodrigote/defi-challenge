import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import { colors } from "theme";

const useStyles = makeStyles((theme: Theme) => ({
  disabled: {
    backgroundColor: `${colors.blue.light} !important`,
  },
}));

export default useStyles;
