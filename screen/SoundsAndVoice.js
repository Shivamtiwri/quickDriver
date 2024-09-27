import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const SoundsAndVoice = () => {
  const [volume, setVolume] = useState('Normal'); // Volume level state
  const [isVoiceNavigation, setIsVoiceNavigation] = useState(false);
  const [isReadMessages, setIsReadMessages] = useState(false);
  const [isAnnounceEvents, setIsAnnounceEvents] = useState(false);
  const [isSeatbeltReminder, setIsSeatbeltReminder] = useState(false);

  // Volume button press handler
  const handleVolumeChange = newVolume => {
    setVolume(newVolume);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tax Information</Text>
      </View>
      <Text style={styles.title}>VOICE</Text>
      <Text style={styles.subtitle}>Volume</Text>

      <View style={styles.volumeContainer}>
        <TouchableOpacity
          style={[
            styles.volumeButton,
            volume === 'Softer' && styles.selectedButton,
          ]}
          onPress={() => handleVolumeChange('Softer')}>
          <Text style={styles.buttonText}>Softer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.volumeButton,
            volume === 'Normal' && styles.selectedButton,
          ]}
          onPress={() => handleVolumeChange('Normal')}>
          <Text style={styles.buttonText}>Normal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.volumeButton,
            volume === 'Louder' && styles.selectedButton,
          ]}
          onPress={() => handleVolumeChange('Louder')}>
          <Text style={styles.buttonText}>Louder</Text>
        </TouchableOpacity>
      </View>

      {/* Toggles */}
      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Voice navigation</Text>
        <Switch
          value={isVoiceNavigation}
          onValueChange={setIsVoiceNavigation}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Read rider messages</Text>
        <Switch value={isReadMessages} onValueChange={setIsReadMessages} />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Announce trip events</Text>
        <Switch value={isAnnounceEvents} onValueChange={setIsAnnounceEvents} />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionText}>Seatbelt reminder</Text>
        <Switch
          value={isSeatbeltReminder}
          onValueChange={setIsSeatbeltReminder}
        />
      </View>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    fontSize: 14,
    margin: 10,
  },
  volumeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  volumeButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#31423C',
    borderColor: '#007bff',
    color: '#FFFF',
  },
  buttonText: {
    color: '#FFFF',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default SoundsAndVoice;
