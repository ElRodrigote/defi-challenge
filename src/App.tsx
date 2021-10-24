import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Landing } from "./components";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </CssBaseline>
      </Router>
    </ThemeProvider>
  );
};

export default App;
