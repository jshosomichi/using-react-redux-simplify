import * as React from 'react'
import * as Redux from 'redux'
import * as ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux'
import {AppReducer} from "./Reducer";
import {MyView} from "./MyView";

export const appStore = Redux.createStore(AppReducer);

const view = (props) =>
  <MyView state={props.state} dispatch={props.dispatch}/>;

const App = connect(s => ({state: s}))(view);

ReactDOM.render(
  <Provider store={appStore}>
    <App/>
  </Provider>,
  document.getElementById('contents')
);
