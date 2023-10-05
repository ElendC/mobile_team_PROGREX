module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel'],
  };
};

//BABEL CONVERTS CODE INTO A BACKWARDS COMPATIBLE VERSION OF JS. CAN THEN BE RUN MY OLDER JS ENGINES!
