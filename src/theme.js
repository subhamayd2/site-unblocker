import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00BCD4",
      contrastText: "#fff",
    },
    background: {
      default: "#f3f3f3",
      paper: "#52525217",
    },
    text: {
      primary: "#fff",
      secondary: "#515254",
    },
  },
  typography: {
    allVariants: {
      color: "#1a1a1b",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00BCD4",
      contrastText: "#fff",
    },
    background: {
      default: "#1b1c1d",
      paper: "#52525217",
    },
    text: {
      primary: "#fff",
      secondary: "#515254",
    },
    type: "dark",
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});
