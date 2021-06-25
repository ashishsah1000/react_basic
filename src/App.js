import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./navbar/Nav";
import SideNav from "./sideNav/SideNav";
import Footer from "./footer/Footer";
import Middle from "./midContent/Middle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#006400"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <ThemeProvider theme={theme}>
              <Nav />
              <SideNav />

              <Middle />
              <Footer />
            </ThemeProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
