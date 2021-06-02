
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/SignupLoginScreen';

export default function App() {
  return (
    <View>
     <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
