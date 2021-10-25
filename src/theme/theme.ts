import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";

const theme = createTheme({
  palette,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 0,
        },
      },
    },
  },
});

export default theme;
