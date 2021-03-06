import React, { Component } from "react";

import { Navigator, Main } from "./components";
import "./App.css";

// import Amplify from "aws-amplify";
// import aws_exports from "./aws-exports";

// Amplify.configure(aws_exports);

import { withAuthenticator } from "aws-amplify-react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <Main />
      </React.Fragment>
    );
  }
}

export default withAuthenticator(App);
