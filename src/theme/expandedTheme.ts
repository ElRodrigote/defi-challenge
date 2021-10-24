import "@mui/styles";

// custom Palette configuration
declare module "@mui/material/styles/CreatePalette" {
  interface Palette {
    grayScale?: {
      darkest?: string;
      dark?: string;
      main?: string;
      light?: string;
      lightest?: string;
    };
  }

  interface PaletteOptions {
    grayScale?: {
      darkest?: string;
      dark?: string;
      main?: string;
      light?: string;
      lightest?: string;
    };
  }
}

export {};
