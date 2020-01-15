import { AppApi } from '@core/api';
import { AppState } from '@core/common/reducer';
import { Dispatch } from 'redux';
import { errorFetchUser, fetchUser, successFetchUser } from './reducer';

export function getUser(name: string) {
  return async (dispatch: Dispatch, getState: () => AppState, { requestApi }: AppApi): Promise<any> => {
    try {
      dispatch(fetchUser());
      const user: any = await requestApi.get(`users/${name}`);
      dispatch(successFetchUser({ user }));
    } catch ({ message }) {
      dispatch(errorFetchUser({ error: message }));
    }
  };
}
