import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList
} from 'react-native';


const App = () => {

  // Define state

  const [quotes, setQuotes] = useState([
    { id: "1", patient: "Gala", owner: 'Julian', trance: "Esta Linda" },
    { id: "2", patient: "Celeste", owner: 'Miguel', trance: "Esta Albina" },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'orange'} />
      <Text style={styles.header}>Administrador de citas</Text>

      <FlatList
        data={quotes}
        renderItem={({ item }) => {
          return (
            <View>
              <Text> {item.patient} </Text>
            </View>
          )
        }}
        keyExtractor={quote => quote.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'orange',
    flex: 1
  },

  header: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: "bold",

  }
});

export default App;
