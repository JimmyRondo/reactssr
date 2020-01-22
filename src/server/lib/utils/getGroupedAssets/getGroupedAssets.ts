import { compose, groupBy, map, unnest, values } from 'ramda';

const updatePath = (path: string): string => (path.startsWith('/') ? path : `/${path}`);
const getExtension = (filename: string): any => filename.split('.').pop()!;

const groupAssets = compose<string[], string[], object>(groupBy(getExtension), map(updatePath));

export const getGroupedAssets = compose(groupAssets, unnest, values);
