import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Text as RNText } from 'react-native';
import { useState } from 'react';

// Importa todas las actividades
import Actividad1 from './Pantallas/actividad1';
import Actividad2 from './Pantallas/actividad2';
import Actividad3 from './Pantallas/actividad3';
import Actividad4 from './Pantallas/actividad4';
import Actividad5 from './Pantallas/actividad5';
import Actividad6 from './Pantallas/actividad6';
import Actividad7 from './Pantallas/actividad7';
import Actividad8 from './Pantallas/actividad8';
import Actividad9 from './Pantallas/actividad9';
import Actividad10 from './Pantallas/actividad10';
import Actividad11 from './Pantallas/actividad11';
import Actividad12 from './Pantallas/actividad12';
import Actividad13 from './Pantallas/actividad13';
import Actividad14 from './Pantallas/actividad14';
import Actividad15 from './Pantallas/actividad15';
import Actividad16 from './Pantallas/actividad16';
import Actividad17 from './Pantallas/actividad17';
import Actividad18 from './Pantallas/actividad18';
import Actividad19 from './Pantallas/actividad19';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('inicio');

  const renderContenido = () => {
    switch (pantallaActual) {
      case 'actividad1': return <Actividad1 />;
      case 'actividad2': return <Actividad2 />;
      case 'actividad3': return <Actividad3 />;
      case 'actividad4': return <Actividad4 />;
      case 'actividad5': return <Actividad5 />;
      case 'actividad6': return <Actividad6 />;
      case 'actividad7': return <Actividad7 />;
      case 'actividad8': return <Actividad8 />;
      case 'actividad9': return <Actividad9 />;
      case 'actividad10': return <Actividad10 />;
      case 'actividad11': return <Actividad11 />;
      case 'actividad12': return <Actividad12 />;
      case 'actividad13': return <Actividad13 />;
      case 'actividad14': return <Actividad14 />;
      case 'actividad15': return <Actividad15 />;
      case 'actividad16': return <Actividad16 />;
      case 'actividad17': return <Actividad17 />;
      case 'actividad18': return <Actividad18 />;
      case 'actividad19': return <Actividad19 />;
      default:
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Actividades de Programación para Móviles II</Text>
            <View style={styles.buttonGrid}>
              {Array.from({ length: 19 }, (_, i) => (
                <TouchableOpacity
                  key={i + 1}
                  style={styles.button}
                  onPress={() => setPantallaActual(`actividad${i + 1}`)}
                >
                  <RNText style={styles.buttonText}>Actividad {i + 1}</RNText>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderContenido()}
      {pantallaActual !== 'inicio' && (
        <View style={styles.volverButton}>
          <TouchableOpacity onPress={() => setPantallaActual('inicio')} style={styles.backButton}>
            <RNText style={styles.buttonText}>Volver al inicio</RNText>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    paddingTop: 50,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#4682B4',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    margin: 5,
    minWidth: 140,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  volverButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#A52A2A',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
});


