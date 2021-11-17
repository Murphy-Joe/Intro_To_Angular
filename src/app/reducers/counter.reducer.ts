import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
}

// "Pure" functions - you can't call apis, you can't do anything fancy. new "new Date()"
const reducerFunction = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by }))
)
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}





