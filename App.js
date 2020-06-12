import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';


const App = () => {

  const [showForm, setShowForm] = useState(false);

  // Define state

  const [quotes, setQuotes] = useState([
    { id: "1", patient: "Gala", owner: 'Julian', trance: "Esta Linda", phone: "+65-53453-345" },
    { id: "2", patient: "Celeste", owner: 'Miguel', trance: "Esta Albina", phone: "+65-53453-345" },
    { id: "3", patient: "Luki", owner: 'Daniel', trance: "Es Perro", phone: "+65-53453-345" },

  ]);

  const deletePatient = (id) => {
    setQuotes((quotesNow) => {
      return quotesNow.filter(quote => quote.id !== id)
    })
  }

  const showFormOrHide = () => {
    setShowForm(!showForm);
  }

  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'orange'} />
        <Text style={styles.header}>Administrador de citas</Text>

        <View>
          <TouchableOpacity onPress={() => showFormOrHide()} style={styles.btnDelete}>
            <Text style={styles.txtDelete}>Create Quote</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>

          {showForm ?
            (
              <>
                <Text style={styles.header}>
                  Crear Nueva Cita
            </Text>
                <QuoteForm
                  quotes={quotes}
                  setQuotes={setQuotes}
                  setShowForm={setShowForm}
                />
              </>
            )
            : (
              <>
                <Text style={styles.header}> {quotes.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega'} </Text>

                <FlatList
                  style={styles.listFlat}
                  data={quotes}
                  renderItem={({ item }) => <Quote quote={item} deletePatient={deletePatient} />}
                  keyExtractor={quote => quote.id}
                />
              </>
            )}



        </View>

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
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listFlat: {
    flex: 1,

  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
    borderRadius: 20
  },
  txtDelete: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
