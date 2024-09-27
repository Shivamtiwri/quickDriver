import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const AccountScreen = nav => {
  const menuItems = [
    {icon: 'briefcase-outline', text: 'Work Hub', link: ''},
    {icon: 'document-text-outline', text: 'Documents', link: ''},
    {icon: 'card-outline', text: 'Payment', link: 'Payment'},
    {icon: 'calculator-outline', text: 'Tax Info', link: 'TaxInformation'},
    {icon: 'person-outline', text: 'Manage Uber account', link: ''},
    {icon: 'location-outline', text: 'Edit Address', link: ''},
    {icon: 'umbrella-outline', text: 'Insurance', link: ''},
    {icon: 'lock-closed-outline', text: 'Privacy', link: 'PrivacyCenter'},
    {icon: 'settings-outline', text: 'App Settings', link: 'AppSettings'},
    {icon: 'information-circle-outline', text: 'About', link: ''},
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Account</Text>
      </View>

      {/* Vehicle Section */}
      <TouchableOpacity style={styles.vehicleSection}>
        <Image
          source={{
            uri: 'https://www.iconpacks.net/icons/1/free-car-icon-1057-thumb.png',
          }}
          style={styles.vehicleImage}
        />
        <View style={styles.vehicleTextContainer}>
          <Text style={styles.vehicleTitle}>Vehicles</Text>
          <Text style={styles.vehicleSubtitle}>Toyota Sienna RK7N8D</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
      </TouchableOpacity>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            onPress={() => nav.navigation.navigate(item.link)}
            key={index}
            style={styles.menuItem}>
            <View style={styles.menuItemContent}>
              <Ionicons name={item.icon} size={24} color="#000" />
              <Text style={styles.menuItemText}>{item.text}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#000" />
          </TouchableOpacity>
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
  vehicleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F9F9F9',
    marginHorizontal: 20,
    borderRadius: 10,
    margin: 20,
  },
  vehicleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    color: '#31423C',
  },
  vehicleTextContainer: {
    flex: 1,
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#31423C',
  },
  vehicleSubtitle: {
    fontSize: 14,
    color: '#31423C',
  },
  menuList: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#31423C',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#31423C',
  },
});

export default AccountScreen;
