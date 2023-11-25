import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SurveyNew from "./components/SurveyNew";
import Landing from "./components/Landing";

// const App = () => {
class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={Landing} exact />
            <Route path="/surveys" component={Dashboard} exact />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
