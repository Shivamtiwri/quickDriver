import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {StatusBar} from 'native-base';

export default function HomeScreen(nav) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={true} />
      <Image source={require('../assets/uber.webp')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to the</Text>
        <Text style={styles.appNameText}>Driver app</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigation.navigate('EntaerNumber')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <Text style={styles.alternativeText}>or Ride with Quick</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '70%',
    // resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#31423C',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
  },
  appNameText: {
    color: '#31423C',
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#31423C',
    width: '100%',
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 15,
  },
  alternativeText: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'center',
  },
});
