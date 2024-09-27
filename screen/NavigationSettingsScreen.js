import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const NavigationSettings = () => {
  const [selectedApp, setSelectedApp] = useState('Uber Navigation');
  const [autoNavigate, setAutoNavigate] = useState(false);

  // Function to handle app selection
  const selectApp = app => {
    setSelectedApp(app);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.sectionTitle}>Navigation app</Text> */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tax Information</Text>
      </View>

      {/* List of navigation apps */}
      <View style={{padding: 10}}>
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => selectApp('Uber Navigation')}>
          <View style={styles.optionContainer1}>
            <Text style={styles.optionText}>Uber Navigation</Text>
            {selectedApp === 'Uber Navigation' && (
              <Text style={styles.checkmark}>✔️</Text>
            )}
          </View>

          <Text style={styles.subText}>Recommended: Stay in this app</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => selectApp('Google Maps')}>
          <View style={styles.optionContainer1}>
            <Text style={styles.optionText}>Google Maps</Text>
            {selectedApp === 'Google Maps' && (
              <Text style={styles.checkmark}>✔️</Text>
            )}
          </View>

          <Text style={styles.subText}>Launches in separate app</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => selectApp('Waze')}>
          <View style={styles.optionContainer1}>
            <Text style={styles.optionText}>Waze</Text>
            {selectedApp === 'Waze' && <Text style={styles.checkmark}>✔️</Text>}
          </View>

          <Text style={styles.subText}>Launches in separate app</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => selectApp('Apple Maps')}>
          <View style={styles.optionContainer1}>
            <Text style={styles.optionText}>Apple Maps</Text>
            {selectedApp === 'Apple Maps' && (
              <Text style={styles.checkmark}>✔️</Text>
            )}
          </View>

          <Text style={styles.subText}>Launches in separate app</Text>
        </TouchableOpacity>

        {/* Navigation settings */}
        <Text style={styles.sectionTitle}>Navigation settings</Text>

        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Auto-navigate</Text>
          <Switch value={autoNavigate} onValueChange={setAutoNavigate} />
        </View>

        <Text style={styles.subText}>
          Start trips in turn-by-turn mode. You'll see a brief route overview
          first.
        </Text>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginVertical: 10,
  },
  optionContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  checkmark: {
    color: '#007bff',
    fontSize: 18,
  },
});

export default NavigationSettings;
