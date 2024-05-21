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
            <Text style={styles.helloText}>Olá,</Text>
            <Text style={styles.againText}>novamente!</Text>
          </View>
          <Text style={styles.loginText}>CPF:</Text>
          <TextInputMask
            type="cpf"
            value={cpf}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
          />
          <Text style={styles.loginText}>Senha:</Text>
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            onChangeNumber={(text) => onChangeNumber(text)}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              context.setId(cpf);
              navigation.navigate('HomeScreen');
            }}
          >
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.accountText}>Ainda não possui uma conta?</Text>
          <Text style={styles.registerText}>Cadastre-se!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginScreen;
