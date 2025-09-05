import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Tab [Settings]</Text>
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
  titleText: {
    margin: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    height: 350,
    padding: 10,
    width: 250,
    borderWidth:1,
    borderColor: "#808080",
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
