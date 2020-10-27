import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, ActivityIndicator, WebView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>

        <Image source={require('./assets/konexio-logo_1.png')}
          style={{ width: 250, height: 70, margin: 'auto' }} />
        <Image
          source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
          style={{ width: 250, height: 70, margin: 'auto' }} />

        <Text style={styles.txt1}>Bienvenue dans mon App</Text>
        <Text style={styles.txt2}>Retrouvez ici les dernières News</Text>
        <Text style={styles.txt3}>N'hésitez pas à vous abonner</Text>
        <Button title="Press me"
          onPress={() =>alert('Simple Button pressed')} />
      </View>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    flex: 1,
  },

  txt1: {
    fontSize: 30,
    marginVertical: 80,
  },

  txt2: {
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 80,
  },

  txt3: {
    fontWeight: 'bold',
    paddingTop: 80,
    paddingBottom: 80,
  },
});
