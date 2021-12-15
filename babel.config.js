module.exports = function (api) {
  api.cache(true);

  const plugins = [
    [
      // For module imports (absolute) to work in the app
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
