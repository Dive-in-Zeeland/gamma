module.exports = function (api) {
  api.cache(true);

  const plugins = [
    // Absolute module imports (to work when app is built)
    [
      'module-resolver',
      {
        root: ['src'],
        extensions: ['.ts', '.tsx', '.json'],
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
