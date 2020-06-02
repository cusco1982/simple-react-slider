import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Wrapper from "./components/Wrapper";
import Projects2 from "./pages/Projects2";
import Main from "./pages/Main";



function App() {
  return (

    <Router>
      <div>
        <Nav />

        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/projects2" component={Projects2} />
        </Wrapper>



      </div>
    </Router>

  );
}

export default App;
