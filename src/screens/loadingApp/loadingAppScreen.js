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
      <Image style={styles.logo} source={Logo} />
      <View style={styles.byIbmContent}>
        <Text style={styles.textBy}>BY</Text>
        <Text style={styles.textIbm}>UnB</Text>
      </View>
      <ActivityIndicator size="small" color="#00A896" /> 
    </SafeAreaView>
  );
};

export default LoadingAppScreen;
