import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, About, Contact} from "./components";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/portfolio" exact component={() => <Portfolio />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;