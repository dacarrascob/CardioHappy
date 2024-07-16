import React, { FC,useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';

const App: React.FC = () => {
  const [field1, setField1] = useState<string>('');
  const [field2, setField2] = useState<string>('');

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica cuando se envíe el formulario
    Alert.alert('Datos ingresados', `Systólica: ${field1}, Diastólica: ${field2}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/cardioHappyLogo.png')} style={styles.image} />
      <Text style={styles.label}>Systólica:</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
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
      <Button title="Registrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100,
    backgroundColor:'lightgrey',
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 150,
  },

  label: {
    color:'blue',
    fontSize: 20,
    marginVertical: 10,
  
  },
  input: {
    height: 40,
    width: 180,
    borderColor: 'blue',
    borderWidth: 2,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default App;