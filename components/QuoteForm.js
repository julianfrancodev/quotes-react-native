import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';


export default function QuoteForm({ quotes, setQuotes, setShowForm }) {

    const [patient, setPatient] = useState('');
    const [owner, setOwner] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [trance, setTrace] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: '2-digit' }
        setDate(date.toLocaleDateString('es-ES', options));
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (time) => {
        const options = { hour: 'numeric', minute: '2-digit' }

        setHour(time.toLocaleDateString('en-US', options))

        hideTimePicker();
    };

    const createNewQuote = () => {

        if (patient.trim() === '' ||
            owner.trim() === '' ||
            phone.trim() === '' ||
            date.trim() === '' ||
            hour.trim() === '' ||
            trance.trim() === '') {
            showAlert();
        }

        const quote = { owner, patient, phone, date, hour, trance };

        quote.id = shortid.generate();

        console.log(quote)

        const quotesCreated = [...quotes, quote];

        setQuotes(quotesCreated);

        setShowForm(false);



    }

    const showAlert = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'Ok'
            }]
        )
    }

    return (
        <>
            <ScrollView style={styles.form}>
                <View>
                    <Text style={styles.label}>Patient: </Text>
                    <TextInput
                        style={styles.inputS}
                        onChangeText={(text) => setPatient(text)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Owner: </Text>
                    <TextInput
                        style={styles.inputS}
                        onChangeText={(text) => setOwner(text)}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <TouchableOpacity onPress={showTimePicker} style={styles.btnDelete}>
                        <Text style={styles.txtDelete}>Show Time Picker</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker}
                        locale='es_CO'
                    />
                    <Text>{hour}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Contact: </Text>
                    <TextInput
                        style={styles.inputS}
                        onChangeText={(text) => setPhone(text)}
                        keyboardType='numeric'
                    />
                </View>

                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <TouchableOpacity onPress={showDatePicker} style={styles.btnDelete}>
                        <Text style={styles.txtDelete}>Show Date Picker</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                        locale='es_CO'
                    />
                    <Text>{date}</Text>
                </View>


                <View>
                    <Text style={styles.label}>Trace: </Text>
                    <TextInput
                        style={styles.inputS}
                        onChangeText={(text) => setTrace(text)}
                        multiline
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={() => createNewQuote()} style={styles.btnDelete}>
                        <Text style={styles.txtDelete}>Add Quote</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 0.5
    },
    label: {
        marginVertical: 10,
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    inputS: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,

    },
    btnDelete: {
        padding: 10,
        backgroundColor: 'orange',
        marginVertical: 10,
        borderRadius: 20
    },
    txtDelete: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})