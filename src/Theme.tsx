import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#683D31",
    },
    secondary: {
      main: "#E5E5E3",
    },
    background: {
      default: "#424244",
    },
    text: {
      primary: "#F3DB78",
    },
  },
  typography: {
    fontFamily: ["Consolas", "monaco", "monospace"].join(","),
  },
});
