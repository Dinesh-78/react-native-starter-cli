module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@styles': './src/styles',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
