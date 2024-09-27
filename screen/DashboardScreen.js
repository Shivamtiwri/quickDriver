import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('today');

  // Dummy data for pickups
  const pickups = {
    today: [
      {
        id: 1,
        type: 'Airport Departure',
        info: 'JETBLUE / 123 / North Charleston (CHS), SC, US',
        pickupTime: '1:15 PM 12-Sep-2024',
        duration: '34 min',
        guest: 'Khalid Malik',
        email: 'khalid30us@yahoo.com',
        phone: '8162139291',
        price: '$75',
        status: 'Trip Accepted',
        pickupLocation: '8511 Oxford Ave, Raytown, MO 64138, USA',
        dropOffLocation: '1 Kansas City Blvd, Kansas City, MO 64153, USA',
      },
    ],
    tomorrow: [],
    byDate: [],
  };

  const renderPickups = tabKey => {
    return pickups[tabKey].map(pickup => (
      <View key={pickup.id} style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="plane" size={20} color="#1c8ef9" />
          <Text style={styles.cardTitle}>{pickup.type}</Text>
          <Text style={styles.status}>{pickup.status}</Text>
        </View>

        <Text style={styles.flightInfo}>Flight Info: {pickup.info}</Text>
        <Text style={styles.time}>
          Pickup: {pickup.pickupTime} - Duration: {pickup.duration}
        </Text>

        <View style={styles.location}>
          <Icon name="map-marker" size={16} color="#ff6347" />
          <Text style={styles.locationText}>
            Pickup Location: {pickup.pickupLocation}
          </Text>
        </View>
        <View style={styles.location}>
          <Icon name="map-marker" size={16} color="#ff6347" />
          <Text style={styles.locationText}>
            Drop Off Location: {pickup.dropOffLocation}
          </Text>
        </View>

        <View style={styles.guestInfo}>
          <Text style={styles.guestName}>{pickup.guest}</Text>
          <Text style={styles.price}>{pickup.price}</Text>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="directions" size={20} color="#fff" />
            <Text style={styles.iconText}>Get Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="call" size={20} color="#fff" />
            <Text style={styles.iconText}>Call Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="stop-circle" size={20} color="#fff" />
            <Text style={styles.iconText}>End Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Trip</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'today' && styles.activeTab]}
          onPress={() => setSelectedTab('today')}>
          <Text style={styles.tabText}>Today Pickups</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'tomorrow' && styles.activeTab]}
          onPress={() => setSelectedTab('tomorrow')}>
          <Text style={styles.tabText}>Tomorrow Pickups</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'byDate' && styles.activeTab]}
          onPress={() => setSelectedTab('byDate')}>
          <Text style={styles.tabText}>Search By Date</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>{renderPickups(selectedTab)}</ScrollView>
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  activeTab: {
    backgroundColor: '#1c8ef9',
    margin: 5,
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  flightInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  time: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#333',
  },
  guestInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  guestName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconButton: {
    backgroundColor: '#1c8ef9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 5,
  },
  iconText: {
    marginLeft: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dashboard;
