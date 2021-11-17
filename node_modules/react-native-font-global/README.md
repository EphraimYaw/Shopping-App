# react-native-font-global

React Native apply custom font for iOS and Android

# Installation

- Add font file to your app **src/assets/fonts/**

- In **react-native.config.js** :

  ```
  module.exports = {
    ...
    project: {
      ios: {},
      android: {},
    },
    assets: ['./src/assets/fonts'],
    ...
  };
  ```

- Install package

  using npm

  ```
  npm install react-native-font-global
  ```

  using yarn

  ```
  yarn add react-native-font-global
  ```

- Link Fonts

  ```
  react-native link
  ```

- **iOS**

  ```
  pod install
  ```

- **Android** (Auto-linking)

# Usage

Go to your first component which wraps the whole application **(mostly App.js)**.

```
import applyFontGlobally from 'react-native-font-global';

applyFontGlobally('YourCustomFontName');
```

# Example App

Example app can be found in **example/** directory.

## How to use and run example

- Clone Repository

  ```
  git clone https://github.com/ajaybhatia/react-native-font-global
  ```

- Swtich to example directory

  ```
  cd example
  ```

- Install dependencies

  ```
  npm install
  ```

- Run example

  **Android:**

  ```
  react-native run-android
  ```

  **iOS:**

  ```
  pod install
  ```

  ```
  react-native run-ios
  ```
