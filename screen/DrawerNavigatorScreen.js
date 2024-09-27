import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
// import {Drawer} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Left from './Left';
import LandingScreen from './LandingScreen';
import CustomDrawerContent from './CustomDrawerContent';

import InboxScreen from './Inboxscreen';
import TripDetailsScreen from './TripDetailsScreen';
import ReportTripScreen from './ReportTripScreen';
import ReferFriendsScreen from './ReferFriendsScreen';
import EarningsScreen from './EarningsScreen';
import OpportunitiesScreen from './OpportunitiesScreen';
import WalletScreen from './WalletScreen';
import AccountScreen from './AccountScreen';
import PaymentScreen from './PaymentScreen';
import TaxInformationScreen from './TaxInformationScreen';
import TaxSummariesScreen from './TaxSummariesScreen';
import PrivacyCenterScreen from './PrivacyCenterScreen';
import AppSettingsScreen from './AppSettingsScreen';
import SoundsAndVoice from './SoundsAndVoice';
import NavigationSettings from './NavigationSettingsScreen';
import AccessibilitySettings from './AccessibilitySettings';
import FollowMyRideScreen from './FollowMyRideScreen';
import SpeedLimitScreen from './SpeedLimitScreen';
import RecordMyRide from './RecordMyRide';
import RideCheck from './RideCheckScreen';
import Dashboard from './DashboardScreen';

const RNDrawer = createDrawerNavigator();

export default function DrawerNavigatorScreen() {
  const navigation = useNavigation();

  return (
    <RNDrawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFFF', // Match with drawer background
          padding: 20,
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#aaa',
        drawerType: 'back',
      }}>
      <RNDrawer.Screen name="Landing" component={LandingScreen} />
      <RNDrawer.Screen name="Dashboard" component={Dashboard} />
      <RNDrawer.Screen name="Inbox" component={InboxScreen} />
      <RNDrawer.Screen name="TripDetails" component={TripDetailsScreen} />
      <RNDrawer.Screen name="ReportTrip" component={ReportTripScreen} />
      <RNDrawer.Screen name="ReferFriends" component={ReferFriendsScreen} />
      <RNDrawer.Screen name="Earnings" component={EarningsScreen} />
      <RNDrawer.Screen name="SoundsAndVoice" component={SoundsAndVoice} />
      <RNDrawer.Screen
        name="OpNavigationSettingsportunities"
        component={OpportunitiesScreen}
      />
      <RNDrawer.Screen name="Wallet" component={WalletScreen} />
      <RNDrawer.Screen name="Account" component={AccountScreen} />
      <RNDrawer.Screen name="Payment" component={PaymentScreen} />
      <RNDrawer.Screen name="TaxInformation" component={TaxInformationScreen} />
      <RNDrawer.Screen name="TaxSummaries" component={TaxSummariesScreen} />
      <RNDrawer.Screen name="PrivacyCenter" component={PrivacyCenterScreen} />
      <RNDrawer.Screen name="AppSettings" component={AppSettingsScreen} />
      <RNDrawer.Screen name="SoundsAnd" component={SoundsAndVoice} />
      <RNDrawer.Screen name="RideCheck" component={RideCheck} />
      <RNDrawer.Screen name="RecordMyRide" component={RecordMyRide} />
      <RNDrawer.Screen name="FollowMyRide" component={FollowMyRideScreen} />
      <RNDrawer.Screen name="SpeedLimit" component={SpeedLimitScreen} />
      <RNDrawer.Screen
        name="AccessibilitySettings"
        component={AccessibilitySettings}
      />
      <RNDrawer.Screen
        name="NavigationSettings"
        component={NavigationSettings}
      />
    </RNDrawer.Navigator>
  );
}

// const styles = StyleSheet.create({});
