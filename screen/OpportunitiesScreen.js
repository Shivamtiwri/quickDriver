import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OpportunitiesScreen = nav => {
  // Sample data for opportunities
  const opportunities = [
    {
      time: '12:00 AM - 1:00 AM',
      extra: '$4.50',
      description: 'Sign up for $4.50 extra on every trip',
    },
    {
      time: '2:00 AM - 3:00 AM',
      extra: '$3.50',
      description: 'Sign up for $3.50 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
    {
      time: '6:00 AM - 7:00 AM',
      extra: '$2.00',
      description: 'Sign up for $2 extra on every trip',
    },
  ];

  return (
    <View style={styles.container}>
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
          <Text style={styles.headerText}>Opportunities</Text>
        </View>
      </View>
      {/* <View style={styles.header}>
        <Ionicons name="close" size={24} color="black" />
        <Text style={styles.headerTitle}>Opportunities</Text>
      </View> */}

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Promotions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Reservations</Text>
        </TouchableOpacity>
      </View>

      {/* Date Bar */}
      <View style={styles.dateBar}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <View
            key={index}
            style={[styles.day, index === 6 && styles.activeDay]}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.dateText}>{12 + index}</Text>
          </View>
        ))}
      </View>

      {/* Opportunity List */}
      <ScrollView style={styles.opportunityList}>
        {opportunities.map((item, index) => (
          <View key={index} style={styles.opportunityItem}>
            <View style={styles.timeWrapper}>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Boost+</Text>
              <Text style={styles.label}>Rides only</Text>
            </View>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  dateBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#f7f7f7',
  },
  day: {
    alignItems: 'center',
  },
  activeDay: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  opportunityList: {
    padding: 16,
  },
  opportunityItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 16,
  },
  timeWrapper: {
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  labelWrapper: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
    padding: 4,
    marginRight: 8,
    fontSize: 12,
    color: '#555',
  },
  signUpButton: {
    backgroundColor: '#31423C',
    padding: 10,
    borderRadius: 4,
    width: 80,
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default OpportunitiesScreen;
