import { AppState } from '@core/common/reducer';
import { createSelector } from 'reselect';

export const commonRootSelector = (state: AppState): any => state.common;

export const userSelector = createSelector(commonRootSelector, common => common.user);
export const userFetchedSelector = createSelector(commonRootSelector, common => common.fetched);
export const userErrorSelector = createSelector(commonRootSelector, common => common.error);
