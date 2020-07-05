import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
      primary: {
        main: "#0737A0",
      },
      secondary: {
        main: "#fff",
        light: 'rgba(255, 255, 255, 0.5)',
      },
      text: {
        primary: "#1C2126",
        secondary: "#727981",
      },
    },
    typography: {
      fontSize: 14,
      fontFamily: "Roboto, sans-serif",
      h4: {
        fontWeight: "bold",
        fontSize: "1.38rem",
      },
      h5: {
        fontWeight: "bold",
        fontSize: "1.25rem",
      },
      subtitle2: {
        fontSize: "1rem",
        color: "#727981"
      },
    },

    overrides: {
      MuiContainer: {      
        root: {
          paddingTop: "20px",
          maxWidth: "1200px !important"
        }
      },
      MuiPagination: {
        ul: {
          justifyContent: "flex-end",
        }
      }
    }
});
  