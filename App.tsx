import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Login from './src/screens/Login';

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Login></Login>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusIcon: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 10,
  },
  connected: {
    color: '#34C759',
  },
  disconnected: {
    color: '#FF3B30',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  pingResult: {
    marginTop: 15,
    fontSize: 16,
  },
});