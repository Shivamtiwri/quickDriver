import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const SpeedLimitScreen = () => {
  const [showSpeedLimit, setShowSpeedLimit] = useState(false);
  const [below55mph, setBelow55mph] = useState('5');
  const [above55mph, setAbove55mph] = useState('10');

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="close-outline" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Speed Limit</Text>
      </View>
      {/* <Text style={styles.header}>Speed Limit</Text> */}
      <View style={{padding: 10}}>
        <View style={styles.row}>
          <Text style={styles.label}>Show Speed Limit</Text>
          <Switch
            value={showSpeedLimit}
            onValueChange={() => setShowSpeedLimit(!showSpeedLimit)}
          />
        </View>
        {/* Speeding Alerts */}
        <Text style={styles.sectionTitle}>Speeding alerts</Text>
        <Text style={styles.subText}>Set when you want to get alerts</Text>
        {/* Speed Limit below 55 mph */}
        <Text style={styles.sectionSubTitle}>Speed limit below 55 mph</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={value => setBelow55mph(value)}
            value={below55mph}>
            <View style={styles.radioButtonRow}>
              <RadioButton value="3" />
              <Text style={styles.radioLabel}>3 mph</Text>
            </View>
            <View style={styles.radioButtonRow}>
              <RadioButton value="5" />
              <Text style={styles.radioLabel}>5 mph</Text>
            </View>
            <View style={styles.radioButtonRow}>
              <RadioButton value="7" />
              <Text style={styles.radioLabel}>7 mph</Text>
            </View>
          </RadioButton.Group>
        </View>
        {/* Speed Limit 55 mph or above */}
        <Text style={styles.sectionSubTitle}>Speed limit 55 mph or above</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={value => setAbove55mph(value)}
            value={above55mph}>
            <View style={styles.radioButtonRow}>
              <RadioButton value="7" />
              <Text style={styles.radioLabel}>7 mph</Text>
            </View>
            <View style={styles.radioButtonRow}>
              <RadioButton value="10" />
              <Text style={styles.radioLabel}>10 mph</Text>
            </View>
            <View style={styles.radioButtonRow}>
              <RadioButton value="15" />
              <Text style={styles.radioLabel}>15 mph</Text>
            </View>
          </RadioButton.Group>
        </View>
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
  backArrow: {
    fontSize: 24,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  sectionSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  radioGroup: {
    flexDirection: 'col',
    marginTop: 8,
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioLabel: {
    fontSize: 16,
  },
});

export default SpeedLimitScreen;
