// Import React Components
import React from 'react';
import { SafeAreaView, Image, View, Text, ActivityIndicator  } from 'react-native';
import styles from './styles';

// Import Images
import Logo from '../../../assets/logoUnB.png';

// Interface
const LoadingAppScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={Logo} testID='logo-image' />
      <View style={styles.byIbmContent}>
        <Text style={styles.textBy} testID='text-by'>BY</Text>
        <Text style={styles.textIbm} testID='text-ibm'>UnB</Text>
      </View>
      <ActivityIndicator size="small" color="#00A896" /> 
    </SafeAreaView>
  );
};

export default LoadingAppScreen;
