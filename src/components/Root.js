import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {purple, blueGrey} from "@material-ui/core/colors";
import {LocationProvider} from "@reach/router";

export default function Root({children}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // TODO move dark mode setting to some storage and give user opportunity to switch it
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: blueGrey,
          secondary: purple,
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <CssBaseline />
      <LocationProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </LocationProvider>
    </>
  );
}
