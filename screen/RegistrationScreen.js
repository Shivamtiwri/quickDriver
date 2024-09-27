import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RegistrationScreen({navigation}) {
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
        <Text style={styles.titleText}>
          Take a photo of your Registration Certificate (RC)
        </Text>
        <Text style={styles.description}>
          If the vehicle owner name on the vehicle documents is different from
          mine, then I hereby confirm that I have the vehicle owner's consent to
          drive this vehicle on the Uber Platform. This declaration can be
          treated as a No-Objection Certificate and releases Uber from any legal
          obligations and consequences.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/licenceCard.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.takePhotoButton}>
          <Text style={styles.takePhotoButtonText}>Take Photo</Text>
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
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
  takePhotoButton: {
    backgroundColor: '#31423C',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
  },
  takePhotoButtonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
