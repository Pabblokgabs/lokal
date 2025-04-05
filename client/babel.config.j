module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./api/v1'],
      },
    ],
    'react-native-dotenv',
  ],
};
