const ClosurePlugin = require('closure-webpack-plugin');

export function webpack(config) {
  return {
    ...config,
    plugins: [
      new ClosurePlugin.LibraryPlugin({
        closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
        deps: [require.resolve('google-closure-library/closure/goog/deps')],
      }),
    ],
  };
}
