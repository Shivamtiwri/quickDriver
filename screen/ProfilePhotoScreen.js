import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfilePhotoScreen(nav) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => nav.navigation.navigate('Dacument')}
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
          Your face isn't clearly visible in the photo you sent
        </Text>
        <Text style={styles.infoText}>
          Please take a new photo. Make sure that your face is well-lit and
          centered in the middle of the screen.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/usre.webp')}
          style={styles.image}
          alt="User Image"
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => nav.navigation.navigate('DrawerNavigator')}
          style={styles.photoButton}>
          <Text style={styles.photoButtonText}>Take Photo</Text>
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
    color: '#FFFF',
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
    fontFamily: 'sans-serif',
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
  infoText: {
    color: '#31423C',
    fontSize: 14,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  footer: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  photoButton: {
    backgroundColor: '#31423C',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
  },
  photoButtonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
