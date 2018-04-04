import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Nav from "./src/containers/nav";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
