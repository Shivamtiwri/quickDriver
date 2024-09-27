import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Icon, MD3Colors} from 'react-native-paper';

export default function DacumentScreen(nav) {
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
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
    },
    helpButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 50,
    },
    helpText: {
      color: '#31423C',
      fontFamily: 'sans-serif',
      marginHorizontal: 4,
    },
    welcomeContainer: {
      paddingHorizontal: 8,
      marginTop: 20,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#31423C',
      marginBottom: 10,
    },
    instructionText: {
      fontSize: 16,
      color: 'black',
    },
    itemContainer: {
      marginTop: 20,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginVertical: 10,
    },
    itemText: {
      fontWeight: 'bold',
      color: '#31423C',
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#31423C',
    },
  });

  const data = [
    {id: '1', name: 'Profile Photo', link: 'ProfilePhoto'},
    {id: '2', name: 'Driving License - Front', link: 'DriverLicense'},
    {id: '3', name: 'Aadhaar Card', link: 'Aadhaar'},
    {id: '4', name: 'PAN Card', link: 'PanCard'},
    {id: '5', name: 'Registration Certificate (RC)', link: 'Registration'},
    {id: '6', name: 'Vehicle Insurance', link: 'VehicleInsurance'},
    {id: '7', name: 'Vehicle Permit', link: 'Vehiclepermit'},
    {id: '8', name: 'Preferred Language hello', link: ''},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quick</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
          <Ionicons name="chevron-down-sharp" color={'black'} size={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome, Shivam</Text>
        <Text style={styles.instructionText}>
          Here’s what you need to do to set up your account...
        </Text>
      </View>
      <View style={styles.itemContainer}>
        {data.map(item => (
          <View key={item.id}>
            <TouchableOpacity
              onPress={() => nav.navigation.navigate(item.link)}
              style={styles.item}>
              <View>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
              <TouchableOpacity>
                {/* <Ionicons name="chevron-forward" color={'black'} size={15} /> */}
                <Icon source="home" color={'#31423C'} size={20} />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        ))}
      </View>
    </View>
  );
}
