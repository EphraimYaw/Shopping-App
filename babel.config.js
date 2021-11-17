module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 