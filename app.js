import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/components/List/index';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title/>
      </View>
      <View style={styles.content}>
      <Home/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
