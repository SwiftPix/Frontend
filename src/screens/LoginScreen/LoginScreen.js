import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import KeyboardAvoidingWrapper from '../../components/KeyboardWrapper';
import { loginUser } from '../../services/api'; 
import logo from '../../../assets/logoTop.png';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser({ cpf, password });
      console.log('Login bem-sucedido:', response);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', error.error || 'Não foi possível fazer login. Tente novamente.');
    }
  };

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
              onChangeText={setCpf}
              placeholderTextColor='#DEDEDE'
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Senha:</Text>
            <TextInput
              value={password}
              style={styles.input}
              secureTextEntry
              onChangeText={setPassword}
              placeholderTextColor='#DEDEDE'
              placeholder='*************'
            />
          </View>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={handleLogin}
          >
            <Text style={styles.btnText}>Avançar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('DocChoiceScreen')}>
          <Text style={styles.accountText}>Ainda não tem uma conta?</Text>
          <Text style={styles.registerText}>Crie agora</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginScreen;
