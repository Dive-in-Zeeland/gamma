module.exports = function (api) {
  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          "@components": "./src/components",
          "@features": "./src/features",
          "@navigation": "./src/navigation",
        }
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};