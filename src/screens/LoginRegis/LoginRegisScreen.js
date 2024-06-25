// Import React Compenents
import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import logo from '../../../assets/appIcon.png';

// Interface
const LoginRegisScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.desc}>Seu app de Internet Banking</Text>
      <TouchableOpacity style={styles.btnRegis}>
        <Text style={styles.regisText}>Abrir uma conta no SwiftPix</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.loginText}>Já possuo cadastro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginRegisScreen;
