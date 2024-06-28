/* eslint-disable camelcase */

// Import fonts IBM
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_700Bold,
  IBMPlexSans_500Medium
} from '@expo-google-fonts/ibm-plex-sans/';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens imports
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import LoginRegisScreen from './src/screens/LoginRegis/LoginRegisScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/Home/homeScreen';
import LoadingScreen from './src/screens/loading/loadingScreen';
import LoadingAppScreen from './src/screens/loadingApp/loadingAppScreen';
import DocChoiceScreen from './src/screens/documentChoice/documentChoiceScreen';
import FinishRegister from './src/screens/finishRegister/finishRegisterScreen';
import BiometricScreen from './src/screens/biometric/biometricScreen';
import SelectKeyScreen from './src/screens/selectKey/selectKeyScreen';
import StatementScreen from './src/screens/statement/statementScreen';
import ValueTransferScreen from './src/screens/valueTransfer/valueTransferScreen';
import DataReviewScreen from './src/screens/dataReview/dataReviewScreen';
import ReceiptScreen from './src/screens/Receipt/ReceiptScreen';
import ExpensesScreen from './src/screens/expenses/expensesScreen';


// Context imports
import UserProvider from './src/context/userContext';
import TransctionProvider from './src/context/transactionContext';
import AddExpenseScreen from './src/components/addExpense/addExpense';

const AppStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    ibmRegular: IBMPlexSans_400Regular,
    boldIBM: IBMPlexSans_700Bold,
    mediumIBM: IBMPlexSans_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      
      <AppStack.Navigator
            headerModel="none"
            screenOptions={{
              headerTransparent: true,
              title: null
            }}
          > 
            {/* <AppStack.Screen
              name="Onboarding"
              component={OnboardingScreen}
            />

            <AppStack.Screen
              name="LoginRegis"
              component={LoginRegisScreen}
            />

            <AppStack.Screen
              name="DataReviewScreen"
              component={DataReviewScreen}
            />
            <AppStack.Screen
              name="Biometrics"
              component={BiometricScreen}
            />
            <AppStack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
               <AppStack.Screen
              name="FinishRegister"
              component={FinishRegister}
            /> */}
            <AppStack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <AppStack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen
              name="LoadingAppScreen"
              component={LoadingAppScreen}
              options={{
                headerShown: false,
              }}
            />
             <AppStack.Screen
              name="DocChoiceScreen"
              component={DocChoiceScreen}
            />
             <AppStack.Screen
              name="SelectKeyScreen"
              component={SelectKeyScreen}
            />
               <AppStack.Screen
              name="ValueTransferScreen"
              component={ValueTransferScreen}
            />
            <AppStack.Screen
              name="ReceiptScreen"
              component={ReceiptScreen}
            />
             <AppStack.Screen
              name="StatementScreen"
              component={StatementScreen}
            />
            <AppStack.Screen
              name="ExpensesScreen"
              component={ExpensesScreen}
            />
            <AppStack.Screen
              name="AddExpenseScreen"
              component={AddExpenseScreen}
            />

          </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
