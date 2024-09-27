import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Home';
import EntaerNumberScreen from './EntaerNumberScreen';
import OtpverifayScreen from './OtpverifayScreen';
import DacumentScreen from './DacumentScreen';
import ProfilePhotoScreen from './ProfilePhotoScreen';
import DriverLicenseScreen from './DriverLicenseScreen';
import AadhaarScreen from './AadhaarScreen';
import PanCardScreen from './PanCardScreen';
import RegistrationScreen from './RegistrationScreen';
import VehicleInsuranceScreen from './VehicleInsuranceScreen';
import VehiclepermitScreen from './VehiclepermitScreen';
import DrawerNavigatorScreen from './DrawerNavigatorScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

export default function ScreenRouts() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EntaerNumber" component={EntaerNumberScreen} />
        <Stack.Screen name="Otpverifay" component={OtpverifayScreen} />
        <Stack.Screen name="Dacument" component={DacumentScreen} />
        <Stack.Screen name="ProfilePhoto" component={ProfilePhotoScreen} />
        <Stack.Screen name="DriverLicense" component={DriverLicenseScreen} />
        <Stack.Screen name="Aadhaar" component={AadhaarScreen} />
        <Stack.Screen name="PanCard" component={PanCardScreen} />

        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigatorScreen}
        />
        <Stack.Screen
          name="VehicleInsurance"
          component={VehicleInsuranceScreen}
        />
        <Stack.Screen name="Vehiclepermit" component={VehiclepermitScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
