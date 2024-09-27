import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Icons library

const TaxSummariesScreen = nav => {
  // Dummy data for tax summaries
  const annualData = [
    {year: '2023', title: '2023 Annual tax summary'},
    {year: '2022', title: '2022 Annual tax summary'},
    {year: '2021', title: '2021 Annual tax summary'},
  ];

  const monthlyData = [
    {month: 'August 2023', title: 'August 2023 Monthly summary'},
    {month: 'July 2023', title: 'July 2023 Monthly summary'},
  ];

  // Tab state: 0 for Annual, 1 for Monthly
  const [selectedTab, setSelectedTab] = useState(0);

  // Function to render the custom tab content based on selected tab
  const renderTabContent = () => {
    if (selectedTab === 0) {
      return (
        <ScrollView style={styles.scrollContainer}>
          {annualData.map(item => (
            <TouchableOpacity key={item.year} style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.scrollContainer}>
          {monthlyData.map(item => (
            <TouchableOpacity key={item.month} style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Tax Summaries</Text> */}
      <View style={styles.header}>
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons
            onPress={() => nav.navigation.navigate('Landing')}
            name="close-outline"
            size={28}
            color="#FFFF"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tax Information</Text>
      </View>
      <Text style={styles.description}>
        Here you can find statements of your earnings, expenses and net payouts
        from Uber on a monthly or annual basis.
      </Text>

      {/* Custom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 0 && styles.activeTab]}
          onPress={() => setSelectedTab(0)}>
          <Text
            style={[styles.tabText, selectedTab === 0 && styles.activeTabText]}>
            Annual
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 1 && styles.activeTab]}
          onPress={() => setSelectedTab(1)}>
          <Text
            style={[styles.tabText, selectedTab === 1 && styles.activeTabText]}>
            Monthly
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>{renderTabContent()}</View>
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
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#31423C',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  item: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TaxSummariesScreen;
