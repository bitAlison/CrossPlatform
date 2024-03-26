# Installation and execution of this sample

Sample from https://reactnavigation.org/docs/stack-navigator


npx create-expo-app stackNavigator

cd .\stackNavigator\

npx expo install react-native-web react-dom react-native-gesture-handler @expo/metro-runtime @react-native-masked-view/masked-view

npm install @react-navigation/stack


- If you're on a Mac and developing for iOS, you also need to install the pods (via Cocoapods) to complete the linking.
- npx pod-install ios

npx expo start
