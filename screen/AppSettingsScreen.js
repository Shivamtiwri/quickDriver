import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {List, Switch} from 'react-native-paper'; // UI components from React Native Paper
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const AppSettingsScreen = nav => {
  const [isNightModeOn, setIsNightModeOn] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>App Settings</Text>
      </View>
      <View style={{padding: 10}}>
        <List.Section title="">
          <List.Item
            title="Sounds & Voice"
            left={() => <List.Icon icon="volume-high" />}
            onPress={() => nav.navigation.navigate('SoundsAnd')}
          />
          <List.Item
            title="Navigation"
            left={() => <List.Icon icon="navigation" />}
            onPress={() => nav.navigation.navigate('NavigationSettings')}
          />
          <List.Item
            title="Accessibility"
            left={() => <List.Icon icon="accessibility" />}
            onPress={() => nav.navigation.navigate('AccessibilitySettings')}
          />
          <List.Item
            title="Communication"
            left={() => <List.Icon icon="message" />}
            onPress={() => {}}
          />
          <List.Item
            title="Night Mode"
            left={() => <List.Icon icon="weather-night" />}
            right={() => (
              <Switch
                value={isNightModeOn}
                onValueChange={() => setIsNightModeOn(!isNightModeOn)}
              />
            )}
          />
          <List.Item
            title="Follow My Ride"
            left={() => <List.Icon icon="map-marker" />}
            onPress={() => nav.navigation.navigate('FollowMyRide')}
          />
          <List.Item
            title="Emergency Contacts"
            left={() => <List.Icon icon="phone" />}
            onPress={() => {}}
          />
          <List.Item
            title="Speed Limit"
            left={() => <List.Icon icon="speedometer" />}
            onPress={() => nav.navigation.navigate('SpeedLimit')}
          />
          <List.Item
            title="911 Data Sharing"
            left={() => <List.Icon icon="alert" />}
            onPress={() => {}}
          />

          <List.Item
            title="RideCheck"
            left={() => <List.Icon icon="shield" />}
            onPress={() => nav.navigation.navigate('RideCheck')}
          />
          <List.Item
            title="Record My Ride"
            left={() => <List.Icon icon="video" />}
            onPress={() => nav.navigation.navigate('RecordMyRide')}
          />
        </List.Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    // padding: 16,
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
    fontSize: 20,
    marginBottom: 10,
  },
});

export default AppSettingsScreen;
