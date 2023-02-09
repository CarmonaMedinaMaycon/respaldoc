import { StatusBar } from 'expo-status-bar';
import { RefreshControlBase, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app";
import Navigation from './config/navigation/Navigation';

//view es un div
export default function App() {
  
  return (
    <Navigation/>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
