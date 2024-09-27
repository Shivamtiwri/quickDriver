import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReferFriendsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refer friends</Text>
      </View>

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* Invitees and earnings */}
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Invitees</Text>
              <Text style={styles.infoValue}>1</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>You earned</Text>
              <Text style={styles.infoValue}>$150</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.viewStatusButton}>
            <Text style={styles.viewStatusText}>View status</Text>
          </TouchableOpacity>
        </View>

        {/* Info box */}
        <View style={styles.infoBoxContainer}>
          <Text style={styles.infoText}>
            You can now invite couriers to try rides. It's a new way for you to
            earn extra cash. Steps below.
          </Text>
        </View>

        {/* Earnings detail */}
        <View style={styles.earningsContainer}>
          <Text style={styles.earningsText}>
            For every friend you invite, earn up to $180
          </Text>
          <Text style={styles.subText}>Share your referral link</Text>
          <Text style={styles.subDescription}>
            You can invite friends who are new or returning to Uber. You can
            also invite delivery friends who haven’t tried rides yet.
          </Text>
        </View>
      </ScrollView>

      {/* Invite Button */}
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>Invite</Text>
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
    padding: 16,
    backgroundColor: '#31423C',
    // borderBottomWidth: 1,
    // borderColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#FFFF',
  },
  body: {
    padding: 16,
  },
  section: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    color: '#888',
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewStatusButton: {
    marginTop: 8,
    alignSelf: 'center',
  },
  viewStatusText: {
    color: '#007AFF',
    fontSize: 16,
  },
  infoBoxContainer: {
    padding: 16,
    backgroundColor: '#e6f0ff',
    borderRadius: 8,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
  },
  earningsContainer: {
    marginBottom: 16,
  },
  earningsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    marginVertical: 8,
  },
  subDescription: {
    fontSize: 14,
    color: '#888',
  },
  inviteButton: {
    backgroundColor: '#31423C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
  },
  inviteButtonText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReferFriendsScreen;
