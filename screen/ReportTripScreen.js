import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import {NativeBaseProvider, Box, Icon, Checkbox} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReportTripScreen = nav => {
  const [isRecordingShared, setIsRecordingShared] = useState(true);

  return (
    <Box bg="white" flex={1}>
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
          <Text style={styles.headerText}>Report trip to Uber</Text>
        </View>
      </View>

      {/* Icon/Image */}
      {/* <View style={styles.iconContainer}> */}
      {/* You can replace this with any Image */}

      {/* </View> */}
      <Image source={require('../assets/image.jpg')} style={styles.image} />

      {/* Description */}
      <Text style={styles.descriptionText}>
        Every Uber experience should feel safe and respectful. Please describe
        what happened in as much detail as you can. A member of our Safety Team
        will contact you.
      </Text>

      {/* Share Recording */}
      <Text style={styles.shareDetailsText}>Share details</Text>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        {/* <CheckBox
          value={isRecordingShared}
          onValueChange={setIsRecordingShared}
        /> */}
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
        <View style={styles.clipInfo}>
          <Text style={styles.recordingText}>
            1 Clip(s) | Total time: 06m51s
          </Text>
          <Text style={styles.recordingSubtitle}>
            Uber will review your recording as part of the investigation
          </Text>
        </View>
      </View>

      {/* Send Button */}
      <View style={styles.sendButton}>
        {/* <Button
          title="Send"
          onPress={() => {}}
          color={isRecordingShared ? 'gray' : 'lightgray'} // Disable the button if checkbox is unchecked
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigation.navigate('ReportTrip')}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </Box>
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
  image: {height: 200, width: '100%'},
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
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
    height: '70%',
    width: '100%',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
    textAlign: 'center',
    margin: 5,
  },
  shareDetailsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  clipInfo: {
    marginLeft: 10,
  },
  recordingText: {
    fontSize: 16,
  },
  recordingSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  sendButton: {
    padding: 10,
    // marginTop: 20,
    // backgroundColor: 'gray',
    // borderRadius: 8,
  },
  button: {
    backgroundColor: '#31423C',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ReportTripScreen;
