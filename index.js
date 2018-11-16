/** @format */

// import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './constants/config/store';

const store = configureStore();

const ConnectedApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
);


AppRegistry.registerComponent(appName, () => ConnectedApp);

//TODO: Fjern???
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import reducers from "./reducers";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();