module.exports = function (api) {
  api.cache(true);

  const plugins = [
    ["module-resolver", {
      "root": ["."]
    }]
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
