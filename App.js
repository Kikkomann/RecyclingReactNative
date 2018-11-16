import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { View } from "react-native";

import AppNavigator from "./navigation/AppNavigator";
import HomeScreen from "./containers/HomeScreen";
// import reducer from "./reducers";

// const client = axios.create({
//    baseURL: "https://api.github.com",
//    responseType: "json"
// });

// const store = createStore(reducer);

export default class App extends Component {
   render() {
      return (
        //  <Provider store={store}>
               <AppNavigator />
        //   </Provider>
      );
   }
}
