export const colors = {
  gray: {
    100: "#EEEEEE",
    200: "#CCCCCC",
    300: "#999999",
    400: "#191B1F",
    500: "#333333",
  },
  blue: {
    light: "#99AECC",
    main: "#2172E5",
  },
  purple: "#473F6B",
};

export const palette = {
  accent1: colors.purple,
  accent2: colors.blue.light,
  grayScale: {
    darkest: colors.gray[500],
    dark: colors.gray[400],
    light: colors.gray[200],
    lightest: colors.gray[100],
    main: colors.gray[300],
  },
  primary: {
    main: colors.blue.main,
  },
};
