import React from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import Loader from 'react-native-three-dots';
import { ActivityIndicator } from 'react-native-paper';
import styles from './styles';

// Import Imgs
import logo from '../../../assets/appIcon.png';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        animating
        size={60}
        color="#4589FF"
        style={styles.loadingIcon}
        testID="activity-indicator"
      />
      <View style={styles.loadingContent}>
        <Text style={styles.loadingText}>Carregando</Text>
        <Loader speed={400} color="#4589FF" />
      </View>
      <Image style={styles.logo} source={logo} testID='logo-image'/>
    </SafeAreaView>
  );
};

export default LoadingScreen;
