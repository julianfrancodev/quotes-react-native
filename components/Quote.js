import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Quote = ({ quote, deletePatient }) => {

    const deleteQuote = (id) => {
        console.log("eliminando", id)
        deletePatient(id);
    }

    return (
        <View style={styles.quote}>
            <View>
                <Text style={styles.label}>Patient: </Text>
                <Text style={styles.item}>{quote.patient}</Text>
            </View>

            <View>
                <Text style={styles.label}>Owner: </Text>
                <Text style={styles.item}> {quote.owner} </Text>
            </View>

            <View>
                <Text style={styles.label}>Trance: </Text>
                <Text style={styles.item}>{quote.trance}</Text>
            </View>

            <View>
                <Text style={styles.label}>Phone: </Text>
                <Text style={styles.item}>{quote.phone}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => deleteQuote(quote.id)} style={styles.btnDelete}>
                    <Text style={styles.txtDelete}>Delete</Text>
                </TouchableHighlight>
            </View>

        </View>

    )
};

const styles = StyleSheet.create({
    quote: {
        backgroundColor: '#fff',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        elevation: 0.5
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    item: {
        fontSize: 18,
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
})


export default Quote;