import { PreloadAction } from '@core/common/preload';
import { AppState } from '@core/common/reducer';
import { Store } from 'redux';

export const fillStore = <T>(actions: PreloadAction[], store: Store<AppState>, url: string) => {
  return Promise.all(actions.map(action => store.dispatch(action(url))));
};
