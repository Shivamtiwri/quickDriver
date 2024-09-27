import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const PaymentScreen = nav => {
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View> */}

      {/* Payout Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payout</Text>
        <TouchableOpacity style={styles.payoutItem}>
          <Ionicons name="card-outline" size={24} color="#31423C" />
          <View style={styles.payoutTextContainer}>
            <Text style={styles.payoutText}>Bank Account - XXXXXXXXXX40</Text>
            <Text style={styles.payoutSubText}>Earnings paid out weekly</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.payoutPeriod}>
          A week runs from Monday at 4:00 a.m. to the following Monday at 3:59
          a.m. All rides during that time period will count towards that week's
          pay period.
        </Text>
      </View>

      {/* Linked Payment Methods Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Linked payment methods</Text>
        <TouchableOpacity style={styles.paymentItem}>
          <Ionicons name="card-outline" size={24} color="#000" />
          <Text style={styles.paymentText}>Uber Pro Card</Text>
          <Text style={styles.paymentSubText}>
            Get access to your earnings after every trip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentItem}>
          <Ionicons name="card-outline" size={24} color="#31423C" />
          <Text style={styles.paymentText}>Bank Account - XXXXXXXXXX40</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentItem}>
          <Ionicons name="card-outline" size={24} color="#31423C" />
          <Text style={styles.paymentText}>Bank Card - 9504</Text>
        </TouchableOpacity>
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

  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#31423C',
    marginBottom: 10,
  },
  payoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  payoutTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  payoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#31423C',
  },
  payoutSubText: {
    fontSize: 14,
    color: '#31423C',
  },
  payoutPeriod: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  paymentText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#31423C',
  },
  paymentSubText: {
    fontSize: 12,
    color: '#777',
  },
});

export default PaymentScreen;
