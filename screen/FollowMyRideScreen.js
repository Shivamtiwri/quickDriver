import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const FollowMyRideScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Follow My Ride</Text>
      </View>
      {/* Header */}
      {/* <Text style={styles.header}>Follow My Ride</Text> */}

      {/* Image Section */}
      <Image
        source={require('../assets/image.jpg')} // Replace with your image link
        style={styles.image}
      />

      {/* Text description */}
      <Text style={styles.description}>
        Easily share trips with friends and family.
      </Text>

      {/* Learn More button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#31423C',
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFF',
    marginLeft: 10,
  },
  backArrow: {
    fontSize: 24,
  },

  image: {
    width: '100%',
    height: 200,
    marginTop: 24,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    color: 'black',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#31423C',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 20,
  },
});

export default FollowMyRideScreen;
