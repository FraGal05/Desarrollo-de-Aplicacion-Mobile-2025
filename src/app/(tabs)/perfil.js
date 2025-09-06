import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tab() {
  const username = "Jose_Espindola_55";
  const name = "Jose Espindola";
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Perfil</Text>
      
      <View style={styles.dataForm}>

        <View style={styles.imageForm}>
          <Ionicons name='person-circle-outline' size={300} />
        </View>

        <Text style={styles.text}>Username: <Text style={styles.subText}>{username}</Text></Text>
        <Text style={styles.text}>Name: <Text style={styles.subText}>{name}</Text></Text>
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 100,
    textDecorationLine: "underline"
  },
  imageForm: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    width: 300,
    height: 300,
    borderRadius: 500
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 600,
  },
  subText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 300,
  },
  dataForm: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 50
  }
});
