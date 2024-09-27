import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      style={{}}
      {...props}
      contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1726531200&semt=ais_hybrid',
          }} // Profile image URL
          style={{width: 50, height: 50, borderRadius: 25}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            Shivam Tiwari
          </Text>
          <Text style={{fontSize: 12}}>⭐ 4.87</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <View>
        <Text
          onPress={() => props.navigation.navigate('Dashboard')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Dashboard
        </Text>
        <Text
          onPress={() => props.navigation.navigate('Inbox')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Inbox
        </Text>
        <Text
          onPress={() => props.navigation.navigate('ReferFriends')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Refer Friends
        </Text>
        <Text
          onPress={() => props.navigation.navigate('Opportunities')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Opportunities
        </Text>
        <Text
          onPress={() => props.navigation.navigate('Earnings')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Earnings
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Uber Pro
        </Text>
        <Text
          onPress={() => props.navigation.navigate('Wallet')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Wallet
        </Text>
        <Text
          onPress={() => props.navigation.navigate('Account')}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#31423C',
          }}>
          Account
        </Text>

        {/* Other items */}
        <Text style={{fontSize: 18, marginTop: 20}}>Help</Text>
        <Text style={{fontSize: 18, marginTop: 10}}>Learning Center</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingLeft: 20,
    // paddingTop: 30,
  },
  profileSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    color: '#888',
    fontSize: 14,
  },
  drawerSection: {
    marginTop: 20,
  },
  drawerItemLabel: {
    color: '#fff',
    fontSize: 16,
  },
  iconStyle: {
    backgroundColor: '#121212',
    padding: 8,
    borderRadius: 10,
  },
});
