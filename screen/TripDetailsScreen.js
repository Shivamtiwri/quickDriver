import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Box, Icon, Divider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TripDetailsScreen = nav => {
  return (
    <Box safeArea bg="white" flex={1}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            //   onPress={() => nav.navigation.navigate('Dacument')}
            style={styles.backButton}>
            <Ionicons
              onPress={() => nav.navigation.navigate('Landing')}
              name="close"
              color={'white'}
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Trip Details</Text>
        </View>

        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
          <Ionicons name="help-sharp" color={'black'} size={15} />
        </TouchableOpacity>
      </View>

      {/* Trip Summary */}
      <View style={styles.summaryView}>
        <Text style={styles.summaryText}>
          From Jan 15 - Feb 12, Uber's service fee was -$20.84. The number is
          negative because you made more from fares and promotions than the
          customer price (excluding tips, which are always 100% yours,
          government fees, other third-party fees, and operational expenses).
          There is no cost to you. Tap to see the weekly breakdown at
          drivers.uber.com.
        </Text>
      </View>

      <View style={styles.fareContainer}>
        <Text style={styles.boldText}>Upfront Fare: $13.33</Text>
      </View>

      {/* Divider */}
      <Divider my={3} />

      {/* Recorded Trip Section */}
      <Text style={styles.sectionTitle}>Recorded Trip</Text>
      <Text style={styles.recordedTripText}>
        There is a recording attached to this trip. You may choose to include it
        in the report.
      </Text>

      <View style={styles.recordingContainer}>
        <View style={styles.ClipViwe}>
          <Ionicons
            onPress={() => nav.navigation.navigate('Landing')}
            name="close"
            color={'black'}
            size={25}
          />
          <Text style={styles.recordingInfo}>1 Clip(s)</Text>
        </View>

        <Text style={styles.recordingInfo}>Total time: 06m51s</Text>
      </View>

      {/* Report and Delete Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigation.navigate('ReportTrip')}>
          <Text style={styles.buttonText}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          //   onPress={() => nav.navigation.navigate('Otpverifay')}
        >
          <Text style={styles.buttonText1}>Delete</Text>
        </TouchableOpacity>
      </View>

      {/* Recording Expiration */}
      <Text style={styles.expirationText}>Recording expires in 7 days</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: '#31423C',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  button1: {
    backgroundColor: '#F0FFFF',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonText1: {
    color: '#31423C',
    fontSize: 18,
    textAlign: 'center',
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
  summaryText: {
    fontSize: 16,
    marginBottom: 15,
    color: 'gray',
  },
  summaryView: {
    padding: 10,
    margin: 10,
    backgroundColor: '#F0FFFF',
  },
  fareContainer: {
    marginBottom: 20,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#31423C',
  },
  recordedTripText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },
  recordingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  ClipViwe: {
    flexDirection: 'row',
  },
  recordingInfo: {
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
    padding: 10,
  },
  reportButton: {
    marginBottom: 10,
  },
  deleteButton: {
    marginBottom: 10,
  },
  expirationText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default TripDetailsScreen;
