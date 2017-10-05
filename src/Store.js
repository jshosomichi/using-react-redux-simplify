import * as Redux from 'redux'
import {AppReducer} from "./Reducer";


export const store =
  Redux.createStore(AppReducer);