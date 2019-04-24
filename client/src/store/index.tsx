import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from "../containers/App";
import reducers from '../reducers/index';

let middleware = applyMiddleware();

//if we are in dev move, compose middleware with dev tools before creating the store
if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(applyMiddleware(thunk));
}

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
  {/*
  //@ts-ignore */}
    <App />
  </Provider>,
document.getElementById("root")
);

export default store;
