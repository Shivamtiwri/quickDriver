import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import ScreenRouts from './screen/ScreenRouts';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        gestureEnabled: false,
      }}>
      {/* <SafeAreaProvider> */}
      <NativeBaseProvider>
        <PaperProvider>
          <ScreenRouts />
        </PaperProvider>
      </NativeBaseProvider>
      {/* </SafeAreaProvider> */}
    </NavigationContainer>
  );
}
