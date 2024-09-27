import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EarningsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Earnings</Text>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={25} color="#FFFF" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* Earnings Info */}
        <View style={styles.earningsSection}>
          <View style={styles.earningsRow}>
            <Text style={styles.earningsValue}>$328.50</Text>
            <View style={styles.barGraph}>
              {/* Placeholder for the bar graph */}
              <Text style={styles.graphBar}>M T W T F S S</Text>
            </View>
          </View>
          <Text style={styles.earningsDate}>Feb 12 - Feb 19</Text>
          <Text style={styles.earningsSubInfo}>Online: 21h 31m</Text>
          <Text style={styles.earningsSubInfo}>Trips: 17</Text>
          <Text style={styles.earningsSubInfo}>Points: 23</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>See details</Text>
          </TouchableOpacity>
        </View>

        {/* Balance and Cash Out */}
        <View style={styles.balanceSection}>
          <Text style={styles.balanceText}>
            Balance: $328.50 (Payment scheduled for Feb 19)
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Cash out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Summary</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Additional Options */}
        <View style={styles.optionsSection}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>
              See a map of earnings trends in Kansas City
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>
              Uber Pro Blue (Points reset Apr 30)
            </Text>
          </TouchableOpacity>
          <Text style={styles.optionSubText}>
            Earn 167 more points to achieve Gold
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>More ways to earn</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#31423C',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFF',
  },
  body: {
    padding: 16,
  },
  earningsSection: {
    backgroundColor: '#f7f7f7',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  earningsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  earningsValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  barGraph: {
    alignItems: 'flex-end',
  },
  graphBar: {
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'right',
  },
  earningsDate: {
    fontSize: 16,
    color: '#888',
    marginVertical: 8,
  },
  earningsSubInfo: {
    fontSize: 16,
    color: '#555',
  },
  detailsButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  balanceSection: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
  },
  balanceText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  optionsSection: {
    marginBottom: 16,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#007AFF',
  },
  optionSubText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
  },
});

export default EarningsScreen;
