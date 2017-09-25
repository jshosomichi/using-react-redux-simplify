export interface AppState {
  x: boolean;
  y: boolean;
}

export const defaultState = {
  x: true,
  y: true
};

export const AppReducer = ((state = defaultState, action: any) => {
  switch (action.type) {
    case 'SYNC_ACTION': {
      return Object.assign({}, state, {x: action.x});
    }
    case 'ASYNC_ACTION': {
      return Object.assign({}, state, {y: action.y});
    }
    default: {
      return defaultState;
    }
  }
});