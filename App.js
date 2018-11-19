import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import AppNavigator from "./navigation/AppNavigator";
import reducers from "./reducers";
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
	sagaMiddleware
);

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(middleware)
);



// const store = createStore(
//    reducers,
//    compose(
//       applyMiddleware(sagaMiddleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//          window.__REDUX_DEVTOOLS_EXTENSION__()
//    )
//    // eslint-disable-next-line no-underscore-dangle
// );

export default class App extends Component {
   render() {
      sagaMiddleware.run(rootSaga);
      return (
         <Provider store={store}>
            <AppNavigator />
         </Provider>
      );
   }
}
