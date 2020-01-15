import { commonReducer, CommonState } from '@core/features/common';
import { combineReducers } from 'redux';

export interface AppState {
  common: CommonState;
}

export const reducer = combineReducers<AppState>({
  common: commonReducer,
});
