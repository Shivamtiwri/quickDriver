import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Welcome and Image */}
      <View style={styles.imageContainer}>
        {/* <Image
          source={require('')} // Update path to image
          style={styles.image}
          resizeMode="contain"
        /> */}
        <Image source={require('../assets/uber.webp')} style={styles.image} />
      </View>

      {/* Login Form */}
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Welcome back! Please sign in...</Text>

        {/* User ID Input */}
        <TextInput
          placeholder="USER ID"
          value={userId}
          onChangeText={setUserId}
          style={styles.input}
        />

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="PASSWORD"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              //   style={styles.valueText1}
              name="heart"
              size={24}
              color="#31423C"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        {/* Create New Account */}
        <TouchableOpacity>
          <Text style={styles.createAccountText}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Background color to match the theme in the image
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: '80%',
    height: '60%',
  },
  loginContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  forgotText: {
    color: '#ccc',
    textAlign: 'right',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#b58d33',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
