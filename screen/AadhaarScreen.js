import React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AadhaarScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dacument')}
            style={styles.backButton}>
            <Ionicons name="arrow-back-outline" color={'white'} size={25} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Quick</Text>
        </View>

        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
          <Ionicons name="chevron-down-sharp" color={'black'} size={15} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.titleText}>Let's find your Aadhaar card</Text>
        <Text style={styles.description}>
          Enter your Aadhaar and we'll get your information from UIDA. By
          sharing your Aadhaar details, you hereby confirm that you have shared
          such details voluntarily.
        </Text>
        <Image
          source={require('../assets/licenceCard.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Aadhaar Number</Text>
        <TextInput
          placeholder="0000 0000 0000"
          keyboardType="numeric"
          style={styles.textInput}
        />

        <Text style={styles.uploadText}>Upload document instead</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    backgroundColor: '#31423C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 12,
    borderRadius: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  helpText: {
    color: '#31423C',
    marginRight: 6,
  },
  content: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  titleText: {
    color: '#31423C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#31423C',
    marginBottom: 20,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 15,
  },
  inputLabel: {
    color: '#31423C',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  uploadText: {
    color: '#31423C',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 15,
  },
  footer: {
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  continueButton: {
    backgroundColor: '#31423C',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
  },
  continueButtonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
