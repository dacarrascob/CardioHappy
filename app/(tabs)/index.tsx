import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const App: React.FC = () => {
  const [field1, setField1] = useState<string>('');
  const [field2, setField2] = useState<string>('');

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica cuando se envíe el formulario
    Alert.alert('Datos ingresados', `Systólica: ${field1}, Diastólica: ${field2}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Systólica:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={field1}
        onChangeText={setField1}
      />
      <Text style={styles.label}>Diastólica:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={field2}
        onChangeText={setField2}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 10,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default App;