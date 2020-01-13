import { compose, map, unnest } from 'ramda';
import { MatchedRoute } from 'react-router-config';

const getActions = <T>({ route }: MatchedRoute<T>) => route['preloadActions'] || [];

/**
 * Returns a flat list with actions
 * @param {Array<MatchedRoute<T>} matchedRoutes
 */
export const getPreloadActionsFromRoutes = <T>(matchedRoutes: Array<MatchedRoute<T>>) => {
  return compose(unnest, map(getActions))(matchedRoutes);
};
