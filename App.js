import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView
} from 'react-native';

import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';


const App = () => {


  // Define state

  const [quotes, setQuotes] = useState([
    { id: "1", patient: "Gala", owner: 'Julian', trance: "Esta Linda", phoneNumber: "+65-53453-345" },
    { id: "2", patient: "Celeste", owner: 'Miguel', trance: "Esta Albina", phoneNumber: "+65-53453-345" },
    { id: "3", patient: "Luki", owner: 'Daniel', trance: "Es Perro", phoneNumber: "+65-53453-345" },

  ]);

  const deletePatient = (id) => {
    setQuotes((quotesNow) => {
      return quotesNow.filter(quote => quote.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'orange'} />
      <ScrollView>
        <Text style={styles.header}>Administrador de citas</Text>

        <QuoteForm />

        <Text style={styles.header}> {quotes.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega'} </Text>

        <FlatList
          data={quotes}
          renderItem={({ item }) => <Quote quote={item} deletePatient={deletePatient} />}
          keyExtractor={quote => quote.id}
        />
      </ScrollView>
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
    marginBottom: 20
  }
});

export default App;
