import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

export default function RideCheck() {
  const [rideCheckEnabled, setRideCheckEnabled] = useState(false);
  const [crashDetectionEnabled, setCrashDetectionEnabled] = useState(false);

  const toggleRideCheck = () =>
    setRideCheckEnabled(previousState => !previousState);
  const toggleCrashDetection = () =>
    setCrashDetectionEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>RideCheck</Text> */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tax Information</Text>
      </View>
      <View style={{padding: 10}}>
        {/* RideCheck Description */}
        <View style={styles.infoContainer}>
          <Text style={styles.subheading}>What's a RideCheck?</Text>
          <Text style={styles.text}>
            In the case of an unexpected event, Uber will initiate a RideCheck,
            providing you with access to relevant safety tools so that you can
            quickly get the help you need.
          </Text>
        </View>

        {/* RideCheck Notifications Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.label}>RideCheck Notifications</Text>
          <Switch value={rideCheckEnabled} onValueChange={toggleRideCheck} />
        </View>
        <Text style={styles.description}>
          When turned on, Uber will send you a RideCheck notification if a trip
          doesn't progress as planned.
        </Text>

        {/* Crash Detection Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.label}>Crash Detection</Text>
          <Switch
            value={crashDetectionEnabled}
            onValueChange={toggleCrashDetection}
          />
        </View>
        <Text style={styles.description}>
          When turned on, Uber will send you a RideCheck notification in the
          case of a possible crash.
        </Text>
      </View>
    </View>
  );
}

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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 30,
  },
});
