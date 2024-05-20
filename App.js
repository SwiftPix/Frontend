/* eslint-disable camelcase */

// Import fonts IBM
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_700Bold,
} from '@expo-google-fonts/ibm-plex-sans/';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens imports
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import FinishRegister from './src/screens/finishRegister/finishRegisterScreen';


const AppStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    ibmRegular: IBMPlexSans_400Regular,
    boldIBM: IBMPlexSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      
          <AppStack.Navigator
            headerModel="none"
            screenOptions={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#0F61FD',
              },
              headerTitleStyle: {
                fontFamily: 'boldIBM',
                fontSize: 20,
              },
              headerTitleAlign: 'center',
            }}
          >
            <AppStack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{ headerShown: false }}
            />
          </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
