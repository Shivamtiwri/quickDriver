import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function EntaerNumberScreen(nav) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Mobile Number</Text>

      <View style={styles.row}>
        <View style={styles.countryCode}>
          <Image
            source={require('../assets/india.webp')}
            style={styles.flagImage}
          />
          {/* <Ionicons style={styles.icon} name={'caret-down'} size={22} /> */}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter number"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigation.navigate('Otpverifay')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <View style={styles.socialContainer}>
        <View style={styles.socialButton}>
          <Image
            source={require('../assets/300221.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </View>
      </View>

      <Text style={styles.orText}>or</Text>

      <View style={styles.findAccount}>
        {/* <Ionicons name="search-sharp" color={'black'} size={25} /> */}
        <Text style={styles.findAccountText}>Find my account</Text>
      </View>

      <Text style={styles.description}>
        Appendixes, headings, illustrations, etc. the original words of an
        author or speaker, as opposed to a translation, paraphrase, commentary,
        or the like: The newspaper published the whole text of the speech.
      </Text>
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
  title: {
    color: '#31423C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  countryCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31423C',
    padding: 10,
    borderRadius: 8,
  },
  flagImage: {
    height: 40,
    width: 64,
  },
  icon: {
    paddingLeft: 10,
  },
  inputContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: '#31423C',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#31423C',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  orText: {
    color: '#808080',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  socialIcon: {
    height: 28,
    width: 28,
  },
  socialText: {
    color: '#31423C',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
  findAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  findAccountText: {
    color: '#31423C',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  description: {
    textAlign: 'center',
    color: '#31423C',
    marginTop: 20,
  },
});
