import React, { Component } from "react";
import { createStore } from "redux";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = () =>
   createStore(
      reducers,
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   );

export default class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <AppNavigator />
         </Provider>
      );
   }
}
