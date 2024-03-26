# Installation and execution of this sample

Sample from https://reactnavigation.org/docs/material-top-tab-navigator


npx create-expo-app materialTopTabsNavigator

cd .\materialTopTabsNavigator\

npx expo install react-native-web react-dom @expo/metro-runtime react-native-pager-view

npm install @react-navigation/material-top-tabs react-native-tab-view

- If you're on a Mac and developing for iOS, you also need to install the pods (via Cocoapods) to complete the linking.
- npx pod-install ios

npx expo start