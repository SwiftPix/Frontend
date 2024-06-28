import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import LoadingAppScreen from '../loadingApp/loadingAppScreen';
import logo from '../../../assets/logoTop.png';
import styles from './styles';
import { createUser } from '../../services/api';

const DocChoiceScreen = () => {
  const navigation = useNavigation();
  const [cpf, setCpf] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // Verificação dos campos obrigatórios
    if (!name || !email || !cpf || !cellphone || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    // Verificação do formato da senha
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        name,
        email,
        cpf,
        cellphone,
        password,
        account: '000',  
        agency: '0001', 
        balance: 0.0,  
        currency: 'real',  
        institution: '001'
      };
      console.log('Enviando payload:', userData);
      await createUser(userData);
      Alert.alert('Sucesso', 'Usuário criado com sucesso!');
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Biometrics');
      }, 2000); // 2 segundos
    } catch (error) {
      setLoading(false);
      console.log('Erro ao criar usuário:', error);
      const errorMessage = error.error || 'Não foi possível criar o usuário. Tente novamente.';
      if (errorMessage.includes('já está cadastrado')) {
        Alert.alert('Erro', 'Usuário já está cadastrado.');
      } else {
        Alert.alert('Erro', errorMessage);
      }
    }
  };

  if (loading) {
    return <LoadingAppScreen />;
  }

  const isFormValid = name && email && cpf && cellphone && password;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoView}>
            <Image style={styles.headerImg} source={logo} />
          </View>
          <View style={styles.formView}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <TextInputMask
              type={'cpf'}
              value={cpf}
              onChangeText={setCpf}
              style={styles.input}
              placeholder="CPF"
            />
            <TextInput
              style={styles.input}
              placeholder="Celular"
              value={cellphone}
              onChangeText={setCellphone}
              maxLength={8}  
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              secureTextEntry
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={isFormValid ? styles.buttonNext : styles.buttonNextDisabled}
              onPress={handleRegister}
              disabled={!isFormValid}
            >
              <Text style={styles.textNext}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DocChoiceScreen;
