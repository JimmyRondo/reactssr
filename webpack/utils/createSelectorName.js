const { getLocalIdent } = require('css-loader/dist/utils');
const { either, includes } = require('ramda');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createSelectorName = (loaderContext, localIdentName, localName, options) => {
  const fromAssets = either(includes('assets'), includes('node_modules'))(loaderContext.resourcePath);
  return fromAssets ? localName : getLocalIdent(loaderContext, localIdentName, localName, options);
};

module.exports = {
  createSelectorName,
};
