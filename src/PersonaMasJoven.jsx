import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native';

export default function PersonaJoven() {
  const [Persona, setPersona] = useState([]);
  const [PersonaMasJoven, setPersonaMasJoven] = useState('');

  const cambiodeInput = (value, index, key) => {
    const newPersona = [...Persona];
    newPersona[index][key] = value;
    setPersona(newPersona);
  };

  const encontrarPersonaJoven = () => {
    let EdadJoven = Infinity;
    let NombreJoven = '';
    Persona.forEach(person => {
      if (parseInt(person.edad) < EdadJoven) {
        EdadJoven = person.edad;
        NombreJoven = person.nombre;
      }
    });
    setPersonaMasJoven(NombreJoven);
  };

  function agregarPersona() {
    const newPersona = [...Persona];
    newPersona.push({ nombre: "", edad: "" });
    setPersona(newPersona);
  }

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          {Persona.map((person, index) => (
            <View key={index}>
              <Text style={styles.sectionText}>Nombre:</Text>
              <TextInput
                style={styles.sectionTextInput}
                placeholder="Nombre"
                value={person.nombre}
                onChangeText={(value) => cambiodeInput(value, index, "nombre")}
              />
              <Text style={styles.sectionText}>Edad:</Text>
              <TextInput
                style={styles.sectionTextInput}
                placeholder="Edad"
                value={person.edad}
                onChangeText={(value) => cambiodeInput(value, index, "edad")}
                keyboardType="numeric"
              />
            </View>
          ))}
          <View style={styles.sectionButton}><Button title="Agregar Persona" onPress={agregarPersona} /></View>

          <View style={styles.sectionButton}><Button style={styles.sectionButton} title="Encontrar persona más joven" onPress={encontrarPersonaJoven} /></View>
          <Text style={styles.sectionText}>La persona más joven de la lista es: {PersonaMasJoven}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,

  },
  sectionTextInput: {
    marginBottom: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  sectionText: {
    marginTop: 8,
    fontSize: 15
  },
  sectionButton: {
    marginBottom: 8,
  },
});