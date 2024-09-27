import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const PrivacyCenterScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Privacy Center</Text>
      </View>
      <Text style={styles.subHeaderText}>
        Take control of your privacy and learn how we protect it.
      </Text>
      <View style={{padding: 10}}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Your data and privacy at Uber
          </Text>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>
              Would you like to see a summary of how you use Uber?
            </Text>
            <Text style={styles.cardButton}>See summary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>
              What can drivers see about riders?
            </Text>
            <Text style={styles.cardButton}>View</Text>
          </TouchableOpacity>
        </View>

        {/* Section: Ads and Data */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Ads and Data</Text>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Offers and Promos from Uber</Text>
            <Text style={styles.listItemSubText}>
              Control personalized offers and promos from Uber
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Data Tracking</Text>
            <Text style={styles.listItemSubText}>
              Control Data Tracking for Personalized Ads
            </Text>
          </TouchableOpacity>
        </View>

        {/* Section: Account security */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Account security</Text>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Account Deletion</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Section: Your data and privacy at Uber */}
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
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#666',
  },
  //   headerText: {
  //     fontSize: 22,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //     marginTop: 20,
  //   },
  subHeaderText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'start',
    margin: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  cardButton: {
    marginTop: 10,
    fontSize: 14,
    color: '#007AFF',
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  listItemSubText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default PrivacyCenterScreen;
