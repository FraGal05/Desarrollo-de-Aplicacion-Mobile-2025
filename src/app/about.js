import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Perfil</Text>

        <Text style={styles.text}>Username: <Text style={styles.subText}>username</Text></Text>
        <Text style={styles.text}>Name: <Text style={styles.subText}>name</Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});