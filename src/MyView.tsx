import * as React from 'react'
import {asyncAction, syncAction} from './Actions'
import {AppProps} from "./App";

export const MyView = ({state, dispatch}: AppProps) => {
  return (
    <div>
      <div onClick={() => dispatch(syncAction(state.x))}>
        {`sync value ${String(state.x)}`}
      </div>
      <div onClick={async () => dispatch(await asyncAction(state.y))}>
        {`async value ${String(state.y)}`}
      </div>
    </div>
  );
};
