import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProfile } from "./actions/authActions";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App Constructor");
  }
  componentDidMount() {
    console.log("[App COmponent] ComponentDidMount");
    this.props.fetchProfileAction();
  }
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} /> */}
        </Switch>
        <ToastContainer />
        <Header></Header>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log("[App Component]", "Mapping Dispatch To Props");
  return {
    fetchProfileAction: () => dispatch(fetchProfile())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
