import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}


const reducerFunction = createReducer(
  initialState,
  on(actions.countIncremented, (currentState) => ({ current: currentState.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 }))
)
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}





