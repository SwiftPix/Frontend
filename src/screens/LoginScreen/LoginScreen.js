// Import React Components
import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

// Import Component Keyboard Avoid Wrapper
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';

// Import User Context
import { UserContext } from '../../context/userContext';

import logo from '../../../assets/logoTop.png';

// Interface
const LoginScreen = ({ navigation }) => {
  const context = useContext(UserContext);
  const [cpf, onChangeText] = useState('');
  const [password, onChangeNumber] = useState(null);
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.loginBox}>
          <View style={styles.helloContent}>
            <Text style={styles.helloText}>Bem-vindo de volta!</Text>
            <Text style={styles.secondaryHelloText}>Preencha os campos abaixo para acessar sua conta.</Text>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>CPF:</Text>
            <TextInputMask
              type="cpf"
              value={cpf}
              placeholder='000.000.000-00'
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              placeholderTextColor='#DEDEDE'
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Senha:</Text>
            <TextInput
              value={password}
              style={styles.input}
              secureTextEntry
              onChangeNumber={(text) => onChangeNumber(text)}
              placeholderTextColor='#DEDEDE'
              placeholder='*************'
            />
          </View>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              //context.setId(cpf);
              navigation.navigate('HomeScreen');
            }}
          >
            <Text style={styles.btnText}>Avançar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerBtn}  onPress={() => navigation.navigate('DocChoiceScreen')}  >
          <Text style={styles.accountText}>Ainda não tem uma conta?</Text>
          <Text style={styles.registerText}>Crie agora</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginScreen;
