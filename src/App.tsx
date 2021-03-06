import React from "react";
import { applyMiddleware, createStore, Store } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import thunk from "redux-thunk";

import { Landing } from "components";
import reducer from "redux/reducers";
import { RootState } from "redux/types";
import { theme } from "theme";

const store: Store<RootState> = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline>
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </CssBaseline>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
