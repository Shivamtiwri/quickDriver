import React, {useState} from 'react';
import {View, Text, Switch, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

export default function RecordMyRide() {
  const [isRecordingEnabled, setIsRecordingEnabled] = useState(false);
  const [recordMode, setRecordMode] = useState('Video and Audio'); // Default to Video and Audio

  const toggleRecording = () =>
    setIsRecordingEnabled(previousState => !previousState);

  const setRecordingMode = mode => setRecordMode(mode);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Record My Ride</Text> */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Record My Riden</Text>
      </View>
      <View style={{padding: 20}}>
        {/* Toggle for enabling/disabling recording */}
        <View style={styles.toggleContainer}>
          <Text style={styles.label}>Record with your phone</Text>
          <Switch value={isRecordingEnabled} onValueChange={toggleRecording} />
        </View>

        {isRecordingEnabled && (
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                recordMode === 'Video and Audio' && styles.activeButton,
              ]}
              onPress={() => setRecordingMode('Video and Audio')}>
              <Text style={styles.optionText}>Video and Audio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                recordMode === 'Audio Only' && styles.activeButton,
              ]}
              onPress={() => setRecordingMode('Audio Only')}>
              <Text style={styles.optionText}>Audio Only</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Dashcam Registration */}
        <View style={styles.dashcamContainer}>
          <Text style={styles.subheading}>Record with your Dashcam</Text>
          <Text style={styles.text}>
            When you register your dashcam on the app, passengers will be
            notified before they enter your vehicle.
          </Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Register Dashcam</Text>
          </TouchableOpacity>
        </View>

        {/* Notification for riders */}
        <View style={styles.riderNotification}>
          <Text style={styles.subheading}>What riders see</Text>
          <Text style={styles.notificationText}>
            Driver is recording for added safety
          </Text>
          <Text style={styles.infoText}>
            We'll let your rider know that they'll be recorded. Local laws may
            require additional signage in your vehicle.
          </Text>
        </View>
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  options: {
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  dashcamContainer: {
    marginBottom: 20,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  registerButton: {
    padding: 15,
    backgroundColor: '#31423C',
    borderRadius: 5,
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  riderNotification: {
    marginTop: 20,
  },
  notificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#31423C',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});
