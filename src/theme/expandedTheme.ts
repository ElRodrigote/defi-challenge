import "@mui/styles";

// custom Palette configuration
declare module "@mui/material/styles/CreatePalette" {
  interface Palette {
    accent1?: string;
    accent2?: string;
    grayScale?: {
      darkest?: string;
      dark?: string;
      main?: string;
      light?: string;
      lightest?: string;
    };
  }

  interface PaletteOptions {
    accent1?: string;
    accent2?: string;
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
