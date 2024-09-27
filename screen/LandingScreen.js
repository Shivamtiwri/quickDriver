import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  Actionsheet,
  Button,
  Center,
  FormControl,
  Input,
  useDisclose,
  Modal,
} from 'native-base';

export default function LandingScreen() {
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [open, setOpen] = useState(true);

  const openModal = placement => {
    setOpen(true);
  };
  const styles11 = {
    bottom: {
      marginBottom: 0,
      marginTop: 'auto',
      width: '100%',
    },
    // center: {},
  };
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.opacity1}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons
            style={styles.valueText1}
            name="menu"
            size={24}
            color="#31423C"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity}>
          <Text style={styles.valueText}>$00</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.opacity1}
          onPress={() => alert('Search clicked!')}>
          <Ionicons
            style={styles.valueText1}
            name="search"
            size={24}
            color="#31423C"
          />
        </TouchableOpacity>
      </View>
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.883189280645627,
          longitude: 80.9455472541691,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>

      {/* <Button onPress={() => openModal(true)}>Button</Button> */}
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="400px" {...styles11['bottom']}>
          <View style={styles.bottomDrawer}>
            <View style={styles.headerContainer1}>
              <Text style={styles.offlineText}>You're offline</Text>
            </View>

            <View style={styles.promotion}>
              <Text style={styles.promotionLabel}>Promotion</Text>
              <Text style={styles.promotionText}>
                Sign up for $2 extra on every trip
              </Text>
              <Image
                source={require('../assets/map.png')}
                style={styles.image}
              />
            </View>
          </View>
        </Modal.Content>
      </Modal>

      {/* <Actionsheet isOpen={isOpen} onClose={onClose}>
        
        <Actionsheet.Content>
          <View style={styles.bottomDrawer}>
            <View style={styles.headerContainer1}>
              <Text style={styles.offlineText}>You're offline</Text>
            </View>

            <View style={styles.promotion}>
              <Text style={styles.promotionLabel}>Promotion</Text>
              <Text style={styles.promotionText}>
                Sign up for $2 extra on every trip
              </Text>
              <Image
                source={require('../assets/map.png')}
                style={styles.image}
              />
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
    backgroundColor: '#fff',
    height: 80,
  },
  balanceContainer: {
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: '100%',
    // height: '70%',
    // resizeMode: 'contain',
  },
  map: {
    flex: 1,
  },
  goButtonContainer: {
    position: 'absolute',
    bottom: 200,
    left: '45%',
    transform: [{translateX: -30}],
  },
  goButton: {
    backgroundColor: '#31423C',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomDrawer: {
    backgroundColor: '#fff',
    padding: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'start',
  },
  offlineText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    color: '#31423C',
  },
  promotion: {
    alignItems: 'center',
    color: '#31423C',
  },
  promotionLabel: {
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },
  promotionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#31423C',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent', // Transparent background
    padding: 10,
    position: 'absolute',
    top: 0,
    zIndex: 99,
    left: 0,
    right: 0,
  },
  valueText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  valueText1: {
    color: '#31423C',
    fontSize: 25,
    textAlign: 'center',
  },
  opacity: {
    backgroundColor: '#31423C',
    padding: 5,
    width: '20%',
    borderRadius: 20,
  },
  opacity1: {
    backgroundColor: 'white',
    padding: 5,
    width: '15%',
    borderRadius: 20,
  },
  headerContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
