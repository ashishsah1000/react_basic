
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./navbar/Nav"
import SideNav from './sideNav/SideNav';
import Footer from './footer/Footer';
import Middle from './midContent/Middle';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Nav />
            <SideNav />
            <Footer />
            <Middle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
