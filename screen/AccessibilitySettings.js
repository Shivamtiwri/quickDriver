import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const AccessibilitySettings = () => {
  const [flashForRequests, setFlashForRequests] = useState(false);
  const [vibrateForRequests, setVibrateForRequests] = useState(false);
  const [deafOrHardOfHearing, setDeafOrHardOfHearing] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Accessibility Settings</Text>
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.title}>Screen flash for requests</Text>
        <Text style={styles.description}>
          This makes your screen flash when you receive a request or alert, in
          addition to making a sound.
        </Text>
        <Switch
          value={flashForRequests}
          onValueChange={value => setFlashForRequests(value)}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.title}>Vibration for requests</Text>
        <Text style={styles.description}>
          This makes your phone vibrate when you receive a request or alert, in
          addition to making a sound.
        </Text>
        <Switch
          value={vibrateForRequests}
          onValueChange={value => setVibrateForRequests(value)}
        />
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.title}>Languages you know</Text>
        <Text style={styles.description}>
          Riders will see this in your driver profile. This helps them know the
          best way to communicate with you.
        </Text>
      </View>

      <View style={styles.settingContainer}>
        <Text style={styles.title}>
          Let riders know I'm deaf or hard of hearing
        </Text>
        <Text style={styles.description}>
          When this is on, riders will receive an in-app notification letting
          them know you're deaf or hard of hearing. Riders will still be able to
          message you in the app, but not call.
        </Text>
        <Switch
          value={deafOrHardOfHearing}
          onValueChange={value => setDeafOrHardOfHearing(value)}
        />
      </View>
    </ScrollView>
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
  settingContainer: {
    margin: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
});

export default AccessibilitySettings;
