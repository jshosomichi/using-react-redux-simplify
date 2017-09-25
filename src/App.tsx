import * as React from 'react'
import * as Redux from 'redux'
import * as ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux'
import {AppReducer, AppState} from "./Reducer";
import {MyView} from "./MyView";
import {Dispatch, Store} from "redux";

export const appStore: Store<AppState> = Redux.createStore(AppReducer);

export interface AppProps {
  state?: AppState,
  dispatch?: Dispatch<AppState>
}

const view = (props: AppProps) =>
  <MyView state={props.state} dispatch={props.dispatch}/>;

const App = connect(s => ({state: s}))(view) as React.ComponentClass<AppProps> ;

ReactDOM.render(
  <Provider store={appStore}>
    <App/>
  </Provider>,
  document.getElementById('contents')
);
