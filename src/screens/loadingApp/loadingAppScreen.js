// Import React Components
import React from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import styles from './styles';

// Import Images
import Logo from '../../../assets/rigelLogo1.png';

// Interface
const LoadingAppScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.byIbmContent}>
        <Text style={styles.textBy}>BY</Text>
        <Text style={styles.textIbm}>IBM</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingAppScreen;
