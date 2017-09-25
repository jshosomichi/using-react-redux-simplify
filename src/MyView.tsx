import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {store} from './Store'
import {asyncAction, syncAction} from './Actions'
import {AppState, defaultState} from "./Reducer";

class MyView extends React.Component<{}, AppState> {

  constructor() {
    super();
    this.state = defaultState;
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  render() {
    return (
      <div>
        <div onClick={() => store.dispatch(syncAction(this.state.x))}>
          {`sync value ${String(this.state.x)}`}
        </div>
        <div onClick={async () => store.dispatch(await asyncAction(this.state.y))}>
          {`async value ${String(this.state.y)}`}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyView/>, document.getElementById('contents'));