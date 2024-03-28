import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 justify-center items-center dark:bg-neutral-900">
      <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="flex-xl dark:text-white"> Toggle Theme</Text>
        <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
      </View>
      <Text className="mx-4 text-justify" style={colorScheme=='dark' ? styles.whiteText : styles.blackText}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'purple'
  },
  blackText: {
    color: 'green'
  }
});
