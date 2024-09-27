import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function OtpverifayScreen(nav) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, Shivam@</Text>
      <Text style={styles.infoText}>
        Enter the 4-digit code sent to your WhatsApp at your number
      </Text>
      <Text style={styles.linkText}>Changed your mobile number?</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter OTP"
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigation.navigate('Dacument')}>
          <Text style={styles.buttonText}>Send code via SMS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    width: '100%',
  },
  welcomeText: {
    color: '#31423C',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
  },
  infoText: {
    color: '#31423C',
    fontSize: 16,
  },
  linkText: {
    color: '#31423C',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#31423C',
    borderRadius: 10,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#31423C',
    borderRadius: 10,
    marginVertical: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
