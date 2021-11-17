

import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
}

// 1. If you are in a feature, create a feature selector (we are not)

// 2. create a selector for each "branch" of the application state
const selectCounterBranch = (state: AppState) => state.counter;
//3. Any "Helpers"



// 4. Need a function that tells us what they are counting by
export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
)
