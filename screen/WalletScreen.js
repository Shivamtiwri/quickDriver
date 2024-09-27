import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons

const WalletScreen = ({navigation}) => {
  const balance = 328.5;
  const payoutDate = 'February 19';
  const payoutActivity = [
    {amount: 94.89, date: 'Feb 12, 2024', type: 'Weekly payment'},
  ];

  const renderPayoutItem = ({item}) => (
    <TouchableOpacity style={styles.payoutItem}>
      <View style={styles.payoutDetails}>
        <Text style={styles.payoutAmount}>${item.amount.toFixed(2)}</Text>
        <Text style={styles.payoutDate}>Initiated {item.date}</Text>
        <View style={styles.payoutTypeContainer}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.payoutType}> {item.type}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward-outline" size={22} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wallet</Text>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
        <Text style={styles.payoutDateText}>
          Payout scheduled: {payoutDate}
        </Text>
        <TouchableOpacity style={styles.cashoutButton}>
          <Ionicons name="flash-outline" size={16} color="#fff" />
          <Text style={styles.cashoutButtonText}> Cash out</Text>
        </TouchableOpacity>
      </View>

      {/* Payout Activity Section */}
      <View style={styles.payoutActivityContainer}>
        <View style={styles.activityHeader}>
          <Text style={styles.sectionTitle}>Payout activity</Text>
          <TouchableOpacity onPress={() => console.log('See all pressed')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.lastPayoutText}>Last payouts</Text>
        <FlatList
          data={payoutActivity}
          renderItem={renderPayoutItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Payment Methods & Help Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="card-outline" size={22} color="#000" />
          <Text style={styles.footerText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="help-circle-outline" size={22} color="#000" />
          <Text style={styles.footerText}>Help</Text>
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
  balanceContainer: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 16,
    color: '#31423C',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#31423C',
  },
  payoutDateText: {
    fontSize: 14,
    color: '#31423C',
    marginBottom: 20,
  },
  cashoutButton: {
    flexDirection: 'row',
    backgroundColor: '#31423C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  cashoutButtonText: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  payoutActivityContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#31423C',
  },
  seeAllText: {
    fontSize: 16,
    color: '#31423C',
  },
  lastPayoutText: {
    fontSize: 16,
    color: '#31423C',
    marginBottom: 10,
  },
  payoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  payoutDetails: {
    flexDirection: 'column',
  },
  payoutAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#31423C',
  },
  payoutDate: {
    fontSize: 14,
    color: '#31423C',
  },
  payoutTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  payoutType: {
    fontSize: 14,
    color: '#31423C',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#31423C',
  },
});

export default WalletScreen;
