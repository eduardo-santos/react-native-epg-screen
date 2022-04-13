module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': ['./src/design-system/assets'],
          '@colors': ['./src/design-system/colors'],
          '@components': ['./src/design-system/components'],
          '@hooks': ['./src/hooks'],
          '@utils': ['./src/utils'],
          '@ds': './src/design-system',
        },
      },
    ],
  ],
}
