import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const TaxInformationScreen = nav => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Tax Information</Text> */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tax Information</Text>
      </View>

      <TouchableOpacity
        style={styles.item}
        onPress={() => nav.navigation.navigate('TaxSettings')}>
        <Text style={styles.title}>Tax Settings</Text>
        <Text style={styles.description}>
          Keep your tax information up to date.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        // onPress={() => nav.navigation.navigation.navigate('')}
        onPress={() => nav.navigation.navigate('TaxSummaries')}>
        <Text style={styles.title}>Tax Summaries</Text>
        <Text style={styles.description}>
          Track your earnings, expenses and net payout.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => nav.navigation.navigate('TaxForms')}>
        <Text style={styles.title}>Tax Forms 1099-K, 1099-MISC, 1099-NEC</Text>
        <Text style={styles.description}>
          For filling your annual tax return with the IRS.
        </Text>
      </TouchableOpacity>
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
  //   header: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     marginBottom: 16,
  //   },
  item: {
    margin: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default TaxInformationScreen;
