import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NativeBaseProvider, Box, IconButton, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const messages = [
  {
    id: '1',
    icon: 'heart',
    message: 'You received a $6.16 tip!',
    timestamp: 'Today, 12:53 AM',
    link: 'TripDetails',
  },
  {
    id: '2',
    icon: 'star',
    message: 'Save up to $2,000 on a pre-owned Chevy Bolt',
    timestamp: 'Yesterday, 12:27 PM',
    link: '',
  },
  {
    id: '3',
    icon: 'heart',
    message: 'You received a $1.00 tip!',
    timestamp: '2/12/24, 11:20 PM',
    link: '',
  },
  {
    id: '4',
    icon: 'lightbulb',
    message: 'Prime times to earn',
    timestamp: '2/12/24, 8:24 PM',
    link: '',
  },
  {
    id: '5',
    icon: 'heart',
    message: 'You received a $3.00 tip!',
    timestamp: '2/12/24, 7:23 AM',
    link: '',
  },
  {
    id: '6',
    icon: 'heart',
    message: 'You received a $3.00 tip!',
    timestamp: '2/10/24, 12:06 AM',
    link: '',
  },
  {
    id: '7',
    icon: 'card-giftcard',
    message: 'Update on the Diamond cash reward',
    timestamp: '2/9/24, 4:53 PM',
    link: '',
  },
];

const InboxScreen = nav => {
  const renderMessages = () => {
    return messages.map(item => (
      <TouchableOpacity
        onPress={() => nav.navigation.navigate('TripDetails')}
        key={item.id}
        style={styles.messageContainer}>
        <IconButton
          icon={
            <Ionicons
              style={styles.valueText1}
              name={item.icon}
              size={24}
              color="#31423C"
            />
          }
          borderRadius="full"
          _icon={{
            color: 'black',
          }}
        />
        <View style={styles.messageTextContainer}>
          <Text style={styles.messageText}>{item.message}</Text>
          <Text style={styles.timestampText}>{item.timestamp}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <NativeBaseProvider>
      <Box safeArea>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons
                onPress={() => nav.navigation.navigate('Landing')}
                name="close"
                color={'white'}
                size={25}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Inbox</Text>
          </View>

          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpText}>Help</Text>
            <Ionicons name="help-sharp" color={'black'} size={15} />
          </TouchableOpacity>
        </View>

        <Text style={styles.allMessagesText}>All messages</Text>

        <ScrollView style={styles.scrollContainer}>
          {renderMessages()}
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
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
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  helpText: {
    color: '#31423C',
    fontFamily: 'sans-serif',
    marginRight: 6,
  },
  allMessagesText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  messageTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestampText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default InboxScreen;
